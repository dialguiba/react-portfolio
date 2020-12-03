import React from "react";
import "../../App.css";
/* import Cards from "../Cards"; */
import HeroSection from "../HeroSection";
import AboutMe from "../AboutMe";
import Footer from "../Footer";
import Knowledges from "../Knowledges";

function Home() {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <Knowledges />
      <Footer />
    </>
  );
}

export default Home;
