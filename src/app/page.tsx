import Hero from "@/components/home/hero";
import Widgets from "@/components/home/widgets";

export default function Home() {
  return (
    <div className="relative flex justify-center items-center flex-col w-[100vw] h-auto">
      <Hero/>
      <Widgets/>
    </div>
  );
}
