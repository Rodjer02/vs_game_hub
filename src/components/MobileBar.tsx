import { site } from "@/data/site";
import { waBookingLink } from "@/lib/whatsapp";
import { PhoneIcon } from "./icons";
import styles from "./MobileBar.module.css";

export function MobileBar() {
  return (
    <div className={styles.bar}>
      <a className={`${styles.call} tap`} href={site.phoneHref} aria-label={`Позвонить ${site.phone}`}>
        <PhoneIcon width={20} height={20} />
      </a>
      <a className={`${styles.book} btn`} href={waBookingLink} target="_blank" rel="noopener noreferrer">
        Забронировать место
      </a>
    </div>
  );
}
