import { Section } from "../Section/Section";
import { projectCardData } from "../../data";
import { ProjectRow } from "../ProjectRow/ProjectRow";
import styles from "./project.module.scss";

export const Projects = () => {
  return (
    <Section id="projects-section" title="Projects">
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
