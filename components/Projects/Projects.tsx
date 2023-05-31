import { Section } from "../Section/Section";
import { projectCardData } from "../../data";
import { ProjectRow } from "../ProjectRow/ProjectRow";
import styles from "./project.module.scss";
import { useTranslation } from "next-i18next";

export const Projects = () => {
  const { t } = useTranslation();

  return (
    <Section id="projects-section" title={t("projects")}>
      <ul className={styles.project}>
        {projectCardData.map((i) => (
          <ProjectRow
            key={i.projectTitle}
            projectTitle={i.projectTitle}
            projectTechStack={i.projectTechStack}
            repoUrl={i.repoUrl}
          />
        ))}
      </ul>
    </Section>
  );
};
