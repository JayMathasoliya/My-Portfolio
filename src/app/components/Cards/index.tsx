"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  FaCss3Alt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
} from "react-icons/si";
import Card from "./Card";

const journey = [
  {
    type: "experience",
    company: "The One Technologies",
    logoUrl: "/assets/journey/experience/logo-1.svg",
    position: "Associate Software Engineer",
    duration: "Aug 2024 – Present",
    description:
      "Developing scalable and responsive web applications using Next.js, React, JavaScript, and Tailwind CSS. Collaborating with cross-functional teams to deliver clean, maintainable code and optimized user experiences.",
  },
  {
    type: "experience",
    company: "The One Technologies",
    logoUrl: "/assets/journey/experience/logo-1.svg",
    position: "Full-Stack Development Intern",
    duration: "Jan 2024 – Aug 2024",
    description:
      "Completed hands-on training in the MERN stack, working on real-time projects and gaining foundational experience in frontend and backend development, RESTful APIs, and version control with Git.",
  },
  {
    type: "education",
    institution: "Shantilal Shah Engineering College, Bhavnagar",
    logoUrl: "/assets/journey/education/logo-1.png",
    qualification: "Bachelor of Engineering (B.E.) in Information Technology",
    duration: "Aug 2020 – May 2024",
    description:
      "Graduated with a solid foundation in Information Technology, focusing on data structures, databases, operating systems, and web development using modern technologies.",
  },
  {
    type: "education",
    institution: "Crystal International Public School, Ahmedabad",
    logoUrl: "/assets/journey/education/logo-2.png",
    qualification: "12th Science (GHSEB)",
    duration: "June 2018 – June 2020",
    description:
      "Completed 12th grade with a focus on Physics, Chemistry, and Mathematics, developing strong analytical and problem-solving skills foundational to engineering studies.",
  },
  {
    type: "education",
    institution: "Shree V.K Vidhyalaya, Ahmedabad",
    logoUrl: "/assets/journey/education/logo-3.png",
    qualification: "10th (GSEB)",
    duration: "June 2017 – June 2018",
    description:
      "Successfully completed 10th standard with distinction, laying the groundwork in core academic subjects and technology basics.",
  },
  {
    type: "skill",
    name: "HTML5",
    icon: <FaHtml5 />,
    duration: "Learned in 2020",
    description:
      "Developed well-structured web pages using semantic HTML5, ensuring accessibility and modern web standards compliance.",
  },
  {
    type: "skill",
    name: "CSS3",
    icon: <FaCss3Alt />,
    duration: "Learned in 2020",
    description:
      "Styled responsive and visually appealing user interfaces with CSS3, utilizing Flexbox, Grid, and modern design principles.",
  },
  {
    type: "skill",
    name: "JavaScript",
    icon: <FaJs />,
    duration: "Learned in 2021",
    description:
      "Enhanced web interactivity using JavaScript, implementing dynamic features and DOM manipulation for better user engagement.",
  },
  {
    type: "skill",
    name: "React.js",
    icon: <FaReact />,
    duration: "Learned in 2021",
    description:
      "Built modular and high-performance user interfaces with React.js, leveraging hooks and component-based architecture.",
  },
  {
    type: "skill",
    name: "Next.js",
    icon: <SiNextdotjs />,
    duration: "Learned in 2024",
    description:
      "Developed SSR and SEO-friendly web apps using Next.js, optimizing performance and routing for production-ready sites.",
  },
  {
    type: "skill",
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    duration: "Learned in 2023",
    description:
      "Styled modern and responsive UIs using utility-first Tailwind CSS, ensuring rapid and consistent design across components.",
  },
  {
    type: "skill",
    name: "Git & GitHub",
    icon: <FaGithub />,
    duration: "Learned in 2022",
    description:
      "Used Git and GitHub for version control and collaboration, maintaining clean project history and managing feature branches effectively.",
  },
  {
    type: "skill",
    name: "Node.js",
    icon: <FaNodeJs />,
    duration: "Learned in 2023",
    description:
      "Created backend services and RESTful APIs with Node.js, ensuring fast and scalable server-side logic.",
  },
  {
    type: "skill",
    name: "Express.js",
    icon: <SiExpress />,
    duration: "Learned in 2023",
    description:
      "Built lightweight and efficient server-side APIs using Express.js, enabling smooth data handling and integration.",
  },
  {
    type: "skill",
    name: "MongoDB",
    icon: <SiMongodb />,
    duration: "Learned in 2023",
    description:
      "Managed NoSQL databases with MongoDB, performing CRUD operations and schema design for dynamic web applications.",
  },
];

const Cards = () => {
  return (
    <Tabs
      defaultValue="experience"
      className="w-full flex flex-col items-center"
    >
      <TabsList className="max-w-max mb-[30px]">
        <TabsTrigger value="experience">Experience</TabsTrigger>
        <TabsTrigger value="education">Education</TabsTrigger>
        <TabsTrigger value="skills">My Skills</TabsTrigger>
      </TabsList>
      <TabsContent value="experience" className="w-full">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            {journey
              .filter((item) => item.type === "experience")
              .map((card, index) => {
                return <Card key={index} {...card} />;
              })}
          </motion.div>
        </AnimatePresence>
      </TabsContent>

      <TabsContent value="education" className="w-full">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            {journey
              .filter((item) => item.type === "education")
              .map((card, index) => {
                return <Card key={index} {...card} />;
              })}
          </motion.div>
        </AnimatePresence>
      </TabsContent>

      <TabsContent value="skills" className="w-full">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            {journey
              .filter((item) => item.type === "skill")
              .map((card, index) => {
                return <Card key={index} {...card} />;
              })}
          </motion.div>
        </AnimatePresence>
      </TabsContent>
    </Tabs>
  );
};

export default Cards;
