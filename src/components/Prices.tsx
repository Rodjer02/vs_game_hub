"use client";

import { useState } from "react";
import { HALLS, PLATFORMS, PLATFORM_KEYS, type HallKey, type PlatformKey } from "@/data/prices";
import { perHour, tenge } from "@/lib/format";
import styles from "./Prices.module.css";

export function Prices() {
  const [platform, setPlatform] = useState<PlatformKey>("pc");
  const [hall, setHall] = useState<HallKey>("hall");
  const data = PLATFORMS[platform];

  return (
    <section id="prices" className={styles.section} aria-labelledby="prices-title">
      <div className={styles.glowBg} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={`${styles.head} reveal`}>
          <div className={styles.headText}>
            <span className="kicker">02 / ЦЕНЫ</span>
            <h2 id="prices-title" className="h2">
              Прайс-лист
            </h2>
          </div>

          <div role="group" aria-label="Платформа" className={styles.seg}>
            {PLATFORM_KEYS.map((key) => (
              <button
                key={key}
                type="button"
                className={styles.segBtn}
                aria-pressed={platform === key}
                onClick={() => setPlatform(key)}
              >
                {PLATFORMS[key].label}
              </button>
            ))}
          </div>
        </div>

        <div role="group" aria-label="Зона" className={styles.tabs}>
          {HALLS.map((h) => (
            <button
              key={h.key}
              type="button"
              className={styles.tab}
              aria-pressed={hall === h.key}
              onClick={() => setHall(h.key)}
            >
              {h.label}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {HALLS.map((h) => (
            <div key={h.key} className={`${styles.col} card reveal`} data-active={hall === h.key}>
              <div className={styles.colHead}>
                <h3 className={styles.colTitle}>{h.label}</h3>
                <span className={styles.tag}>{data.label}</span>
              </div>

              {data[h.key].map((r) => (
                <div key={r.name} className={`${styles.row} prow`}>
                  <div className={styles.rowL}>
                    <span className={styles.name}>{r.name}</span>
                    <span className={styles.note}>{r.note ?? "Почасовая оплата"}</span>
                  </div>
                  <div className={styles.rowR}>
                    <span className={styles.price}>{tenge(r.price)}</span>
                    <span className={styles.per}>{perHour(r.price, r.hours)}</span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <p className={styles.foot}>Цены в тенге. «≈ за час» — сколько выходит час внутри пакета.</p>
      </div>
    </section>
  );
}
