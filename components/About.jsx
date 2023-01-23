import styles from "../styles/components/_about.module.scss";
import { Section } from "./Section";

export const About = () => {
  return (
    <Section id="about-section" className={styles.about} title="About">
      <p className={styles.about__text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi fugit
        eveniet dolorem molestias itaque sapiente harum fugiat quos officiis
        esse pariatur quam odit, qui minus quod eius quia deleniti?
        Adipisci?Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Dolores dignissimos enim, vero error ducimus doloribus illo
        reprehenderit laudantium eum harum doloremque, ipsam soluta sed nemo
        quis voluptas nostrum magnam aliquid.
      </p>
    </Section>
  );
};
