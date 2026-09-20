import NavigationContext from "../context/NavigationContext";
import NavBar from "../components/NavBar";

import Hero from "./Hero";
import WhatISolve from "./WhatISolve";
import ShowcaseSection from "./ShowcaseSection";
import LogoShowcase from "./LogoShowcase";
import RecentWork from "./RecentWork";
import FeatureCards from "./FeatureCards";
import Experience from "./Experience";
import TechStack from "./TechStack";
import Contact from "./Contact";
import Footer from "./Footer";

const goTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const ScrollApp = () => (
  <NavigationContext.Provider value={{ goTo, activeId: "hero", isSlideMode: false }}>
    <NavBar />
    <Hero />
    <WhatISolve />
    <ShowcaseSection />
    <LogoShowcase />
    <RecentWork />
    <FeatureCards />
    <Experience />
    <TechStack />
    <Contact />
    <Footer />
  </NavigationContext.Provider>
);

export default ScrollApp;
