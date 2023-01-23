import { Section } from "./Section";
import { projectCardData } from "./Carousel";
import { ProjectRow } from "./ProjectRow";
import styles from "../styles/components/_project.module.scss";

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
