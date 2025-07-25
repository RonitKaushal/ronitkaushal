"use client";
import Image from "next/image";
import { ModeToggle } from "@/components/darkMode";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";

import { usePathname, useRouter } from "next/navigation";

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
import Link from "next/link";

export default function Nav() {
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

  const { resolvedTheme } = useTheme();
  const [imgSrc, setImgSrc] = useState("/Ronit Logo.png"); // default light logo

  useEffect(() => {
    const updatedSrc =
      resolvedTheme === "dark" ? "/Ronit Logo dark.png" : "/Ronit Logo.png";
    setImgSrc(updatedSrc);
  }, [resolvedTheme]);

  const pathname = usePathname();
  const router = useRouter();

  const isHome = pathname === "/" || pathname === "/home";
  const isProjects = pathname === "/projects";
  return (
    <div className="fixed top-0 z-50 flex justify-between items-center w-full h-auto px-2 sm:px-10 mt-2">
      <div className="flex justify-center items-center w-30 h-auto">
        <Link href="/">
          <Image src={imgSrc} alt="Logo" width={400} height={400} />
        </Link>
      </div>
      <div className="flex justify-center items-center w-auto h-auto space-x-2">
        {isHome && (
          <Button
            onClick={() => router.push("/projects")}
            className="hidden sm:flex justify-center items-center text-background rounded-full hover:bg-red-500 text-xl PoppinMedium uppercase p-6 transition-all duration-300 cursor-pointer shadow-[0_10px_40px_0px_theme('colors.background.DEFAULT')]"
          >
            Projects
          </Button>
        )}
        {isProjects && (
          <Button
            onClick={() => router.push("/")}
            className="hidden sm:flex justify-center items-center text-background rounded-full hover:bg-red-500 text-xl PoppinMedium uppercase p-6 transition-all duration-300 cursor-pointer shadow-[0_10px_40px_0px_theme('colors.background.DEFAULT')]"
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
