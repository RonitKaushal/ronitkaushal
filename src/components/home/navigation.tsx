"use client";

import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "../darkMode";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"; // ✅ Correct import
import { useWindowSize } from "@/hooks/use-window-size";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function BottomNavigation() {
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

  const pathname = usePathname();
  const router = useRouter();

  const isHome = pathname === "/" || pathname === "/home";
  const isProjects = pathname === "/projects";

  return (
    <div className="fixed sm:hidden bottom-5 flex justify-center items-center w-full h-auto z-50">
      <div className="flex justify-center items-center w-auto h-auto space-x-3">
        {isHome && (
          <Button
            onClick={() => router.push("/projects")}
            className="text-background rounded-full hover:bg-red-500 text-xl PoppinMedium uppercase p-6 transition-all duration-300 cursor-pointer shadow-[0_10px_40px_0px_theme('colors.background.DEFAULT')]"
          >
            Projects
          </Button>
        )}
        {isProjects && (
          <Button
            onClick={() => router.push("/")}
            className="text-background rounded-full hover:bg-red-500 text-xl PoppinMedium uppercase p-6 transition-all duration-300 cursor-pointer shadow-[0_10px_40px_0px_theme('colors.background.DEFAULT')]"
          >
            Home
          </Button>
        )}

        <Sheet>
          <SheetTrigger className="text-background bg-red-500 rounded-full hover:bg-red-500 text-xl PoppinMedium uppercase p-6 py-2.5 transition-all duration-300 cursor-pointer shadow-[0_10px_40px_0px_theme('colors.background.DEFAULT')]">
            Connect
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle className="PoppinBold text-xl">Connect</SheetTitle>
            </SheetHeader>
            <div className="flex justify-start items-center flex-col w-full h-[60vh] md:h-full overflow-y-scroll overflow-x-hidden">
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
                    <p className="text-secondary-foreground/40 text-sm">
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </SheetContent>
        </Sheet>

        <ModeToggle />
      </div>
    </div>
  );
}
