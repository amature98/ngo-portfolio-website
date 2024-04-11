// Import Dependencies
import React from "react";
import Page from ".";
import HeroSection from "../sections/hero.section";
import AboutSection from "../sections/about.section";

function HomePage() {
  return (
    <>
      <Page title="Dee Deeds Foundation - Home">
        <HeroSection />
        <AboutSection />
      </Page>
    </>
  );
}

export default HomePage;
