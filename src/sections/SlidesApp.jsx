import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard } from "swiper/modules";
import "swiper/css";

import NavigationContext from "../context/NavigationContext";
import NavBar from "../components/NavBar";
import SlideNav from "../components/SlideNav";
import slides from "../constants/slides";

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

const SlidesApp = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = (idOrIndex) => {
    const index =
      typeof idOrIndex === "number"
        ? idOrIndex
        : slides.findIndex((s) => s.id === idOrIndex);
    if (index < 0) return;
    swiperRef.current?.slideTo(index);
  };

  return (
    <NavigationContext.Provider
      value={{ goTo, activeId: slides[activeIndex]?.id, isSlideMode: true }}
    >
      <NavBar />
      <Swiper
        direction="vertical"
        modules={[Keyboard]}
        keyboard={{ enabled: true }}
        speed={650}
        resistanceRatio={0.85}
        className="slide-shell"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        <SwiperSlide>
          {() => (
            <div className="slide-page">
              <Hero />
            </div>
          )}
        </SwiperSlide>

        <SwiperSlide>
          {({ isActive }) => (
            <div className="slide-page">
              <WhatISolve isActive={isActive} />
              <FeatureCards />
            </div>
          )}
        </SwiperSlide>

        <SwiperSlide>
          {({ isActive }) => (
            <div className="slide-page">
              <ShowcaseSection isActive={isActive} />
              <LogoShowcase />
            </div>
          )}
        </SwiperSlide>

        <SwiperSlide>
          {({ isActive }) => (
            <div className="slide-page">
              <RecentWork isActive={isActive} />
            </div>
          )}
        </SwiperSlide>

        <SwiperSlide>
          {({ isActive }) => (
            <div className="slide-page">
              <Experience isActive={isActive} />
            </div>
          )}
        </SwiperSlide>

        <SwiperSlide>
          {({ isActive }) => (
            <div className="slide-page">
              <TechStack isActive={isActive} />
            </div>
          )}
        </SwiperSlide>

        <SwiperSlide>
          {({ isActive }) => (
            <div className="slide-page">
              <Contact isActive={isActive} />
              <Footer />
            </div>
          )}
        </SwiperSlide>
      </Swiper>

      <SlideNav activeIndex={activeIndex} onNavigate={goTo} />
    </NavigationContext.Provider>
  );
};

export default SlidesApp;
