import styles from "../styles/components/_header.module.scss";
import { scrollToID } from "../utils";

export function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.header__nav}>
        <a
          onClick={() => scrollToID("about-section")}
          className={styles.header__link}
        >
          About
        </a>
        <a
          onClick={() => scrollToID("projects-section")}
          className={styles.header__link}
        >
          Projects
        </a>
        <a onClick={() => scrollToID("footer")} className={styles.header__link}>
          Contact
        </a>
      </nav>
    </header>
  );
}
