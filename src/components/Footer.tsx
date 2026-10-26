import { site } from "@/data/site";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.big} stroke-text`} aria-hidden="true">
        <span className={styles.vs}>VS </span>GAME HUB
      </div>
      <div className={styles.inner}>
        <span>
          <span className={styles.brand}>{site.shortName}</span> · {site.tagline}
        </span>
        <span>
          {site.address.street} · {site.phone}
        </span>
      </div>
    </footer>
  );
}
