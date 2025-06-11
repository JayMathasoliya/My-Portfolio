"use client";
import { useEffect } from "react";
import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import Journey from "./Journey";
import Services from "./Services";
import Work from "./work";
import FixedMenu from "./FixedMenu";

const Home = () => {
  useEffect(() => {
    const loadLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();
    };
    loadLocomotiveScroll();
  }, []);
  return (
    <>
      <Hero />
      <FixedMenu />
      <Services />
      <About />
      <Journey />
      <Work />
      <Contact />
      <div className="h-[3000px]"></div>
    </>
  );
};

export default Home;
