import styles from "../styles/components/_project.module.scss";

export const ProjectRow = ({ projectTitle, projectTechStack, repoUrl }) => {
  return (
    <li className={styles.project__list}>
      <div className={styles.project__listContent}>
        <h3 className={styles.project__heading}>{projectTitle}</h3>
        <span className={styles.project__text}>{projectTechStack}</span>
      </div>
      <a
        href={repoUrl}
        target="_blank"
        rel="noreferrer"
        className={styles.project__link}
      >
        <span
          className={`material-symbols-outlined ${styles["project__icon"]}`}
        >
          arrow_outward
        </span>
      </a>
    </li>
  );
};
