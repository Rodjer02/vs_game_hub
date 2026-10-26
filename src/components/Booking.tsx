"use client";

import { useState, type FormEvent } from "react";
import { ZONES, type ZoneKey } from "@/data/prices";
import { site } from "@/data/site";
import { waFormLink } from "@/lib/whatsapp";
import styles from "./Booking.module.css";

export function Booking() {
  const [zone, setZone] = useState<ZoneKey>("pc-hall");
  const [opened, setOpened] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const url = waFormLink({
      name: String(fd.get("name") ?? "").trim(),
      phone: String(fd.get("phone") ?? "").trim(),
      zone,
      date: String(fd.get("date") ?? ""),
      time: String(fd.get("time") ?? ""),
    });
    // Синхронно в обработчике сабмита — блокировщики всплывающих окон пропускают.
    window.open(url, "_blank", "noopener,noreferrer");
    setOpened(true);
  }

  return (
    <section id="booking" className={styles.section} aria-labelledby="booking-title">
      <div className={`${styles.box} reveal`}>
        <div className={styles.glowBg} aria-hidden="true" />

        <div className={styles.info}>
          <span className="kicker">04 / БРОНЬ</span>
          <h2 id="booking-title" className={`h2 ${styles.h2}`}>
            Займи место заранее
          </h2>
          <p className={styles.lead}>
            Оставь заявку — администратор перезвонит и подтвердит бронь. Или звони сразу.
          </p>
          <a href={site.phoneHref} className={styles.phone}>
            {site.phone}
          </a>
        </div>

        <form className={styles.form} onSubmit={onSubmit}>
          <div className={`${styles.grid2} ${styles.names}`}>
            <label className={styles.label}>
              Имя
              <input
                className={`${styles.input} field`}
                type="text"
                name="name"
                placeholder="Как к тебе обращаться"
                autoComplete="name"
                minLength={2}
                maxLength={60}
                required
              />
            </label>
            <label className={styles.label}>
              Телефон
              <input
                className={`${styles.input} field`}
                type="tel"
                name="phone"
                placeholder="+7 ___ ___ __ __"
                autoComplete="tel"
                inputMode="tel"
                pattern="[+0-9()\-\s]{10,20}"
                required
              />
            </label>
          </div>

          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>Зона</legend>
            <div className={styles.pills}>
              {ZONES.map((z) => (
                <button
                  key={z.key}
                  type="button"
                  className={styles.pill}
                  aria-pressed={zone === z.key}
                  onClick={() => setZone(z.key)}
                >
                  {z.title}
                </button>
              ))}
            </div>
          </fieldset>

          <div className={`${styles.grid2} ${styles.when}`}>
            <label className={styles.label}>
              Дата
              <input className={`${styles.input} field`} type="date" name="date" />
            </label>
            <label className={styles.label}>
              Время
              <input className={`${styles.input} field`} type="time" name="time" />
            </label>
          </div>

          <button className={`${styles.submit} btn`} type="submit">
            Отправить заявку
          </button>

          <p className={`${styles.status} ${opened ? styles.ok : ""}`} role="status" aria-live="polite">
            {opened && "Открыли WhatsApp с заполненной заявкой — нажми «Отправить» в чате."}
          </p>
        </form>
      </div>
    </section>
  );
}
