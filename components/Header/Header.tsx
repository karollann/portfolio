import { LanguageToggleButton } from "../LanguageToggleButton/LanguageToggleButton";
import { ThemeToggleButton } from "../ThemeToggleButton/ThemeToggleButton";
import styles from "./header.module.scss";
import { useTranslation } from "next-i18next";

export function Header() {
  const { t } = useTranslation();

  // console.log("i18n", i18n);

  return (
    <header className={styles.header}>
      <nav className={styles.header__nav}>
        <a href="#about-section" className={styles.header__item}>
          {t("header.about")}
        </a>
        <a href="#projects-section" className={styles.header__item}>
          {t("header.projects")}
        </a>
        <a href="#footer" className={styles.header__item}>
          {t("header.contact")}
        </a>
        <ThemeToggleButton />
        <LanguageToggleButton />
      </nav>
    </header>
  );
}
