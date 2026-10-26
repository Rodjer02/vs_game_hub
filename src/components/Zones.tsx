import { ZONES } from "@/data/prices";
import { tenge } from "@/lib/format";
import { PcIcon, PsIcon } from "./icons";
import styles from "./Zones.module.css";

export function Zones() {
  return (
    <section id="zones" className={styles.section} aria-labelledby="zones-title">
      <div className={`${styles.head} reveal`}>
        <div className={styles.headText}>
          <span className="kicker">01 / ЗОНЫ</span>
          <h2 id="zones-title" className="h2">
            Выбери свою зону
          </h2>
        </div>
        <p className={styles.headLead}>
          Общий зал — чтобы играть с друзьями, VIP — для отдельной компании и большего комфорта.
        </p>
      </div>

      <div className={styles.grid}>
        {ZONES.map((z) => (
          <article key={z.key} className={`${styles.card} card reveal`}>
            <span aria-hidden="true" className={styles.num}>
              {z.num}
            </span>

            <span className={`${styles.ico} ico`} aria-hidden="true">
              {z.platform === "pc" ? <PcIcon /> : <PsIcon />}
            </span>

            <div className={styles.body}>
              <div className={styles.titleRow}>
                <h3 className={styles.title}>{z.title}</h3>
                {z.vip && <span className={styles.vip}>VIP</span>}
              </div>
              <p className={styles.text}>{z.text}</p>
            </div>

            <div className={styles.price}>
              <span className={styles.from}>от</span>
              <span className={styles.amount}>{tenge(z.from)}</span>
              <span className={`${styles.from} ${styles.per}`}>/ час</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
