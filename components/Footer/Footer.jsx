import { IcoGithub } from "../Icons/IcoGithub";
import { IcoLinkedin } from "../Icons/IcoLinkedin";
import { IcoMail } from "../Icons/IcoMail";
import { IcoInstagram } from "../Icons/IcoInstagram";

import styles from "./footer.module.scss";

export const Footer = () => {
  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.footer__container}>
        <h2 className={styles.footer__heading}>
          <span className={`${styles["footer__heading--1"]}`}>
            Have something in mind?
          </span>
          <span className={`${styles["footer__heading--2"]}`}>
            Let&apos;s build it together!
          </span>
        </h2>
        <span className={styles.footer__text}>
          Built by Karol Lann Vel Lace
        </span>
      </div>
      <div className={`${styles["footer__listContainer"]}`}>
        <ul className={styles.footer__list}>
          <li className={`${styles["footer__list--item"]}`}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/karollann"
              className={`${styles["footer__list--link"]}`}
            >
              <IcoGithub width="36px" height="35px" />
              <span className={`${styles["footer__list--text"]}`}>GitHub</span>
            </a>
          </li>
          <li className={`${styles["footer__list--item"]}`}>
            <a
              target="_blank"
              rel="noreferrer"
              href="http://linkedin.com/in/karol-lann-vel-lace"
              className={`${styles["footer__list--link"]}`}
            >
              <IcoLinkedin height="32px" width="32px" />
              <span className={`${styles["footer__list--text"]}`}>
                LinkedIn
              </span>
            </a>
          </li>
          <li className={`${styles["footer__list--item"]}`}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://instagram.com/lannkarol"
              className={`${styles["footer__list--link"]}`}
            >
              <IcoInstagram height="32px" width="32px" />
              <span className={`${styles["footer__list--text"]}`}>
                Instagram
              </span>
            </a>
          </li>
          <li className={`${styles["footer__list--item"]}`}>
            <a
              href="mailto:lannkarol@gmail.com"
              className={`${styles["footer__list--link"]}`}
            >
              <IcoMail height="32px" width="32px" />
              <span className={`${styles["footer__list--text"]}`}>
                lannkarol@gmail.com
              </span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
