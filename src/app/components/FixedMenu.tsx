"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { CgMenuGridR } from "react-icons/cg";
import { useMediaQuery } from "react-responsive";
import Navbar from "./Navbar";
import { FiMail, FiMapPin, FiPhoneCall } from "react-icons/fi";
import Socials from "./Socials";

const FixedMenu = () => {
  const [showMenuButton, setShowMenuButton] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const isMobile = useMediaQuery({
    query: "(max-width: 640px)",
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      const handleScroll = () => {
        setShowMenuButton(window.scrollY > 150);
      };
      if (!isMobile) {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      } else {
        setShowMenuButton(true);
      }
    }
  }, [isMobile, isMounted]);

  if (!isMounted) return null;

  return (
    <div className="fixed bottom-18 w-full h-[400px] z-50 flex justify-center pointer-events-none bg-transparent">
      <div className="relative w-full z-50">
        <AnimatePresence>
          {showMenu && showMenuButton && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute w-full max-w-md md:max-w-none h-[400px] left-1/2 -translate-x-1/2 bottom-18 xl:bottom-7 px-4 pointer-events-auto"
            >
              <div className="bg-white rounded-lg w-full h-full shadow-custom max-w-[1170px] mx-auto py-12 xl:py-12 px-12 xl:px-32 flex items-center gap-12">
                <Navbar
                  containerStyles="md:border-r border-secondary/20 md:pr-12 w-full md:w-auto text-center md:text-left"
                  listStyles="flex flex-col justify-center gap-4"
                  linkStyles="font-primary text-4xl text-primary cursor-pointer"
                  spy={true}
                />
                <div className="hidden md:flex mx-auto">
                  <div>
                    <div className="flex gap-12 mb-12">
                      <div className="flex flex-col">
                        <div className="text-[28px] text-accent mb-2">
                          <FiMapPin />
                        </div>
                        <p className="font-semibold text-primary text-lg">
                          Location
                        </p>
                        <p>Ahmedabad, Gujarat</p>
                      </div>

                      <div className="flex flex-col">
                        <div className="text-[28px] text-accent mb-2">
                          <FiPhoneCall />
                        </div>
                        <p className="font-semibold text-primary text-lg">
                          Phone
                        </p>
                        <p>+91 93285 81998</p>
                      </div>

                      <div className="flex flex-col">
                        <div className="text-[28px] text-accent mb-2">
                          <FiMail />
                        </div>
                        <p className="font-semibold text-primary text-lg">
                          Email
                        </p>
                        <p>jaymathasoliya@gmail.com</p>
                      </div>
                    </div>

                    <Socials
                      containerStyles="flex items-center gap-2"
                      iconStyles="text-[20px] w-8 h-8 text-primary flex items-center justify-center rounded-full"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        {isMobile ? (
          <div className="absolute z-10 left-1/2 -translate-x-1/2 bottom-0 pointer-events-auto">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="bg-accent shadow-custom w-[54px] h-[54px] rounded-lg cursor-pointer flex items-center justify-center select-none"
            >
              <CgMenuGridR className="text-4xl text-white" />
            </button>
          </div>
        ) : (
          <AnimatePresence>
            {showMenuButton && (
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 40,
                }}
                className="absolute z-10 left-1/2 -translate-x-1/2 bottom-0 pointer-events-auto"
              >
                <button
                  onClick={() => setShowMenu(!showMenu)}
                  className="bg-accent shadow-custom w-[54px] h-[54px] rounded-lg cursor-pointer flex items-center justify-center select-none"
                >
                  <CgMenuGridR className="text-4xl text-white" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>
    </div>
  );
};

export default FixedMenu;
