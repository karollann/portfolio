import styles from "./about.module.scss";
import { Section } from "../Section/Section";

export const About = () => {
  return (
    <Section id="about-section" title="About">
      <p className={styles.about__text}>
        I am a physiotherapist with a Ph.D. in medical and health sciences
        living in Warsaw. I am currently working in the orthopedic clinic but I
        would like to change my line of work and take up new challenges as a
        front-end developer.
      </p>
      <p className={styles.about__text}>
        In my Ph.D. research one of the greatest challenges was processing data
        acquired by Motion Capture System I was using. It showed me the immense
        possibilities of programming. Therefore, in February 2022 I decided to
        start learning web development. Since then, I have completed a few
        online courses concerning main technologies such as HTML, CSS,
        JavaScript and React.js.
      </p>
      <p className={styles.about__text}>
        Privately, I am a lover of travel, mountain trips and water sports. I am
        also learning French as a hobby.
      </p>
      <p className={styles.about__text}>Hope to hear from you!</p>
    </Section>
  );
};
