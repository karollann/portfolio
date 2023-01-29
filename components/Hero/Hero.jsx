import styles from "./hero.module.scss";
import heroPhoto from "../../public/heroPhoto.png";

import Image from "next/image";

import { scrollToID } from "../../utils";

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.menu} onClick={() => scrollToID("about-section")}>
        <p className={styles.menu__icon}>👋</p>
        <p className={styles.menu__text}>Hi! I&apos;m Karol</p>
      </div>
      <Image
        priority={true}
        src={heroPhoto}
        alt="Hero Picture"
        className={styles.hero__image}
      />
      <h1 className={styles.hero__heading}>Beginning Web Developer</h1>
    </section>
  );
}
