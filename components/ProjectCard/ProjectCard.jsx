import Image from "next/image";
import "react-multi-carousel/lib/styles.css";

import projectCardStyles from "./projectCard.module.scss";

export const ProjectCard = ({
  photoImport,
  photoDescription,
  projectTitle,
  projectTechStack,
  websiteUrl,
}) => {
  return (
    <a
      href={websiteUrl}
      target="_blank"
      rel="noreferrer"
      className={projectCardStyles.projectCard__imgContainer}
    >
      <Image
        priority={true}
        src={photoImport}
        alt={photoDescription}
        className={projectCardStyles.projectCard__img}
      />
      <h2 className={projectCardStyles.projectCard__imgTitle}>
        {projectTitle}
      </h2>
      <h3 className={projectCardStyles.projectCard__imgDescription}>
        {projectTechStack}
      </h3>
    </a>
  );
};
