import Link from "next/link";
import React from "react";
import { BsGithub } from "react-icons/bs";

interface ProjectItemProps {
  title: string;
  tech: string;
  desc: string;
  link: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  tech,
  desc,
  link,
}) => {
  return (
    <div className="border-l-4 border-project pl-4">
      <h4 className="font-semibold">{title}</h4>
      <p className="text-sm text-muted-foreground mb-1 italic">Tech: {tech}</p>
      <p className="text-sm mb-2 leading-snug">{desc}</p>
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex gap-2 justify-start items-center text-project text-sm font-medium hover:underline"
      >
        <BsGithub className=" w-4 h-4" />
        View Project →
      </Link>
    </div>
  );
};

export default ProjectItem;
