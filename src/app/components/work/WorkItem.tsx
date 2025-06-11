import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiArrowDownRight } from "react-icons/fi";

type WorkItemProps = {
  href: string;
  category: string;
  img: string;
  title: string;
};

const WorkItem = ({ href, category, img, title }: WorkItemProps) => {
  return (
    <Link href={href} className="group">
      <div className="w-full h-[300px] p-8 rounded-[30px] flex items-center justify-center mb-6 relative overflow-hidden bg-[#F4F4F4]">
        <Badge className="bg-primary text-sm z-40 absolute top-6 left-6 capitalize">
          {category}
        </Badge>
        <Image
          src={img}
          fill
          priority
          quality={10}
          className="object-cover group-hover:scale-105 transition-all duration-500"
          alt={title}
        />
      </div>
      <div className="flex items-center justify-center">
        <div className="flex-1">
          <h3 className="text-sm sm:text-base font-semibold text-secondary-foreground">
            {title}
          </h3>
        </div>
        <button className="bg-accent text-white rounded-full w-[40px] h-[40px] flex items-center justify-center -rotate-90 group-hover:-rotate-45 transition-all duration-500">
          <FiArrowDownRight className="text-2xl" />
        </button>
      </div>
    </Link>
  );
};

export default WorkItem;
