"use client";
import Image from "next/image";
import { ModeToggle } from "@/components/darkMode";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { MoveUpRight } from "lucide-react";
import WidgetItem from "@/components/home/widgetItems";
import BentoGrid from "./BentoGrid";
import CircularScrollOnWheel from "../widgets/CircularScrollOnWheel";

export default function Widgets() {
  return (
    <>
      <BentoGrid/>
    </>
  );
}
