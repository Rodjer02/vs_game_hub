import { site } from "@/data/site";
import { waBookingLink } from "@/lib/whatsapp";
import styles from "./Contacts.module.css";

export function Contacts() {
  const { social } = site;

  return (
    <section id="contacts" className={styles.section} aria-labelledby="contacts-title">
      <div className={`${styles.head} reveal`}>
        <span className="kicker">05 / КОНТАКТЫ</span>
        <h2 id="contacts-title" className="h2">
          Как нас найти
        </h2>
      </div>

      <div className={`${styles.map} reveal`}>
        {site.mapEmbedUrl ? (
          <iframe
            className={styles.iframe}
            src={site.mapEmbedUrl}
            title={`${site.name} на карте`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        ) : (
          <>
            <span className={`${styles.pin} ping`} aria-hidden="true" />
            <span className={styles.mapNote}>[Карта 2ГИС / Google Maps]</span>
          </>
        )}
      </div>

      <div className={`${styles.details} reveal`}>
        <div className={styles.item}>
          <span className={styles.itemLabel}>Адрес</span>
          <span className={styles.itemVal}>{site.address.street}</span>
        </div>
        <div className={styles.item}>
          <span className={styles.itemLabel}>Телефон</span>
          <a href={site.phoneHref} className={styles.itemVal}>
            {site.phone}
          </a>
        </div>
        <div className={styles.item}>
          <span className={styles.itemLabel}>Режим работы</span>
          <span className={styles.itemVal}>{site.hours}</span>
        </div>

        <div className={styles.links}>
          <a className={`${styles.link} ghost tap`} href={social.instagram} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a className={`${styles.link} ghost tap`} href={waBookingLink} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
          <a className={`${styles.link} ghost tap`} href={social.twoGisRoute} target="_blank" rel="noopener noreferrer">
            <span className={styles.long}>Маршрут в 2ГИС</span>
            <span className={styles.short}>2ГИС</span>
          </a>
        </div>
      </div>
    </section>
  );
}
