import Head from "next/head";

import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Projects } from "../components/Projects";
import { Courses } from "../components/Courses";
import { Footer } from "../components/Footer";
import { Slider } from "../components/Carousel";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio by Karol Lann Vel Lace</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className="container">
          <Header />
          <main>
            <Hero />
            <About />
            <Projects />
            <Slider />
            <Courses />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
