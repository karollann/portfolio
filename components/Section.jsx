import styles from "../styles/components/_section.module.scss";

export const Section = ({ id, title, children }) => {
  return (
    <div id={id} className={styles.section}>
      <h2 className={styles.section__title}>{title}</h2>
      <div className={styles.section__content}>{children}</div>
    </div>
  );
};
