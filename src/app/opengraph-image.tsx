import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = `${site.name} — компьютерный клуб: игровые ПК и PlayStation`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Тянем TTF с Google Fonts только для нужных символов.
 * Если сеть недоступна — картинка соберётся системным шрифтом.
 */
async function loadGoogleFont(family: string, weight: number, text: string): Promise<ArrayBuffer | null> {
  try {
    const url = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(family)}:wght@${weight}&text=${encodeURIComponent(text)}`;
    const css = await (await fetch(url)).text();
    const match = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/);
    if (!match) return null;
    const res = await fetch(match[1]);
    if (!res.ok) return null;
    return await res.arrayBuffer();
  } catch {
    return null;
  }
}

export default async function OpenGraphImage() {
  const headline = "VS GAME HUB";
  const sub = "Игровые ПК и PlayStation · общий зал и VIP";
  const price = "ПК от 500 ₸/час · ночь от 2 500 ₸";
  const addr = `${site.address.street} · ${site.phone}`;

  const [display, sans, tengeGlyph] = await Promise.all([
    loadGoogleFont("Unbounded", 900, headline + "ЗАХОДИВГРУ."),
    loadGoogleFont("Manrope", 600, sub + price + addr),
    // В Manrope нет знака тенге — берём его из Noto Sans, Satori подхватит как fallback.
    loadGoogleFont("Noto Sans", 600, "₸"),
  ]);

  const fonts: NonNullable<ConstructorParameters<typeof ImageResponse>[1]>["fonts"] = [];
  if (display) fonts.push({ name: "Unbounded", data: display, weight: 900, style: "normal" });
  if (sans) fonts.push({ name: "Manrope", data: sans, weight: 600, style: "normal" });
  if (tengeGlyph) fonts.push({ name: "Noto Sans", data: tengeGlyph, weight: 600, style: "normal" });

  const displayFamily = display ? "Unbounded" : "sans-serif";
  const sansFamily = sans ? "Manrope" : "sans-serif";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          background: "#0A0711",
          color: "#F4F0FA",
          fontFamily: sansFamily,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -260,
            left: 250,
            width: 700,
            height: 700,
            borderRadius: 9999,
            background:
              "radial-gradient(circle at center, rgba(124,58,237,0.6) 0%, rgba(124,58,237,0.35) 30%, rgba(124,58,237,0.12) 55%, rgba(10,7,17,0) 72%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: -120,
            bottom: -120,
            width: 520,
            height: 520,
            borderRadius: 9999,
            border: "2px dashed rgba(139,92,246,0.45)",
          }}
        />

        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 18,
              border: "3px solid #A855F7",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#D8B4FE",
              fontFamily: displayFamily,
              fontWeight: 900,
              fontSize: 26,
              marginRight: 20,
            }}
          >
            VS
          </div>
          <div style={{ fontFamily: displayFamily, fontWeight: 900, fontSize: 28, letterSpacing: 2 }}>GAME HUB</div>
          <div
            style={{
              marginLeft: "auto",
              display: "flex",
              alignItems: "center",
              padding: "10px 18px",
              borderRadius: 999,
              border: "1px solid #3A2F50",
              background: "rgba(23,18,31,0.8)",
              fontSize: 22,
              color: "#D9D1E6",
            }}
          >
            <div style={{ width: 10, height: 10, borderRadius: 999, background: "#34D399", marginRight: 10 }} />
            {site.address.street}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontFamily: displayFamily,
              fontWeight: 900,
              fontSize: 112,
              lineHeight: 1,
              letterSpacing: -3,
              color: "#D8B4FE",
              textShadow: "0 0 40px rgba(139,92,246,0.9)",
            }}
          >
            {headline}
          </div>
          <div style={{ marginTop: 22, fontSize: 34, color: "#C7BDD6" }}>{sub}</div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 26 }}>
          <div
            style={{
              display: "flex",
              padding: "14px 24px",
              borderRadius: 14,
              background: "#7C3AED",
              color: "#fff",
              fontWeight: 700,
              boxShadow: "0 0 40px rgba(124,58,237,0.6)",
            }}
          >
            {price}
          </div>
          <div style={{ color: "#A99DBB" }}>{site.phone}</div>
        </div>
      </div>
    ),
    { ...size, fonts },
  );
}
