import styles from "./projectRow.module.scss";

export const ProjectRow = ({ projectTitle, projectTechStack, repoUrl }) => {
  return (
    <li className={styles.projectRow__list}>
      <div className={styles.projectRow__listContent}>
        <h3 className={styles.projectRow__heading}>{projectTitle}</h3>
        <span className={styles.projectRow__text}>{projectTechStack}</span>
      </div>
      <a
        href={repoUrl}
        target="_blank"
        rel="noreferrer"
        className={styles.projectRow__link}
      >
        <span
          className={`material-symbols-outlined ${styles["projectRow__icon"]}`}
        >
          arrow_outward
        </span>
      </a>
    </li>
  );
};
