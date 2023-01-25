import Carousel from "react-multi-carousel";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import "react-multi-carousel/lib/styles.css";

import carouselStyles from "./carouselContainer.module.scss";

import natoursPhoto from "../../public/projects_photos/natours.png";
import nexterPhoto from "../../public/projects_photos/nexter.png";
import trilloPhoto from "../../public/projects_photos/trillo.png";
import bankistPhoto from "../../public/projects_photos/bankist.png";
import dadJokesPhoto from "../../public/projects_photos/dadJokes.png";
import forkifyPhoto from "../../public/projects_photos/forkify.png";
import yahtzeePhoto from "../../public/projects_photos/yahtzee.png";
import todoListPhoto from "../../public/projects_photos/todoList.png";
import colorPalettePhoto from "../../public/projects_photos/colorPalette.png";

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

export const projectCardData = [
  {
    photoImport: natoursPhoto,
    photoDescription: "Natours Project Photo",
    projectTitle: "Natours Project",
    projectTechStack: "HTML - CSS - RWD - Sass",
    repoUrl: "https://github.com/karollann/natours-project",
    websiteUrl: "https://karollann.github.io/natours-project/",
  },
  {
    photoImport: nexterPhoto,
    photoDescription: "Trillo Project Photo",
    projectTitle: "Nexter Project",
    projectTechStack: "HTML - CSS - Flexbox - Sass",
    repoUrl: "https://github.com/karollann/nexter-project",
    websiteUrl: "https://karollann.github.io/nexter-project/",
  },
  {
    photoImport: trilloPhoto,
    photoDescription: "Nexter Project Photo",
    projectTitle: "Trillo Project",
    projectTechStack: "HTML - CSS - Grid - Sass",
    repoUrl: "https://github.com/karollann/trillo-project",
    websiteUrl: "https://karollann.github.io/trillo-project/",
  },
  {
    photoImport: bankistPhoto,
    photoDescription: "Bankist Project Photo",
    projectTitle: "Bankist Project",
    projectTechStack: "JavaScript",
    repoUrl: "https://github.com/karollann/bankist-project",
    websiteUrl: "https://karollann.github.io/bankist-project/",
  },
  {
    photoImport: forkifyPhoto,
    photoDescription: "Forkify Project Photo",
    projectTitle: "Forkify Project",
    projectTechStack: "JavaScript",
    repoUrl: "https://github.com/karollann/forkify-project",
    websiteUrl: "https://karollann.github.io/forkify-project/",
  },
  {
    photoImport: dadJokesPhoto,
    photoDescription: "Dad Jokes Project Photo",
    projectTitle: "Dad Jokes Generator",
    projectTechStack: "React.js",
    repoUrl: "https://github.com/karollann/dad-jokes-generator",
    websiteUrl: "https://karollann.github.io/dad-jokes-generator/",
  },
  {
    photoImport: todoListPhoto,
    photoDescription: "Todo List Project Photo",
    projectTitle: "Todo List",
    projectTechStack: "React.js",
    repoUrl: "https://github.com/karollann/todo-list",
    websiteUrl: "https://karollann.github.io/todo-list/",
  },
  {
    photoImport: yahtzeePhoto,
    photoDescription: "Yahtzee Game Photo",
    projectTitle: "Yahtzee Game",
    projectTechStack: "React.js",
    repoUrl: "https://github.com/karollann/yahtzee-game",
    websiteUrl: "https://karollann.github.io/yahtzee-game/",
  },

  {
    photoImport: colorPalettePhoto,
    photoDescription: "Colors Palette Project Photo",
    projectTitle: "Colors Palette Project",
    projectTechStack: "React.js",
    repoUrl: "https://github.com/karollann/color-project",
    websiteUrl: "https://karollann.github.io/color-project/",
  },
];

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
      autoPlaySpeed={3000}
      keyBoardControl={true}
      customTransition="transform 1000ms ease-in-out"
      transitionDuration={1000}
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
