import React from "react";
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
import Image from "next/image";

const About = () => {
  return (
    <section className="relative pt-12 pb-24" id="about">
      <div className="container mx-auto h-full">
        <div className="h-full flex items-center justify-center">
          {/* image + shapes */}
          <div className="hidden xl:flex flex-1 pl-8">
            <div className="relative w-full max-w-[380px]">
              {/* shape */}
              <div className="w-[160px] h-[160px] bg-accent absolute -left-5 -top-5 -z-10"></div>
              {/* image */}
              <div className="rounded-tl-[8px] rounded-tr-[120px] w-full bg-[#E5F8F6] min-h-[480px] flex items-end justify-center">
                <Image
                  src="/assets/about/img.png"
                  width={350}
                  height={478}
                  quality={100}
                  priority
                  alt="about-dev-img"
                />
              </div>

              {/* rotating shape */}
              <div className="absolute top-2/4 -right-[65px] flex items-center justify-center">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{
                    duration: 10,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                >
                  <Image
                    src="/assets/about/shape-1.svg"
                    width={160}
                    height={160}
                    alt="about-shape-img"
                  />
                </motion.div>
                <div className="absolute text-center text-white">
                  <div className="text-5xl font-bold leading-none">1+</div>
                  <div className="leading-none text-center">
                    Years of <br /> Experience
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* text */}
          <div className="text-center xl:text-left w-full xl:w-[50%] mx-auto xl:mx-0 flex flex-col gap-6">
            <div>
              <AnimatedText
                text="My name is Jay Mathasoliya"
                textStyles="h2 mb-2"
              />
              <p className="text-lg">Full-Stack Web Developer (MERN Stack)</p>
            </div>
            <p className="max-w-[680px] mx-auto xl:mx-0 mb-2">
              I&apos;m a Frontend & MERN Stack Developer with a strong focus on
              creating responsive, user-friendly web applications. With hands-on
              experience in React, Next.js, and RESTful APIs, I enjoy turning
              ideas into clean, efficient code. I&apos;m passionate about
              building modern web experiences and continuously learning new
              technologies to grow as a developer.
            </p>

            {/* info items */}
            <div className="flex flex-col lg:flex-row gap-8 xl:gap-6.5 max-w-max mx-auto xl:mx-0 items-center">
              {/* item 1 */}
              <div className="max-w-max">
                <div className="uppercase font-bold text-primary">Age</div>
                <p>22 Years</p>
              </div>

              {/* item 2 */}
              <div className="max-w-max">
                <div className="uppercase font-bold text-primary">Born in</div>
                <p>Gujarat, India</p>
              </div>

              {/* item 3 */}
              <div className="max-w-max">
                <div className="uppercase font-bold text-primary">Phone</div>
                <p>+91 93285 81998</p>
              </div>

              {/* item 4 */}
              <div className="max-w-max">
                <div className="uppercase font-bold text-primary">Email</div>
                <p>jaymathasoliya@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
