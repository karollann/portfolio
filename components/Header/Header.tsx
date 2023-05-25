import { ThemeToggleButton } from "../ThemeToggleButton/ThemeToggleButton";
import styles from "./header.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.header__nav}>
        <a href="#about-section" className={styles.header__item}>
          About
        </a>
        <a href="#projects-section" className={styles.header__item}>
          Projects
        </a>
        <a href="#footer" className={styles.header__item}>
          Contact
        </a>
        <ThemeToggleButton />
      </nav>
    </header>
  );
}
