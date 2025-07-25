"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Anime Profile Card",
    description: "A sleek anime-themed profile card built with HTML, CSS, and JavaScript.",
    image: "/projects/Anime_Profile_Card/cover.png",
    tags: ["HTML5", "CSS3", "JavaScript"],
    url: "projects/Anime_Profile_Card/index.html",
  },
  {
    title: "Circular Navigation Menu Magic Dark",
    description: "A dark-themed circular navigation menu with interactive animation.",
    image: "/projects/Circular Navigation Menu Magic Dark/cover.png",
    tags: ["HTML5", "CSS3", "JavaScript"],
    url: "projects/Circular Navigation Menu Magic Dark/index.html",
  },
  {
    title: "Circular Navigation Menu Magic",
    description: "A stylish circular navigation menu made with only HTML, CSS, and JS.",
    image: "/projects/Circular Navigation Menu Magic/cover.png",
    tags: ["HTML5", "CSS3", "JavaScript"],
    url: "projects/Circular Navigation Menu Magic/index.html",
  },
  {
    title: "CSS 9 Dots Menu",
    description: "A 9-dots menu icon animation with creative hover effects.",
    image: "/projects/CSS 9 Dots Menu/cover.png",
    tags: ["HTML5", "CSS3", "JavaScript"],
    url: "projects/CSS 9 Dots Menu/index.html",
  },
  {
    title: "CSS Animated Buttons with Hover Effects",
    description: "Beautifully animated buttons using CSS hover effects.",
    image: "/projects/CSS Animated Buttons with Hover Effects/cover.png",
    tags: ["HTML5", "CSS3", "JavaScript"],
    url: "projects/CSS Animated Buttons with Hover Effects/index.html",
  },
  {
    title: "CSS Creative Product Card UI Design",
    description: "A creative product card design using modern UI principles.",
    image: "/projects/CSS Creative Product Card UI Design/cover.png",
    tags: ["HTML5", "CSS3", "JavaScript"],
    url: "projects/CSS Creative Product Card UI Design/index.html",
  },
  {
    title: "CSS Only Image Comparison Slider",
    description: "An image comparison slider built using only HTML and CSS.",
    image: "/projects/CSS Only Image Comparison Slider/cover.png",
    tags: ["HTML5", "CSS3", "JavaScript"],
    url: "projects/CSS Only Image Comparison Slider/index.html",
  },
  {
    title: "Interactive Wallpaper Changer",
    description: "Change wallpapers interactively with this clean interface.",
    image: "/projects/Interactive_Wallpaper_Changer/cover.png",
    tags: ["HTML5", "CSS3", "JavaScript"],
    url: "projects/Interactive_Wallpaper_Changer/index.html",
  },
  {
    title: "MacBook Control Center",
    description: "A replica of MacBook's control center interface using web tech.",
    image: "/projects/MacBook_ControlCenter/cover.png",
    tags: ["HTML5", "CSS3", "JavaScript"],
    url: "projects/MacBook_ControlCenter/index.html",
  },
  {
    title: "MacOS DockBar",
    description: "A MacOS-style dock bar recreated with HTML, CSS, and JS.",
    image: "/projects/MacOS DockBar/cover.png",
    tags: ["HTML5", "CSS3", "JavaScript"],
    url: "projects/MacOS DockBar/index.html",
  },
  {
    title: "Magic Loading",
    description: "A magical loading animation with smooth effects.",
    image: "/projects/Magic Loading/cover.png",
    tags: ["HTML5", "CSS3", "JavaScript"],
    url: "projects/Magic Loading/index.html",
  },
  {
    title: "Modern Animated Menu Toggle Button",
    description: "A modern animated toggle button for mobile navigation menus.",
    image: "/projects/Modern Animated Menu Toggle Button/cover.png",
    tags: ["HTML5", "CSS3", "JavaScript"],
    url: "projects/Modern Animated Menu Toggle Button/index.html",
  },
  {
    title: "Movie Card",
    description: "A movie card layout showcasing poster, title, and details.",
    image: "/projects/Movie Card/cover.png",
    tags: ["HTML5", "CSS3", "JavaScript"],
    url: "projects/Movie Card/index.html",
  },
  {
    title: "NavBar",
    description: "A responsive navigation bar with stylish effects.",
    image: "/projects/NavBar/cover.png",
    tags: ["HTML5", "CSS3", "JavaScript"],
    url: "projects/NavBar/index.html",
  },
  {
    title: "NFT Product Card",
    description: "A trendy NFT product card with pricing and hover animations.",
    image: "/projects/NFT Product Card/cover.png",
    tags: ["HTML5", "CSS3", "JavaScript"],
    url: "projects/NFT Product Card/index.html",
  },
  {
    title: "Profile Card UI Design",
    description: "A clean UI profile card with social links and styling.",
    image: "/projects/Profile Card UI Design/cover.png",
    tags: ["HTML5", "CSS3", "JavaScript"],
    url: "projects/Profile Card UI Design/index.html",
  },
  {
    title: "Right Click Panel",
    description: "A custom right-click panel with animated interaction.",
    image: "/projects/Right Click Panel/cover.png",
    tags: ["HTML5", "CSS3", "JavaScript"],
    url: "projects/Right Click Panel/index.html",
  }
];


const uniqueTags = [...new Set(projects.flatMap((p) => p.tags))];

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesTags =
      selectedTags.length === 0 ||
      selectedTags.every((tag) => project.tags.includes(tag));
    return matchesSearch && matchesTags;
  });

  return (
    <div className="relative flex justify-center items-center flex-col h-auto w-full mt-20 px-2 sm:px-4">
      <Input
        className="w-[90%] max-w-[600px]"
        type="text"
        placeholder="Search here"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="mt-5 flex flex-wrap justify-start items-center gap-2 w-full max-w-[1300px]">
        {uniqueTags.map((tag) => (
          <Badge
            key={tag}
            onClick={() => toggleTag(tag)}
            className={`cursor-pointer PoppinBold bg-accent text-primary ${
              selectedTags.includes(tag) ? "bg-primary text-background" : ""
            }`}
          >
            {tag}
          </Badge>
        ))}
      </div>

      <div className="mt-10 w-full max-w-[1300px] projectContainer">
        {filteredProjects.map((project, index) => (
          <Card key={index} className="projectPin p-0 mb-3 bg-background">
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={300}
              className="w-full h-full object-cover m-0"
            />
            <div className="pt-2 px-2 md:px-4">
              <h2 className="text-sm sm:text-base md:text-lg font-semibold mb-1">{project.title}</h2>
              <p className="hidden md:block text-sm text-primary/50 mb-3">
                {project.description}
              </p>
              <div className="flex justify-start items-center w-full h-full flex-wrap gap-2 mb-3">
                {project.tags.map((tag, i) => (
                  <Badge key={i} className="PoppinMedium bg-accent text-primary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <Link
                href={project.url}
                className="PoppinMedium flex justify-center items-center space-x-1 text-sm border bg-primary text-background px-4 py-1 mb-2 md:mb-4 rounded-md"
                target="_blank"
              >
                <p>Explore</p>
                <ArrowUpRight size={20} />
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
