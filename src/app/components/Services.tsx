import Image from "next/image";
import React from "react";

const services = [
  {
    icon: "/assets/services/icon-1.svg",
    title: "Frontend Development",
    description: "Building responsive, modern UIs with React and Next.js.",
  },
  {
    icon: "/assets/services/icon-2.svg",
    title: "Full-Stack Web Development",
    description: "Developing complete MERN stack apps from UI to database.",
  },
  {
    icon: "/assets/services/icon-3.svg",
    title: "E-commerce Solutions",
    description: "Building secure, user-friendly online stores to drive sales.",
  },
  {
    icon: "/assets/services/icon-4.svg",
    title: "Care & Support",
    description: "Providing updates, security and support for performance",
  },
];

const Services = () => {
  return (
    <section className="relative z-40" id="services">
      <div className="container mx-auto">
        <ul className="relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 -top-12 place-items-center xl:place-items-stretch">
          {services.map((service, index) => {
            return (
              <li
                key={index}
                className="bg-white flex flex-col gap-3 shadow-custom p-6 max-w-[350px] md:max-w-none rounded-lg"
              >
                <Image
                  src={service.icon}
                  width={48}
                  height={48}
                  alt={`service-${index}`}
                />
                <h3 className="text-[20px] text-primary font-semibold">
                  {service.title}
                </h3>
                <p className="text-[15px] grow flex items-end">
                  {service.description}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Services;
