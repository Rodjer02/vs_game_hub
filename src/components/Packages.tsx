import { PACKAGES } from "@/data/prices";
import { waPackageLink } from "@/lib/whatsapp";
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
          <a
            key={p.key}
            href={waPackageLink(p)}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.card} ${p.featured ? styles.featured : ""} card reveal`}
            aria-label={`${p.title}: ${p.lead}. Написать в WhatsApp`}
          >
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
          </a>
        ))}
      </div>
    </section>
  );
}
