"use client";
import { Button } from "../ui/button";
import AtroposCard from "@/components/home/atroposCard";

export default function Hero() {
  return (
    <div className="fixed z-0 top-0 bg-background flex justify-center items-center flex-col w-[100vw] h-[100vh]">
      <div className="relative flex justify-center items-center w-full h-auto md:space-x-14">
        <AtroposCard />
        <div className="relative flex justify-center items-center w-auto h-auto">
          <div className="realtive flex justify-center items-center flex-col w-auto h-auto p-5">
            <h1 className="text-5xl PoppinBold text-primary w-full text-left">
              Hello,
            </h1>
            <p className="text-2xl gochi text-primary w-full max-w-lg text-left">
              I`&apos;`m a frontend developer skilled in React, Next.js, and UI/UX
              design. I build fast, responsive, and user-friendly websites.
              Passionate about clean design, solving real-world problems, and
              creating smooth digital experiences. Powered by curiosity,
              creativity
            </p>
          </div>
        </div>
      </div>
      <div className="hidden md:flex justify-center items-center flex-wrap w-full h-auto mt-14 space-x-3">
        <a href="mailto:RonitKaushal445@gmail.com">
          <Button className="flex justify-center items-center text-background bg-primary border-0 rounded-full hover:bg-red-500 text-xl PoppinMedium p-6 transition-all duration-300 cursor-pointer">
            RonitKaushal445@gmail.com
          </Button>
        </a>

        <a href="tel:+919104320305">
          <Button className="flex justify-center items-center text-background bg-primary border-0 rounded-full hover:bg-red-500 text-xl PoppinMedium p-6 transition-all duration-300 cursor-pointer">
            +91 9104320305
          </Button>
        </a>

        <a
          href="https://www.linkedin.com/in/ronitkaushal"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="flex justify-center items-center text-background bg-primary border-0 rounded-full hover:bg-red-500 text-xl PoppinMedium p-6 transition-all duration-300 cursor-pointer">
            LinkedIn: Ronit Kaushal
          </Button>
        </a>

        <a href="/Ronit Kaushal Resume.pdf" download>
          <Button className="flex justify-center items-center text-background bg-red-500 border-0 rounded-full hover:bg-red-500 text-xl PoppinMedium p-6 transition-all duration-300 cursor-pointer">
            Resume
          </Button>
        </a>
      </div>
    </div>
  );
}
