import { ReactNode } from "react";
import styles from "./section.module.scss";

type SectionProps = {
  id?: string;
  title: string;
  children: ReactNode;
};

export const Section = ({ id, title, children }: SectionProps) => {
  return (
    <div id={id} className={styles.section}>
      <h2 className={styles.section__title}>{title}</h2>
      <div className={styles.section__content}>{children}</div>
    </div>
  );
};
