import Carousel, { ResponsiveType } from "react-multi-carousel";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import "react-multi-carousel/lib/styles.css";
import { projectCardData } from "../../data";
import { useWindowSize } from "../../hooks/useWindowSize";

import carouselStyles from "./carouselContainer.module.scss";

const BREAKPOINTS: Record<string, number> = {
  desktop: 1300,
  tablet: 815,
};

const responsive: ResponsiveType = {
  desktop: {
    breakpoint: { max: 3000, min: BREAKPOINTS.desktop },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: BREAKPOINTS.desktop, min: BREAKPOINTS.tablet },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: BREAKPOINTS.tablet, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const getScreenSize = (
  width: number | undefined = 0
): "mobile" | "tablet" | "desktop" => {
  if (width >= BREAKPOINTS.desktop) {
    return "desktop";
  } else if (BREAKPOINTS.desktop > width && width >= BREAKPOINTS.tablet) {
    return "tablet";
  } else return "mobile";
};

export const Slider = () => {
  const width = useWindowSize().width;
  const screenSize = getScreenSize(width);

  return (
    <Carousel
      className={carouselStyles.carouselContainer}
      swipeable={false}
      draggable={true}
      showDots={false}
      responsive={responsive}
      ssr={false}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={screenSize !== "mobile" ? 3000 : 2500}
      keyBoardControl={true}
      customTransition={
        screenSize !== "mobile"
          ? "transform 1000ms linear"
          : "transform 500ms linear"
      }
      containerClass="carousel-container"
      removeArrowOnDeviceType={["mobile"]}
      deviceType={screenSize}
      // itemClass="carousel-item-padding-40-px"
    >
      {projectCardData.map((i) => {
        return (
          <ProjectCard
            key={i.projectTitle}
            photoImport={i.photoImport}
            photoDescription={i.photoDescription}
            projectTitle={i.projectTitle}
            projectTechStack={i.projectTechStack}
            websiteUrl={i.websiteUrl}
          />
        );
      })}
    </Carousel>
  );
};
