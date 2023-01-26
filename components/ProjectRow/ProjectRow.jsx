import styles from "./projectRow.module.scss";
import IconArrowUpRight from "../Icons/IconArrowUpRight";

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
        <IconArrowUpRight
          width="36px"
          height="36px"
          className={styles.projectRow__icon}
        />
      </a>
    </li>
  );
};
