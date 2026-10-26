import { Fragment } from "react";
import { TICKER } from "@/data/prices";
import styles from "./Ticker.module.css";

export function Ticker() {
  return (
    <div className={styles.wrap} aria-hidden="true">
      <div className={`${styles.track} marquee`}>
        {[0, 1].map((copy) => (
          <Fragment key={copy}>
            {TICKER.map((item) => (
              <Fragment key={item}>
                <span>{item}</span>
                <span className={styles.sep}>✦</span>
              </Fragment>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
