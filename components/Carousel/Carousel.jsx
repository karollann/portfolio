import Carousel from "react-multi-carousel";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import "react-multi-carousel/lib/styles.css";
import { projectCardData } from "../../data";

import carouselStyles from "./carouselContainer.module.scss";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1300 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1300, min: 815 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 815, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export const Slider = () => {
  const devType = ({ req }) => {
    let userAgent;
    let deviceType;
    if (req) {
      userAgent = req.headers["user-agent"];
    } else {
      userAgent = navigator.userAgent;
    }
    const md = new MobileDetect(userAgent);
    if (md.tablet()) {
      deviceType = "tablet";
    } else if (md.mobile()) {
      deviceType = "mobile";
    } else {
      deviceType = "desktop";
    }
    return { deviceType };
  };

  return (
    <Carousel
      className={carouselStyles.carouselContainer}
      swipeable={true}
      draggable={true}
      showDots={false}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={devType !== "mobile" ? true : false}
      autoPlaySpeed={devType !== "mobile" ? 3000 : 500}
      keyBoardControl={true}
      customTransition={
        devType !== "mobile"
          ? "transform 1000ms ease-in-out"
          : "transform 200ms ease-in-out"
      }
      transitionDuration={devType !== "mobile" ? 1000 : 200}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["mobile"]}
      deviceType={devType}
      itemClass="carousel-item-padding-40-px"
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
