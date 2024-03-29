import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { Header } from "../components/Header/Header";
import { Hero } from "../components/Hero/Hero";
import { About } from "../components/About/About";
import { Projects } from "../components/Projects/Projects";
import { Courses } from "../components/Courses/Courses";
import { Footer } from "../components/Footer/Footer";
// import { Slider } from "../components/Carousel/Carousel";
import { Gallery } from "../components/Gallery/Gallery";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["homePage"])),
    },
  };
}

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio by Karol Lann Vel Lace</title>
        <meta name="author" content="Karol Lann Vel Lace" />
        <meta
          name="description"
          content="I am a physiotherapist with a Ph.D. in medical and health sciences living in Warsaw. I would like to change my line of work and take up new challenges as a front-end developer."
        />
        <meta name="copyright" content="Copyright owner: Karol Lann Vel Lace" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="color-scheme" content="light dark" />
      </Head>
      <div className="container">
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <Gallery />
          {/* <Slider /> */}
          <Courses />
        </main>
        <Footer />
      </div>
    </div>
  );
}
