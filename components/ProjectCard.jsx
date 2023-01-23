import Image from "next/image";
import "react-multi-carousel/lib/styles.css";

import carouselStyles from "../styles/components/_carousel.module.scss";

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
      className={`${carouselStyles["carousel__img-container"]}`}
    >
      <Image
        src={photoImport}
        alt={photoDescription}
        className={carouselStyles.carousel__img}
      />
      <h2 className={`${carouselStyles["carousel__img-title"]}`}>
        {projectTitle}
      </h2>
      <h3 className={`${carouselStyles["carousel__img-description"]}`}>
        {projectTechStack}
      </h3>
    </a>
  );
};
