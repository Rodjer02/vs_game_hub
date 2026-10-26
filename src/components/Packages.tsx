import { PACKAGES } from "@/data/prices";
import styles from "./Packages.module.css";

export function Packages() {
  return (
    <section id="packages" className={styles.section} aria-labelledby="packages-title">
      <div className={`${styles.head} reveal`}>
        <span className="kicker">03 / ПАКЕТЫ</span>
        <h2 id="packages-title" className="h2">
          Играй дольше — плати меньше
        </h2>
      </div>

      <div className={styles.grid}>
        {PACKAGES.map((p) => (
          <article key={p.key} className={`${styles.card} ${p.featured ? styles.featured : ""} card reveal`}>
            {p.featured && (
              <>
                <span className={`star ${styles.s1}`} aria-hidden="true" />
                <span className={`star ${styles.s2}`} aria-hidden="true" />
                <span className={`star ${styles.s3}`} aria-hidden="true" />
                <span className={`star ${styles.s4}`} aria-hidden="true" />
              </>
            )}
            <h3 className={styles.title}>{p.title}</h3>
            {p.badge && <span className={styles.badge}>{p.badge}</span>}
            <p className={styles.lead}>{p.lead}</p>
            <p className={styles.text}>{p.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
