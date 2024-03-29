import styles from "./hero.module.scss";
import heroPhoto from "../../public/heroPhoto.avif";
import Image from "next/image";
import { useTranslation } from "next-i18next";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className={styles.hero}>
      <a href="#about-section" className={styles.menu}>
        <p className={styles.menu__icon}>👋</p>
        <p className={styles.menu__text}>{t("hero.introduction")}</p>
      </a>
      <Image
        priority={true}
        src={heroPhoto}
        alt="Picture of Karol"
        className={styles.hero__image}
        sizes="(max-width: 800px) 50vw,
        (max-width: 1200px) 33vw,
        33vw"
      />
      <h1 className={styles.hero__heading}>Junior Frontend Developer</h1>
    </section>
  );
}
