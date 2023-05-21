import Image, { StaticImageData } from "next/image";

import styles from "../GalleryCard/galleryCard.module.scss";

type GalleryCardProps = {
  photoImport: StaticImageData;
  photoDescription: string;
  projectTitle: string;
  projectTechStack: string;
  websiteUrl: string;
};

export const GalleryCard = ({
  photoImport,
  photoDescription,
  projectTitle,
  projectTechStack,
  websiteUrl,
}: GalleryCardProps) => {
  return (
    <a
      href={websiteUrl}
      target="_blank"
      rel="noreferrer"
      className={styles.galleryCard}
      aria-label={`Go to ${projectTitle} site.`}
    >
      <Image
        priority={true}
        src={photoImport}
        alt={photoDescription}
        className={styles.galleryCard__img}
        sizes="(max-width: 800px) 45vw,
        (max-width: 1200px) 30vw,
        30vw"
      />
      <div className={styles.galleryCard__descriptionContainer}>
        <h2 className={styles.galleryCard__imgTitle}>{projectTitle}</h2>
        <h3 className={styles.galleryCard__imgDescription}>
          {projectTechStack}
        </h3>
      </div>
    </a>
  );
};
