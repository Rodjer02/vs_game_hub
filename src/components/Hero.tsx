import { site } from "@/data/site";
import { ArrowIcon, BoltIcon, GamepadIcon, PhoneIcon } from "./icons";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section id="top" className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.haze} aria-hidden="true" />
      <div className={styles.floor} aria-hidden="true" />
      <div className={`${styles.bigword} stroke-text`} aria-hidden="true">
        GAME HUB
      </div>
      <BoltIcon className={`${styles.bolt} bolt`} />
      <div className={`${styles.flash} flash`} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.text}>
          <p className={`${styles.badge} in`}>
            <span className={`${styles.dot} ping`} aria-hidden="true" />
            {site.address.street}
          </p>

          <h1 id="hero-title" className={`${styles.title} in`} style={{ animationDelay: ".12s" }}>
            Заходи
            <br />
            в игру.
            <br />
            <span className={`${styles.accent} neon`}>VS Game Hub</span>
          </h1>

          <p className={`${styles.lead} in`} style={{ animationDelay: ".24s" }}>
            Игровые ПК и PlayStation, общий зал и VIP. Час — от 500 ₸, ночь до утра — от 2 500 ₸.
          </p>

          <div className={`${styles.actions} in`} style={{ animationDelay: ".36s" }}>
            <a className={`${styles.primary} btn`} href="#booking">
              <span className={styles.long}>Забронировать место</span>
              <span className={styles.short}>Забронировать</span>
              <ArrowIcon className={styles.long} />
            </a>
            <a className={`${styles.ghost} ghost`} href="#prices">
              Смотреть цены
            </a>
            <a className={`${styles.call} tap`} href={site.phoneHref}>
              <PhoneIcon />
              Позвонить
            </a>
          </div>
        </div>

        <div className={`${styles.visual} in`} style={{ animationDelay: ".3s" }} aria-hidden="true">
          <svg className={`${styles.ring} ring`} viewBox="0 0 440 440" fill="none">
            <circle cx="220" cy="220" r="210" stroke="#8B5CF6" strokeOpacity=".5" strokeWidth="1.5" strokeDasharray="4 14" />
            <circle cx="220" cy="10" r="5" fill="#D8B4FE" />
          </svg>
          <svg className={`${styles.ringRev} ring-rev`} viewBox="0 0 340 340" fill="none">
            <circle cx="170" cy="170" r="160" stroke="#F5C76A" strokeOpacity=".35" strokeWidth="1" strokeDasharray="60 30" />
            <circle cx="330" cy="170" r="4" fill="#F5C76A" />
          </svg>
          <div className="float">
            <GamepadIcon className={`${styles.pad} glow`} />
          </div>
          <div className={`${styles.chip} ${styles.chipL}`}>
            <div className={styles.chipLabel}>ПК · общий зал</div>
            <div className={styles.chipVal}>500 ₸ / час</div>
          </div>
          <div className={`${styles.chip} ${styles.chipR}`}>
            <div className={styles.chipLabel}>Ночной пакет</div>
            <div className={styles.chipVal}>22:00 – 08:00</div>
          </div>
        </div>
      </div>
    </section>
  );
}
