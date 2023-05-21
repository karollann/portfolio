import { projectCardData } from "../../data";
import { GalleryCard } from "../GalleryCard/GalleryCard";
import styles from "./gallery.module.scss";

export const Gallery = () => {
  return (
    <div className={styles.galleryContainer}>
      {projectCardData.map((i) => {
        return (
          <GalleryCard
            key={i.projectTitle}
            photoImport={i.photoImport}
            photoDescription={i.photoDescription}
            projectTitle={i.projectTitle}
            projectTechStack={i.projectTechStack}
            websiteUrl={i.websiteUrl}
          />
        );
      })}
    </div>
  );
};
