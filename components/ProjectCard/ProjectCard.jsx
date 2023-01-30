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
      aria-label={`Go to ${projectTitle} site.`}
    >
      <Image
        priority={true}
        src={photoImport}
        alt={photoDescription}
        className={projectCardStyles.projectCard__img}
        sizes="(max-width: 800px) 45vw,
        (max-width: 1200px) 30vw,
        30vw"
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
