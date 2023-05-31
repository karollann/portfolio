import styles from "./about.module.scss";
import { Section } from "../Section/Section";
import { useTranslation } from "next-i18next";

export const About = () => {
  const { t } = useTranslation();

  return (
    <Section id="about-section" title={t("about.about")}>
      <p className={styles.about__text}>{t("about.partOne")}</p>
      <p className={styles.about__text}>{t("about.partTwo")}</p>
      <p className={styles.about__text}>{t("about.partThree")}</p>
      <p className={styles.about__text}>{t("about.partFour")}</p>
    </Section>
  );
};
