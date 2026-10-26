import { ZONES, type Pack, type ZoneKey } from "@/data/prices";
import { site } from "@/data/site";

const GREETING = "Здравствуйте! Пишу вам с сайта VS Game Hub.";

/** Ссылка в чат WhatsApp клуба с предзаполненным текстом. */
export function waLink(text: string): string {
  return `https://wa.me/${site.whatsappPhone}?text=${encodeURIComponent(text)}`;
}

/** Кнопки «Забронировать» без контекста. */
export const waBookingLink = waLink(`${GREETING} Хочу забронировать место.`);

/** Карточка пакета. */
export function waPackageLink(p: Pack): string {
  return waLink(`${GREETING} Интересует пакет «${p.title}» — ${p.lead}.`);
}

export type BookingData = {
  name: string;
  phone: string;
  zone: ZoneKey;
  date?: string;
  time?: string;
};

/** Форма брони: все заполненные поля уходят строками в сообщение. */
export function waFormLink(d: BookingData): string {
  const zone = ZONES.find((z) => z.key === d.zone)?.title ?? d.zone;
  const lines = [`${GREETING} Хочу забронировать место.`, "", `Имя: ${d.name}`, `Телефон: ${d.phone}`, `Зона: ${zone}`];
  if (d.date) lines.push(`Дата: ${formatDate(d.date)}`);
  if (d.time) lines.push(`Время: ${d.time}`);
  return waLink(lines.join("\n"));
}

/** 2026-11-01 -> 01.11.2026 */
function formatDate(iso: string): string {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  return m ? `${m[3]}.${m[2]}.${m[1]}` : iso;
}
