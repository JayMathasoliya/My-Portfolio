import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";

const socials = [
  {
    icon: <FaLinkedin />,
    path: "",
  },
  {
    icon: <FaGithub />,
    path: "",
  },
  {
    icon: <IoMdMail />,
    path: "",
  },
  {
    icon: <RiInstagramFill />,
    path: "",
  },
];

type SocialsProps = {
  containerStyles?: string;
  iconStyles?: string;
};

const Socials = ({ containerStyles, iconStyles }: SocialsProps) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => {
        return (
          <Link key={index} href={social.path} className={iconStyles}>
            <span>{social.icon}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
