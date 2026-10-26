import { NextResponse } from "next/server";
import { ZONES, type ZoneKey } from "@/data/prices";

export const runtime = "nodejs";

type Payload = {
  name: string;
  phone: string;
  zone: ZoneKey;
  date?: string;
  time?: string;
};

const ZONE_KEYS = new Set<string>(ZONES.map((z) => z.key));

function bad(error: string, status = 400) {
  return NextResponse.json({ ok: false, error }, { status });
}

function parse(body: unknown): { ok: true; data: Payload } | { ok: false; error: string } {
  if (!body || typeof body !== "object") return { ok: false, error: "Некорректный запрос" };
  const b = body as Record<string, unknown>;

  // Поле-ловушка для ботов: у людей оно всегда пустое.
  if (typeof b.website === "string" && b.website.trim() !== "") {
    return { ok: false, error: "Некорректный запрос" };
  }

  const name = typeof b.name === "string" ? b.name.trim() : "";
  if (name.length < 2 || name.length > 60) return { ok: false, error: "Укажи имя" };

  const phoneRaw = typeof b.phone === "string" ? b.phone.trim() : "";
  const digits = phoneRaw.replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 15) return { ok: false, error: "Проверь номер телефона" };

  const zone = typeof b.zone === "string" ? b.zone : "";
  if (!ZONE_KEYS.has(zone)) return { ok: false, error: "Выбери зону" };

  const date = typeof b.date === "string" && /^\d{4}-\d{2}-\d{2}$/.test(b.date) ? b.date : undefined;
  const time = typeof b.time === "string" && /^\d{2}:\d{2}$/.test(b.time) ? b.time : undefined;

  return { ok: true, data: { name, phone: phoneRaw, zone: zone as ZoneKey, date, time } };
}

function formatMessage(d: Payload): string {
  const zoneTitle = ZONES.find((z) => z.key === d.zone)?.title ?? d.zone;
  const when = [d.date, d.time].filter(Boolean).join(" ") || "не указано";
  return ["🎮 Новая заявка на бронь", "", `Имя: ${d.name}`, `Телефон: ${d.phone}`, `Зона: ${zoneTitle}`, `Когда: ${when}`].join("\n");
}

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return bad("Некорректный запрос");
  }

  const parsed = parse(body);
  if (!parsed.ok) return bad(parsed.error);

  const text = formatMessage(parsed.data);
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (token && chatId) {
    try {
      const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text }),
        signal: AbortSignal.timeout(8000),
      });
      if (!res.ok) {
        console.error("[booking] telegram error", res.status, await res.text().catch(() => ""));
        return bad("Не удалось отправить заявку", 502);
      }
    } catch (err) {
      console.error("[booking] telegram request failed", err);
      return bad("Не удалось отправить заявку", 502);
    }
  } else {
    // Канал доставки не настроен — хотя бы в лог сервера.
    console.log("[booking]\n" + text);
  }

  return NextResponse.json({ ok: true });
}
