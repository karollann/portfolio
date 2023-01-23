import styles from "../styles/components/_hero.module.scss";

import { scrollToID } from "../utils";

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.menu} onClick={() => scrollToID("about-section")}>
        <p className={styles.menu__icon}>👋</p>
        <p className={styles.menu__text}>Hi! I&apos;m Karol</p>
      </div>
      <h1 className={styles.hero__heading}>Beginning Web Developer</h1>
    </section>
  );
}
