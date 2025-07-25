import { MoveUpRight } from "lucide-react";
import Image from "next/image";

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

function Connect() {
  const { width } = useWindowSize();

  const [side, setSide] = useState<"right" | "bottom">("right");
  useEffect(() => {
    if (width) {
      setSide(width <= 900 ? "bottom" : "right");
    }
  }, [width]);

  const connectOptions = [
    {
      id: "call",
      icon: "/call.png",
      alt: "Call",
      title: "Phone Call",
      value: "+91 9104320305",
      url: "tel:+919104320305",
    },
    {
      id: "email",
      icon: "/gmail.png",
      alt: "Gmail",
      title: "Gmail",
      value: "ronitkaushal445@gmail.com",
      url: "mailto:ronitkaushal445@gmail.com",
    },
    {
      id: "whatsApp",
      icon: "/whatsApp.png",
      alt: "WhatsApp",
      title: "WhatsApp",
      value: "+91 9104320305",
      url: "https://wa.me/9104320305",
    },
    {
      id: "linkedin",
      icon: "/linkedin.png",
      alt: "LinkedIn",
      title: "LinkedIn",
      value: "linkedin.com/in/ronitkaushal/",
      url: "https://www.linkedin.com/in/ronitkaushal/",
    },
    {
      id: "behance",
      icon: "/behence.png",
      alt: "Behance",
      title: "Behance",
      value: "behance.net/ronitkaushal",
      url: "https://www.behance.net/ronitkaushal",
    },
    {
      id: "dribbble",
      icon: "/dribbble.png",
      alt: "Dribbble",
      title: "Dribbble",
      value: "dribbble.com/ronitkaushal",
      url: "https://dribbble.com/ronitkaushal",
    },
    {
      id: "github",
      icon: "/github.png",
      alt: "GitHub",
      title: "GitHub",
      value: "github.com/RonitKaushal",
      url: "https://github.com/ronitkaushal",
    },
    {
      id: "reddit",
      icon: "/reddit.png",
      alt: "Reddit",
      title: "Reddit",
      value: "reddit.com/user/RonitKaushal",
      url: "https://www.reddit.com/user/RonitKaushal/",
    },
    {
      id: "youtube",
      icon: "/youtube.png",
      alt: "YouTube",
      title: "YouTube",
      value: "youtube.com/@ronitkaushal-org",
      url: "https://www.youtube.com/@ronitkaushal-org",
    },
  ];

  const handleRedirect = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <Sheet>
      <SheetTrigger className="border-none outline-0 w-full h-full cursor-pointer">
        <div className="group flex justify-center items-end relative border-8 border-background dark:border-primary/10 shadow-2xl w-full h-full overflow-hidden rounded-4xl">
          <Image
            className="z-10 group-hover:scale-110 scale-100 transition-all duration-300"
            src="/ronit-char.png"
            alt="figma tools bar"
            width={300}
            height={300}
          />
          <Image
            className="absolute group-hover:scale-110 scale-100 drop-shadow-xl top-[100px] left-[60px] group-hover:top-[200px] group-hover:left-[100px] rotate-[-30deg] transition-all duration-300"
            src="/github.png"
            alt="figma tools bar"
            width={100}
            height={100}
          />
          <Image
            className="absolute group-hover:scale-110 scale-100 drop-shadow-xl top-[100px] right-[60px] group-hover:top-[200px] group-hover:right-[100px] rotate-[30deg] transition-all duration-300"
            src="/linkedin.png"
            alt="figma tools bar"
            width={100}
            height={100}
          />
          <Image
            className="absolute group-hover:scale-110 scale-100 drop-shadow-xl top-[190px] right-[30px] group-hover:right-[120px] rotate-[0deg] transition-all duration-300"
            src="/gmail.png"
            alt="figma tools bar"
            width={80}
            height={80}
          />
          <Image
            className="absolute group-hover:scale-110 scale-100 group-hover:top-[500px] top-[250px] left-[30px] rotate-[0deg] z-10 drop-shadow-xl transition-all duration-300"
            src="/behence.png"
            alt="figma tools bar"
            width={80}
            height={80}
          />
          {/* ////////////////////////////////////////////////////////// */}
          <Image
            className="absolute group-hover:scale-110 scale-100 drop-shadow-xl top-[200px] left-[100px] group-hover:top-[100px] group-hover:left-[60px] rotate-[-30deg] transition-all duration-300"
            src="/dribbble.png"
            alt="figma tools bar"
            width={100}
            height={100}
          />
          <Image
            className="absolute group-hover:scale-110 scale-100 drop-shadow-xl top-[200px] right-[100px] group-hover:top-[100px] group-hover:right-[60px] rotate-[30deg] transition-all duration-300"
            src="/reddit.png"
            alt="figma tools bar"
            width={100}
            height={100}
          />
          <Image
            className="absolute group-hover:scale-110 scale-100 drop-shadow-xl top-[190px] right-[120px] group-hover:right-[30px] rotate-[0deg]  transition-all duration-300"
            src="/youtube.png"
            alt="figma tools bar"
            width={80}
            height={80}
          />
          <Image
            className="absolute group-hover:scale-110 scale-100 drop-shadow-xl group-hover:top-[250px] top-[500px] left-[30px] rotate-[0deg] z-10 transition-all duration-300"
            src="/discord.png"
            alt="figma tools bar"
            width={80}
            height={80}
          />

          <Badge className="absolute top-3 left-3 PoppinBold shadow-[0_0px__20px_0px_rgba(0,0,0,0.100)] rounded-full px-5 bg-white text-black text-base ">
            Connect
          </Badge>
          <div className="absolute top-3 right-3 p-2 bg-background rounded-full shadow-[0_0px__40px_0px_rgba(0,0,0,0.200)] z-10 text-primary">
            <MoveUpRight size={30} />
          </div>
        </div>
      </SheetTrigger>
      <SheetContent side={side}>
        <SheetHeader>
          <SheetTitle className="PoppinBold text-xl">Connect</SheetTitle>
        </SheetHeader>
        <div className="flex justify-start items-center flex-col w-full h-full overflow-y-scroll overflow-x-hidden">
          {connectOptions.map(({ id, icon, alt, title, value, url }) => (
            <div
              key={id}
              onClick={() => handleRedirect(url)}
              className="relative flex justify-center items-start ml-5 py-2 w-full cursor-pointer connect-gray"
            >
              <div className="w-16 h-16">
                <Image src={icon} alt={alt} width={100} height={100} />
              </div>
              <div className="w-full ml-2">
                <p className="PoppinMedium">{title}</p>
                <p className="text-secondary-foreground/40 text-sm">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default Connect;
