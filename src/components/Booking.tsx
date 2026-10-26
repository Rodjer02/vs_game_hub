"use client";

import { useState, type FormEvent } from "react";
import { ZONES, type ZoneKey } from "@/data/prices";
import { site } from "@/data/site";
import styles from "./Booking.module.css";

type Status = "idle" | "sending" | "ok" | "error";

export function Booking() {
  const [zone, setZone] = useState<ZoneKey>("pc-hall");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    const payload = {
      name: String(fd.get("name") ?? "").trim(),
      phone: String(fd.get("phone") ?? "").trim(),
      zone,
      date: String(fd.get("date") ?? ""),
      time: String(fd.get("time") ?? ""),
      website: String(fd.get("website") ?? ""),
    };

    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json: { ok?: boolean; error?: string } = await res.json().catch(() => ({}));
      if (!res.ok || !json.ok) throw new Error(json.error ?? "Не удалось отправить заявку");
      setStatus("ok");
      form.reset();
      setZone("pc-hall");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Не удалось отправить заявку");
    }
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

        <form className={styles.form} onSubmit={onSubmit} noValidate={false}>
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

          {/* Ловушка для ботов: люди это поле не видят и не заполняют. */}
          <label className={styles.hp} aria-hidden="true">
            Сайт
            <input type="text" name="website" tabIndex={-1} autoComplete="off" />
          </label>

          <button className={`${styles.submit} btn`} type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Отправляем…" : "Отправить заявку"}
          </button>

          <p className={`${styles.status} ${status === "ok" ? styles.ok : ""} ${status === "error" ? styles.err : ""}`} role="status" aria-live="polite">
            {status === "ok" && "Заявка отправлена. Перезвоним и подтвердим бронь."}
            {status === "error" && `${error}. Позвони нам: ${site.phone}`}
          </p>
        </form>
      </div>
    </section>
  );
}
