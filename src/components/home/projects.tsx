import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Project One",
    description: "This is a short description of project one.",
    image: "/images/project1.jpg",
    tags: ["React", "Next.js"],
    url: "https://example.com/project1",
  },
  {
    title: "Project Two",
    description: "This is a short description of project two.",
    image: "/images/project2.jpg",
    tags: ["Tailwind", "UI"],
    url: "https://example.com/project2",
  },
  // Add more projects as needed
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
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTags = selectedTags.length === 0 || selectedTags.every((tag) => project.tags.includes(tag));
    return matchesSearch && matchesTags;
  });

  return (
    <div className="relative flex justify-center items-center flex-col h-auto w-full mt-20 px-4">
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
            className={`cursor-pointer ${selectedTags.includes(tag) ? 'bg-primary text-white' : ''}`}
          >
            {tag}
          </Badge>
        ))}
      </div>

      <div className="mt-10 w-full max-w-[1300px] columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {filteredProjects.map((project, index) => (
          <div key={index} className="break-inside-avoid-column bg-white rounded-xl shadow-md overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={300}
              className="w-full object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-1">{project.title}</h2>
              <p className="text-sm text-gray-600 mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map((tag, i) => (
                  <Badge key={i}>{tag}</Badge>
                ))}
              </div>
              <Link
                href={project.url}
                className="text-sm text-blue-500 hover:underline"
                target="_blank"
              >
                Visit Project →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
