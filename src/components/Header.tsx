"use client";

import { useEffect, useState } from "react";
import { NAV, site } from "@/data/site";
import { waBookingLink } from "@/lib/whatsapp";
import { CloseIcon, MenuIcon } from "./icons";
import styles from "./Header.module.css";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth > 900) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="#top" className={styles.logo} aria-label={`${site.name} — в начало страницы`}>
          <span className={`${styles.mark} glow`} aria-hidden="true">
            VS
          </span>
          <span className={styles.word}>GAME HUB</span>
        </a>

        <nav aria-label="Основное меню" className={styles.nav}>
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className={styles.navlink}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <a href={site.phoneHref} className={styles.phone}>
            {site.phone}
          </a>
          <a href={waBookingLink} className={`${styles.cta} btn`} target="_blank" rel="noopener noreferrer">
            Забронировать
          </a>
        </div>

        <button
          type="button"
          className={`${styles.burger} tap`}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Мобильное меню" className={styles.menu}>
          {NAV.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`${styles.menuLink} ${i === NAV.length - 1 ? styles.menuLinkLast : ""}`}
            >
              <span>{item.label}</span>
              <span className={styles.menuNum}>{String(i + 1).padStart(2, "0")}</span>
            </a>
          ))}
          <a href={site.phoneHref} className={styles.menuPhone}>
            {site.phone}
          </a>
        </nav>
      )}
    </header>
  );
}
