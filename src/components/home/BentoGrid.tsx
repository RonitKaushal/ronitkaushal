// components/BentoGrid.tsx
import React from "react";
import Expri from "@/components/widgets/expri";
import Projects from "@/components/widgets/projects";
import Edu from "../widgets/Edu";
import Map from "../widgets/Map";
import Connect from "../widgets/Connect";
import Skills from "@/components/widgets/skills";

const BentoGrid = () => {
  return (
    <div className="bg-background mt-[100vh] dark:shadow-[0_0_100px_50px_black] shadow-[0_0_100px_50px_white] pb-10 relative sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[350px] w-[95%] max-w-[1200px]">
      {/* Tile 1 - Big Tile */}
      <div className="flex justify-center items-center mb-5 md:mb-0">
        <Expri />
      </div>

      {/* Tile 2 */}
      <div className="flex justify-center items-center mb-5 md:mb-0">
        <Edu />
      </div>
      {/* Tile 3 */}
      <div className="flex justify-center items-center mb-5 md:mb-0">
        <Projects />
      </div>

      {/* Tile 4 */}
      <div className="flex justify-center items-center mb-5 md:mb-0">
        <Map />
      </div>

      {/* Tile 5 */}
      <div className="flex justify-center items-center mb-5 md:mb-0">
        {" "}
        <Connect />
      </div>

      {/* Tile 6 */}
      <div className="flex justify-center items-center mb-5 md:mb-0">
        <Skills />
      </div>

      {/* //////////////////////////////////////////////////////////// */}

      {/* //////////////////////////////////////////////////////////// */}
    </div>
  );
};

export default BentoGrid;
