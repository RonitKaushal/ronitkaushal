"use client";

import "atropos/css"; // Import the CSS
import Atropos from "atropos/react";
import Image from "next/image";
import { Flame } from "lucide-react"; // Assuming you're using lucide-react

const AtroposCard = () => {
  return (
    <Atropos
      className="hidden md:flex my-atropos w-auto h-auto justify-center items-center"
      style={{ overflow: "visible" }}
      activeOffset={40}
      shadowScale={1}
    >
      <div className="relative hidden md:flex justify-center items-center w-auto h-auto border-2 border-primary ">
        <Flame
          className="absolute z-10 top-[200px] right-[0px] drop-shadow-xl rotate-12"
          size={70}
          color="red"
          strokeWidth={1}
          data-atropos-offset="-5"
        />
        <h1
          className="absolute top-[0px] left-[0px] gochi text-3xl z-20 text-red-500"
          data-atropos-offset="5"
        >
          Front-End <br /> Developer
        </h1>{" "}
        {/* <Image
          src="/ronit face.png"
          alt=""
          className="absolute z-10 top-[200px] right-[-20px] drop-shadow-xl rotate-12"
          width={100}
          height={100}
          data-atropos-offset="10"
        /> */}
        <div className="relative flex justify-center items-center flex-col w-auto h-auto p-5 bg-white">
          <Image
            src="/Ronit_Anime.png"
            alt=""
            className="bg-background"
            width={250}
            height={250}
            data-atropos-offset="2"
          />
          <h1
            className="text-3xl gochi w-full text-left text-black"
            data-atropos-offset="3"
          >
            Ronit Kaushal
          </h1>
        </div>
      </div>
    </Atropos>
  );
};

export default AtroposCard;
