import Link from "next/link";
import React from "react";

type LogoProps = {
  light?: boolean;
};

const Logo = ({ light = false }: LogoProps) => {
  const colorClass = light ? "text-white" : "text-primary";
  return (
    <Link href="/" className="font-primary text-2xl tracking-[4px]">
      <span className={colorClass}>Jay Mathasoliya</span>
    </Link>
  );
};

export default Logo;
