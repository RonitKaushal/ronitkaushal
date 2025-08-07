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

// /////////

function Expri() {
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
            Experience
          </Badge>
          <div className="flex justify-start items-center flex-col w-full h-full">
            <div className="relative flex justify-center items-start border-l-2 border-primary/50 pl-5 ml-5 py-3 flex-col w-[95%]">
              <div className="custon-dot"></div>
              <p className="PoppinMedium w-full text-left">
                Graphic Designer <br /> Institute of Advanced Research
              </p>
              <p className="text-secondary-foreground/40  w-full text-left">
                Present - Remote - Freelance
              </p>
            </div>
            <div className="relative flex justify-center items-start border-l-2 border-primary/50 pl-5 ml-5 py-3 flex-col w-[95%]">
              <div className="custon-dot"></div>

              <p className="PoppinMedium  w-full text-left">
                Wordpress Designer <br /> Tech Rational
              </p>
              <p className="text-secondary-foreground/40  w-full text-left">
                2024 - On Site - Internship
              </p>
            </div>
            <div className="relative flex justify-center items-start border-l-2 border-primary/50 pl-5 ml-5 py-3 flex-col w-[95%]">
              <div className="custon-dot"></div>

              <p className="PoppinMedium  w-full text-left">
                Frontend Developer <br /> TECHWE INNOVATION PRIVATE LIMITED
              </p>
              <p className="text-secondary-foreground/40  w-full text-left">
                2021 - On Site - Internship
              </p>
            </div>
          </div>
        </div>
      </SheetTrigger>
      <SheetContent side={side}>
        <SheetHeader>
          <SheetTitle className="PoppinBold text-xl">Experience</SheetTitle>
        </SheetHeader>
        <div className="flex justify-start items-center flex-col w-full h-full">
          <div className="relative flex justify-center items-start ml-5 py-3 flex-col w-[95%]">
            <p className="PoppinMedium w-full text-left">
              Graphic Designer <br /> Institute of Advanced Research
            </p>
            <p className="text-secondary-foreground/40  w-full text-left">
              Present - Remote - Freelance
            </p>
          </div>
          <div className="relative flex justify-center items-start ml-5 py-3 flex-col w-[95%]">
            <p className="PoppinMedium  w-full text-left">
              Wordpress Designer <br /> Tech Rational
            </p>
            <p className="text-secondary-foreground/40  w-full text-left">
              2024 - On Site - Internship
            </p>
          </div>
          <div className="relative flex justify-center items-start ml-5 py-3 flex-col w-[95%]">
            <p className="PoppinMedium  w-full text-left">
              Frontend Developer <br /> TECHWE INNOVATION PRIVATE LIMITED
            </p>
            <p className="text-secondary-foreground/40  w-full text-left">
              2021 - On Site - Internship
            </p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default Expri;
