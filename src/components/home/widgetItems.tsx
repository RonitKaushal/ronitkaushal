"use client";
// inspired by tom is loading
import React, { useRef, useState } from "react";
import Image from "next/image";
import { Badge, MoveUpRight } from "lucide-react";

function WidgetItem() {
  return (
    <>
      <div className="container mx-auto p-4 ">
        <div className="columns-2 md:columns-3 2xl:columns-4 gap-4">
            {/* ////////////////////////////////////////// */}
            <div className="widget relative border-8 border-background shadow-2xl w-40 h-40 rounded-4xl">
              <Image
                className=""
                src="/GTA Gandhinagar.png"
                alt="figma tools bar"
                width={500}
                height={500}
              />
              <Badge className="absolute top-3 left-3 bg-background rounded-full px-5 text-primary text-base ">
                Map
              </Badge>
              <div className="absolute flex justify-center items-center flex-col bg-background shadow-[0_0px__50px_50px_rgba(255,255,255)] bottom-0 w-full">
                <h3 className="text-3xl uppercase">Gandhinagar</h3>
                <h4 className="text-lg text-secondary-foreground/20 uppercase">
                  India
                </h4>
              </div>
            </div>
            <div className="widget relative flex justify-end items-end border-8 border-background bg-primary/3 shadow-2xl w-40 h-40 pt-30 pb-3 rounded-4xl">
              <div className="flex justify-start items-start gap-2 w-full max-w-[350px] overflow-scroll h-auto">
                <Image
                  className="rounded-2xl border-4 border-background"
                  src="/cover.png"
                  alt="figma tools bar"
                  width={150}
                  height={150}
                />
                <Image
                  className="rounded-2xl border-4 border-background"
                  src="/cover.png"
                  alt="figma tools bar"
                  width={150}
                  height={150}
                />
                <Image
                  className="rounded-2xl border-4 border-background"
                  src="/cover.png"
                  alt="figma tools bar"
                  width={150}
                  height={150}
                />
                <Image
                  className="rounded-2xl border-4 border-background"
                  src="/cover.png"
                  alt="figma tools bar"
                  width={150}
                  height={150}
                />
              </div>
              <Badge className="absolute top-3 left-3 bg-background rounded-full shadow-[0_0px__40px_0px_rgba(0,0,0,0.200)] z-10 px-5 text-primary text-base ">
                Projects
              </Badge>
              <div className="absolute top-3 right-3 p-2 bg-background rounded-full shadow-[0_0px__40px_0px_rgba(0,0,0,0.200)] z-10 text-primary">
                <MoveUpRight size={30} />
              </div>
            </div>
            <div className="widget relative border-8 border-background bg-primary/3 shadow-2xl pt-20 w-40 h-40 rounded-4xl">
              <Badge className="absolute top-3 left-3 bg-background rounded-full shadow-[0_0px__40px_0px_rgba(0,0,0,0.200)] z-10 px-5 text-primary text-base ">
                Experience
              </Badge>
              <div className="flex justify-start items-center flex-col w-full h-full max-h-[300px] overflow-scroll">
                <div className="relative flex justify-center items-start border-l-4 border-primary/50 pl-5 ml-5 py-2 flex-col w-[95%]">
                  <div className="custon-dot"></div>
                  <p className="font-bold">
                    Graphic Designer at Institute of Advanced Research
                  </p>
                  <p className="text-secondary-foreground/40">
                    Present - Remote - Freelance
                  </p>
                </div>
                <div className="relative flex justify-center items-start border-l-4 border-primary/50 pl-5 ml-5 py-2 flex-col w-[95%]">
                  <div className="custon-dot"></div>

                  <p className="font-bold">
                    Wordpress Designer at Tech Rational
                  </p>
                  <p className="text-secondary-foreground/40">
                    2024 - On Site - Internship
                  </p>
                </div>
                <div className="relative flex justify-center items-start border-l-4 border-primary/50 pl-5 ml-5 py-2 flex-col w-[95%]">
                  <div className="custon-dot"></div>

                  <p className="font-bold">Mount Carmel High School</p>
                  <p className="text-secondary-foreground/40">
                    2021 - On Site - Internship
                  </p>
                </div>
              </div>
            </div>
            <div className="widget relative border-8 border-background bg-primary/3 shadow-2xl pt-10 w-40 h-40 rounded-4xl">
              <Badge className="absolute top-3 left-3 bg-background rounded-full shadow-[0_0px__40px_0px_rgba(0,0,0,0.200)] z-10 px-5 text-primary text-base ">
                Experience
              </Badge>
              <div className="flex justify-start items-center flex-col w-full h-full">
                <div className="relative flex justify-center items-start border-l-4 border-primary/50 pl-5 ml-5 py-3 flex-col w-[95%]">
                  <div className="custon-dot"></div>
                  <p className="font-bold">
                    B.Tech IT <br /> Institute of Advanced Research
                  </p>
                  <p className="text-secondary-foreground/40">2024 - 2027</p>
                </div>
                <div className="relative flex justify-center items-start border-l-4 border-primary/50 pl-5 ml-5 py-3 flex-col w-[95%]">
                  <div className="custon-dot"></div>

                  <p className="font-bold">
                    Diploma in Computer Engineering at <br /> Shree Swaminarayan
                    Polytechnic
                  </p>
                  <p className="text-secondary-foreground/40">2021 - 2024</p>
                </div>
                <div className="relative flex justify-center items-start border-l-4 border-primary/50 pl-5 ml-5 py-3 flex-col w-[95%]">
                  <div className="custon-dot"></div>

                  <p className="font-bold">
                    Secondary school at <br /> Mount Carmel High School
                  </p>
                  <p className="text-secondary-foreground/40">2020 - 2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default WidgetItem;
