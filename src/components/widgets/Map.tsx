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

function Map() {
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
        <div className="group relative border-8 dark:border-primary/10 border-background shadow-2xl w-full h-full overflow-hidden rounded-4xl">
          <Image
            className="group-hover:scale-100 scale-120 transition-all duration-300"
            src="/GTA_Gandhinagar.png"
            alt="figma tools bar"
            width={500}
            height={500}
          />
          <Badge className="absolute top-3 left-3 PoppinBold shadow-[0_0px__20px_0px_rgba(0,0,0,0.100)] rounded-full px-5 bg-white text-black text-base ">
            Map
          </Badge>
          <div className="absolute flex justify-center items-center flex-col bg-white shadow-[0_0px__50px_50px_rgba(255,255,255)] bottom-0 w-full">
            <h3 className="text-3xl uppercase text-black/90">Gandhinagar</h3>
            <h4 className="text-lg text-black/20 uppercase">India</h4>
          </div>
        </div>
      </SheetTrigger>
      <SheetContent side={side}>
        <SheetHeader className="hidden">
          <SheetTitle className="PoppinBold text-xl">Map</SheetTitle>
        </SheetHeader>
        <div className="flex justify-start items-center flex-col w-full h-[60vh] md:h-full overflow-y-scroll overflow-x-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58665.83692730565!2d72.60434840577949!3d23.220704332824898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2b987c6d6809%3A0xf86f06a7873e0391!2sGandhinagar%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1747995145474!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>{" "}
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default Map;
