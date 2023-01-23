import { Section } from "./Section";
import styles from "../styles/components/_courses.module.scss";

export const Courses = () => {
  return (
    <Section title="Courses">
      <ul>
        <li className={styles.courses}>
          <h3 className={styles.courses__heading}>
            The Web Developer Bootcamp
          </h3>
          <span className={styles.courses__text}>by Colt Steele (Udemy)</span>
        </li>
        <li className={styles.courses}>
          <h3 className={styles.courses__heading}>
            Advanced CSS and Sass: Flexbox, Grid, Animations and More!
          </h3>
          <span className={styles.courses__text}>
            by Jonas Schmedtmann (Udemy)
          </span>
        </li>
        <li className={styles.courses}>
          <h3 className={styles.courses__heading}>
            The Complete JavaScript Course 2022: From Zero to Expert!
          </h3>
          <span className={styles.courses__text}>
            by Jonas Schmedtmann (Udemy)
          </span>
        </li>
        <li className={styles.courses}>
          <h3 className={styles.courses__heading}>
            The Modern React Bootcamp Course
          </h3>
          <span className={styles.courses__text}>by Colt Steele (Udemy)</span>
        </li>
        <li className={styles.courses}>
          <h3 className={styles.courses__heading}>Next.js Starter Course</h3>
          <span className={styles.courses__text}>
            by Vercel Inc. (nextjs.org)
          </span>
        </li>
      </ul>
    </Section>
  );
};
