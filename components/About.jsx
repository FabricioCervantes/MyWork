import React from "react";
import Image from "next/image";
import { FaRegCircle } from "react-icons/fa";

const About = () => {
  return (
    <div className="flex justify-center">
      <div className="grid md:grid-cols-2 mt-5 gap-2 bg-slate-950 p-5">
        <div>
          <h2 className="text-2xl font-bold text-left">Background</h2>
          <p className="text-left mt-2">
            Aspiring web developer passionate about creating user-centric
            solutions. Proficient in front-end technologies, eager to contribute
            innovative ideas.
          </p>
        </div>

        <div className="flex flex-col">
          <div>
            <h2 className="text-2xl font-bold text-left">Education</h2>
            <div className="text-left mt-2">
              <h3 className="flex gap-2 items-center">Software Eengineer</h3>
              <p className="text-gray-500 ml-6">
                Instituto Tecnológico de Morelia
              </p>
              <p className="text-gray-500 ml-6">2020-2024</p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-left mt-5">Skills</h2>
            <div className="mt-2 grid grid-cols-5 gap-5 place-items-center">
              <Image
                alt="Programming Language"
                className="object-cover h-16 w-auto"
                src="/assets/skills/html-5.svg"
                width="0"
                height="0"
                sizes="100vw"
              />
              <Image
                alt="Programming Language"
                className="object-cover h-16 w-auto"
                src="/assets/skills/css-3.svg"
                width="0"
                height="0"
                sizes="100vw"
              />
              <Image
                alt="Programming Language"
                className="object-cover h-12 w-auto"
                src="/assets/skills/tailwindcss-icon.svg"
                width="0"
                height="0"
                sizes="100vw"
              />
              <Image
                alt="Programming Language"
                className="object-cover h-12 w-auto"
                src="/assets/skills/javascript.svg"
                width="0"
                height="0"
                sizes="100vw"
              />
              <Image
                alt="Programming Language"
                className="object-cover h-12 w-auto"
                src="/assets/skills/react.svg"
                width="0"
                height="0"
                sizes="100vw"
              />
              <Image
                alt="Programming Language"
                className="object-cover h-10 w-auto"
                src="/assets/skills/php.svg"
                width="0"
                height="0"
                sizes="100vw"
              />
              <Image
                alt="Programming Language"
                className="object-cover h-12 w-auto"
                src="/assets/skills/laravel.svg"
                width="0"
                height="0"
                sizes="100vw"
              />
              <Image
                alt="Programming Language"
                className="object-cover h-12 w-auto"
                src="/assets/skills/mongodb-icon.svg"
                width="0"
                height="0"
                sizes="100vw"
              />
              <Image
                alt="Programming Language"
                className="object-cover h-12 w-auto"
                src="/assets/skills/postgresql.svg"
                width="0"
                height="0"
                sizes="100vw"
              />
              <Image
                alt="Programming Language"
                className="object-cover h-12 w-auto"
                src="/assets/skills/git-icon.svg"
                width="0"
                height="0"
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
