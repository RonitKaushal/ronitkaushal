import { MoveUpRight } from "lucide-react";
import Image from "next/image";

import { useEffect, useState } from "react";
import { Badge } from "../ui/badge";

import { useWindowSize } from "@/hooks/use-window-size";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function Skills() {
  const { width } = useWindowSize();

  const [side, setSide] = useState<"right" | "bottom">("right");
  useEffect(() => {
    if (width) {
      setSide(width <= 900 ? "bottom" : "right");
    }
  }, [width]);

  const skills = [
  {
    icon: "/reactjs.png",
    alt: "reactjs",
    title: "React.js",
    description: "Comfortable building dynamic UIs, reusable components, and hooks.",
  },
  {
    icon: "/nextjs.png",
    alt: "nextjs",
    title: "Next.js",
    description: "Proficient with SSR, routing, App Router, and deployment.",
  },
  {
    icon: "/javascript.png",
    alt: "javascript",
    title: "JavaScript",
    description: "Strong foundation in logic, ES6+, DOM, and web development.",
  },
  {
    icon: "/css.png",
    alt: "css",
    title: "CSS",
    description: "Good with layouts, responsive design, and modern styling techniques.",
  },
  {
    icon: "/html.png",
    alt: "html",
    title: "HTML",
    description: "Solid understanding of structure, semantics, and accessibility basics.",
  },
  {
    icon: "/python.png",
    alt: "python",
    title: "Python",
    description: "Basic knowledge of syntax, scripting, and problem-solving tasks.",
  },
  {
    icon: "/java.png",
    alt: "java",
    title: "Java",
    description: "Understands core concepts, OOP principles, and basic structure.",
  },
  {
    icon: "/figma.png",
    alt: "figma",
    title: "Figma",
    description: "Able to create UI mockups, wireframes, and design systems.",
  },
  {
    icon: "/photoshop.png", // consider changing this to "/photoshop.png" for consistency
    alt: "Photoshop",
    title: "Photoshop",
    description: "Can design posters, resumes, and perform basic photo editing.",
  },
];


  return (
    <Sheet>
      <SheetTrigger className="border-none outline-0 w-full h-full cursor-pointer">
        <div className="group flex justify-center items-center relative border-8 dark:border-primary/10 border-background shadow-2xl w-full h-full overflow-hidden rounded-4xl">
          <Image
            className="absolute drop-shadow-xl group-hover:translate-y-[110px] translate-x-[0px] translate-y-[60px] z-30 transition-all duration-500"
            src="/nextjs.png"
            alt="figma tools bar"
            width={120}
            height={120}
          />
          <Image
            className="absolute drop-shadow-xl group-hover:translate-y-[60px] translate-x-[70px] translate-y-[0px] z-20 transition-all duration-500"
            src="/reactjs.png"
            alt="figma tools bar"
            width={120}
            height={120}
          />
          <Image
            className="absolute drop-shadow-xl group-hover:translate-y-[60px] translate-x-[-70px] translate-y-[0px] z-20 transition-all duration-500"
            src="/css.png"
            alt="figma tools bar"
            width={120}
            height={120}
          />

          <Image
            className="absolute drop-shadow-xl group-hover:translate-y-[20px] z-0 translate-y-[-250px] transition-all duration-500"
            src="/photoshop.png"
            alt="figma tools bar"
            width={120}
            height={120}
          />
          <Image
            className="absolute drop-shadow-xl group-hover:translate-y-[20px] translate-x-[-140px] z-0 translate-y-[-250px] transition-all duration-500"
            src="/html.png"
            alt="figma tools bar"
            width={120}
            height={120}
          />
          <Image
            className="absolute drop-shadow-xl group-hover:translate-y-[20px] translate-x-[140px] z-0 translate-y-[-250px] transition-all duration-500"
            src="/python.png"
            alt="figma tools bar"
            width={120}
            height={120}
          />
          <Image
            className="absolute drop-shadow-xl group-hover:translate-y-[-30px] translate-x-[70px] z-0 translate-y-[-250px] transition-all duration-500"
            src="/javascript.png"
            alt="figma tools bar"
            width={120}
            height={120}
          />
          <Image
            className="absolute drop-shadow-xl group-hover:translate-y-[-30px] translate-x-[-70px] z-0 translate-y-[-250px] transition-all duration-500"
            src="/figma.png"
            alt="figma tools bar"
            width={120}
            height={120}
          />

          <Badge className="absolute top-3 left-3 PoppinBold shadow-[0_0px__20px_0px_rgba(0,0,0,0.100)] rounded-full px-5 bg-white text-black text-base ">
            Skills
          </Badge>
          <div className="absolute top-3 right-3 p-2 bg-background rounded-full shadow-[0_0px__40px_0px_rgba(0,0,0,0.200)] z-10 text-primary">
            <MoveUpRight size={30} />
          </div>
        </div>
      </SheetTrigger>
<SheetContent side={side}>
  <SheetHeader>
    <SheetTitle className="PoppinBold text-xl">Skills</SheetTitle>
  </SheetHeader>
  <div className="flex justify-start items-start flex-col w-full h-full overflow-scroll">
    {skills.map((skill, index) => (
      <div
        key={index}
        className="relative flex justify-center items-start ml-3 py-2 w-[90%] cursor-pointer connect-gray"
      >
        <div className="w-20 h-20">
          <Image src={skill.icon} alt={skill.alt} width={100} height={100} />
        </div>
        <div className="w-full ml-2">
          <p className="PoppinMedium">{skill.title}</p>
          <p className="text-secondary-foreground/40 text-sm">{skill.description}</p>
        </div>
      </div>
    ))}
  </div>
</SheetContent>
    </Sheet>
  );
}

export default Skills;
