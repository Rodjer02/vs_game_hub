import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Страница не найдена",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main
      id="main"
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: 24,
        textAlign: "center",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
        <span className="kicker">404</span>
        <h1 className="h2">Такой страницы нет</h1>
        <p style={{ color: "var(--muted)", maxWidth: 420 }}>Зато есть игровые ПК, PlayStation и ночной пакет.</p>
        <Link
          href="/"
          className="btn"
          style={{
            marginTop: 10,
            background: "var(--violet)",
            color: "#fff",
            textDecoration: "none",
            fontWeight: 700,
            padding: "14px 26px",
            borderRadius: 12,
            boxShadow: "0 0 32px rgba(124,58,237,.5)",
          }}
        >
          На главную
        </Link>
      </div>
    </main>
  );
}
