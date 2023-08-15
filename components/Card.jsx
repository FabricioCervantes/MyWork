import React from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
import Link from "next/link";

const ProjectCard = ({ name, description, picture, tags, gitLink, link }) => {
  return (
    <div className="bg-slate-950 rounded-md gap-5">
      <Image
        alt="Card background"
        className="object-cover w-auto h-fit"
        src={picture}
        width="0"
        height="0"
        sizes="100vw"
      />
      <div className="flex flex-col gap-5 p-2 mt-2">
        <h1 className="text-4xl font-bold text-red-500">{name}</h1>
        <p className="text-md text-left whitespace-pre-line">{description}</p>
        <div className="flex gap-5">
          {link && (
            <Link href={link}>
              <TfiWorld className="text-2xl hover:text-red-500 transition-all" />
            </Link>
          )}
          {gitLink && (
            <Link href={gitLink}>
              <FaGithub className="text-2xl hover:text-red-500 transition-all" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
