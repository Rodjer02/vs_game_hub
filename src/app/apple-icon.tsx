import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0A0711",
          borderRadius: 40,
          border: "6px solid #A855F7",
          color: "#D8B4FE",
          fontSize: 76,
          fontWeight: 900,
          letterSpacing: -3,
          fontFamily: "sans-serif",
        }}
      >
        VS
      </div>
    ),
    size,
  );
}
