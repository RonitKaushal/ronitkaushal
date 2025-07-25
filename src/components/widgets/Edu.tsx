import { useEffect, useState } from "react";
import { Badge } from "../ui/badge";

import { useWindowSize } from "@/hooks/use-window-size";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function Edu() {
  const { width } = useWindowSize();

  const [side, setSide] = useState<"right" | "bottom">("right");
  useEffect(() => {
    if (width) {
      setSide(width <= 900 ? "bottom" : "right");
    }
  }, [width]);

  return (
    <Sheet>
      <SheetTrigger className="border-none outline-0 w-full h-full cursor-pointer">
        <div className="relative sm:border-8 dark:border-primary/10 border-background bg-background sm:bg-primary/3 sm:shadow-2xl pt-10 rounded-4xl w-full h-full overflow-scroll overflow-x-hidden">
          <Badge className="absolute top-3 left-3 PoppinBold rounded-full shadow-[0_0px__20px_0px_rgba(0,0,0,0.100)] z-10 px-5 bg-white text-black text-base ">
            Education
          </Badge>
          <div className="flex justify-start items-center flex-col w-full h-full">
            <div className="relative flex justify-center items-start border-l-2 border-primary/50 pl-5 ml-5 py-3 flex-col w-[95%]">
              <div className="custon-dot"></div>
              <p className="PoppinMedium w-full text-left">
                B.Tech IT <br /> Institute of Advanced Research
              </p>
              <p className="text-secondary-foreground/40 w-full text-left">2024 - 2027</p>
            </div>
            <div className="relative flex justify-center items-start border-l-2 border-primary/50 pl-5 ml-5 py-3 flex-col w-[95%]">
              <div className="custon-dot"></div>

              <p className="PoppinMedium w-full text-left">
                Diploma in Computer Engineering at <br /> Shree Swaminarayan
                Polytechnic
              </p>
              <p className="text-secondary-foreground/40 w-full text-left">2021 - 2024</p>
            </div>
            <div className="relative flex justify-center items-start border-l-2 border-primary/50 pl-5 ml-5 py-3 flex-col w-[95%]">
              <div className="custon-dot"></div>

              <p className="PoppinMedium w-full text-left">
                Secondary school at <br /> Mount Carmel High School
              </p>
              <p className="text-secondary-foreground/40 w-full text-left">2020 - 2021</p>
            </div>
          </div>
        </div>
      </SheetTrigger>
      <SheetContent side={side}>
        <SheetHeader>
          <SheetTitle className="PoppinBold text-xl">Education</SheetTitle>
        </SheetHeader>
        <div className="flex justify-start items-center flex-col w-full h-full">
            <div className="relative flex justify-center items-start ml-5 py-3 flex-col w-[95%]">
              <p className="PoppinMedium">
                B.Tech IT <br /> Institute of Advanced Research
              </p>
              <p className="text-secondary-foreground/40">2024 - 2027</p>
            </div>
            <div className="relative flex justify-center items-start ml-5 py-3 flex-col w-[95%]">

              <p className="PoppinMedium">
                Diploma in Computer Engineering at <br /> Shree Swaminarayan
                Polytechnic
              </p>
              <p className="text-secondary-foreground/40">2021 - 2024</p>
            </div>
            <div className="relative flex justify-center items-start ml-5 py-3 flex-col w-[95%]">
              <p className="PoppinMedium">
                Secondary school at <br /> Mount Carmel High School
              </p>
              <p className="text-secondary-foreground/40">2020 - 2021</p>
            </div>

        </div>
      </SheetContent>
    </Sheet>
  );
}
export default Edu;
