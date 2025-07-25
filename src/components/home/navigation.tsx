"use client";

import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { ModeToggle } from "../darkMode";

export default function BottomNavigation() {
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
        <ModeToggle />
      </div>
    </div>
  );
}
