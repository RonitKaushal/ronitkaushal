import { MoveUpRight } from "lucide-react";
import { Badge } from "../ui/badge";
import Image from "next/image";

function Projects() {
  return (
    <div className="group relative flex justify-end items-end border-8 border-background dark:border-primary/10 bg-primary/3 shadow-2xl w-full h-full pt-30 rounded-4xl overflow-hidden">
      <div className="flex justify-start items-end w-full h-full min-h-72 pb-5 overflow-hidden md:overflow-x-scroll group-hover:gap-2 gap-0 transition-all duration-300">
        <Image
          className="rotate-[-20deg] group-hover:rotate-0 group-hover:mr-0 mr-[-20px] transition-all duration-300 rounded-2xl border-4 border-background shadow-2xl"
          src="/website1.png"
          alt="figma tools bar"
          width={150}
          height={150}
        />
        <Image
          className="translate-y-[-50px] group-hover:translate-y-0 transition-all duration-300 z-10 rounded-2xl border-4 border-background shadow-2xl"
          src="/website2.png"
          alt="figma tools bar"
          width={150}
          height={150}
        />
        <Image
          className="rotate-[20deg] ml-[-20px] group-hover:rotate-0 group-hover:ml-0 transition-all duration-300 rounded-2xl border-4 border-background shadow-2xl"
          src="/website3.png"
          alt="figma tools bar"
          width={150}
          height={150}
        />
        <Image
          className="rotate-[40deg] ml-[-40px] translate-y-[100px] group-hover:translate-y-0 group-hover:rotate-0 group-hover:ml-0 transition-all duration-300 rounded-2xl border-4 border-background shadow-2xl"
          src="/website4.png"
          alt="figma tools bar"
          width={150}
          height={150}
        />
      </div>
      <Badge className="absolute top-3 PoppinBold left-3 rounded-full shadow-[0_0px__20px_0px_rgba(0,0,0,0.100)] z-10 px-5 bg-white text-black text-base ">
        Projects
      </Badge>
      <div className="absolute top-3 right-3 p-2 bg-background rounded-full shadow-[0_0px__40px_0px_rgba(0,0,0,0.200)] z-10 text-primary">
        <MoveUpRight size={30} />
      </div>
    </div>
  );
}
export default Projects;
