"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { Link as ScrollLink } from "react-scroll";
import RotatingShape from "./RotatingShape";
import Header from "./Header";
import Stats from "./Stats";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="h-[800px] relative bg-accent/10 xl:bg-white" id="home">
      {/* header */}
      <Header />
      <div className="container mx-auto h-full">
        <div className="relative z-20 h-full w-full xl:max-w-[768px] flex flex-col items-center xl:items-start justify-center text-center xl:text-left">
          <h1 className="h1 mb-2 max-w-[320px] xl:max-w-none">
            <span className="text-accent">I Build And</span> Design Powerful
            <TypeAnimation
              preRenderFirstString={true}
              sequence={["Websites", 2000, "Web Apps", 2000]}
              speed={50}
              repeat={Infinity}
              wrapper="span"
              cursor={false}
              className="ml-2 xl:ml-4"
            />
          </h1>
          <p className="lead max-w-[476px] mb-7">
            Delivering powerful, custom websites that blend aesthetics with
            performance.
          </p>
          <div className="flex items-center gap-3 mb-8">
            <Link href="/assets/resume/Jay Mathasoliya Resume.pdf" download={true}>
              <button className="btn border border-accent text-primary">Download a CV</button>
            </Link>
            <ScrollLink to="contact" smooth>
              <button className="btn btn-accent">Contact me</button>
            </ScrollLink>
          </div>

          {/* stats */}
          <Stats />
        </div>

        {/* image */}
        <div className="hidden xl:flex w-[55vw] h-[800px] absolute top-0 right-0 bg-accent">
          <div className="absolute w-[558px] h-[642px] bottom-0 z-40 left-[4vw]">
            <Image
              src="/assets/hero/dev.png"
              fill
              quality={100}
              priority
              className="w-full h-full object-cover"
              alt="dev-img"
              sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 558px"
            />
          </div>

          {/* arrow shape */}
          <div
            className="hidden xl:flex absolute top-48 left-[4vw]"
            data-scroll
            data-scroll-speed="0.05"
          >
            <Image
              src="/assets/hero/arrow.svg"
              width={160}
              height={160}
              alt="arrow-shape"
              className="w-[100px] h-auto"
            />
          </div>

          {/* shape 1 */}
          <div
            className="absolute top-[600px] left-[3vw]"
            data-scroll
            data-scroll-speed="0.2"
          >
            <RotatingShape
              content={
                <Image
                  src="/assets/hero/shape-1.svg"
                  width={38}
                  height={38}
                  className="w-[38px] h-auto"
                  alt="shape-1"
                />
              }
              direction="left"
              duration={6}
            />
          </div>

          {/* shape 2 */}
          <div
            className="absolute top-[240px] xl:left-[30vw]"
            data-scroll
            data-scroll-speed="0.1"
          >
            <RotatingShape
              content={
                <Image
                  src="/assets/hero/shape-2.svg"
                  width={34}
                  height={34}
                  className="w-[34px] h-auto"
                  alt="shape-2"
                />
              }
              direction="right"
              duration={5}
            />
          </div>

          {/* shape 3 */}
          <div
            className="absolute top-[480px] xl:left-[40vw]"
            data-scroll
            data-scroll-speed="0.08"
          >
            <RotatingShape
              content={
                <Image
                  src="/assets/hero/shape-3.svg"
                  width={36}
                  height={36}
                  alt="shape-3"
                />
              }
              direction="left"
              duration={7}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
