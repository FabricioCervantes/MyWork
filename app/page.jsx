import React from "react";
import ProjectCard from "@components/Card";
import About from "@components/About";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="text-4xl font-bold">Fabricio Cervantes</h1>
        <p className="text-7xl mt-2 text-red-500">Software Developer</p>

        <p className="text-2xl mt-6">
          I design and code beautifully simple things, and I love what I do.
        </p>
        <img className="h-64" src="/assets/profile.png" alt="profile picture" />
        <div className="mt-10 flex gap-5">
          <Link href="https://www.linkedin.com/in/fabriciocervantes/">
            <BsLinkedin className="text-4xl hover:text-red-500 transition-all" />
          </Link>
          <Link href="https://github.com/FabricioCervantes">
            <BsGithub className="text-4xl hover:text-red-500 transition-all" />
          </Link>
        </div>
        <div>
          <Link href="mailto">
            <button className="bg-red-500 text-white px-5 py-2 mt-10 rounded-md hover:bg-red-600 transition-all">
              Download CV
            </button>
          </Link>
        </div>
      </div>
      <div>
        <h1 className="text-4xl font-bold">Projects</h1>
        <div className="grid md:grid-cols-3 gap-5 mt-10">
          <ProjectCard
            name="DEPI"
            description="ITM project fosters collaboration via secure, hosted platform for sharing content, simplifying authentication, and management."
            picture="/assets/projects/DEPI.jpg"
            link="https://laboratorio-nacional.redes-investigacion-tecnm.mx/"
          />
          <ProjectCard
            name="MovieHub"
            description="User-focused app provides detailed movie/series info, personalized lists. Next.js, MongoDB, Google login enhance experience."
            picture="/assets/projects/moviehub.jpg"
            gitLink="https://github.com/FabricioCervantes/moviehub"
            link="https://moviehub-sigma.vercel.app/"
          />
          <ProjectCard
            name="ByteTech"
            description="Dynamic tech blog lets users explore, contribute articles. Next.js, MongoDB, Google login ensure seamless, secure experience."
            picture="/assets/projects/bytetech.jpg"
            gitLink="https://github.com/FabricioCervantes/bytetech"
            link="https://bytetechblog.netlify.app/"
          />
        </div>
      </div>
      <div>
        <h1 className="text-4xl font-bold mt-20">About Me</h1>
        <About />
      </div>
      <div>
        <h1 className="text-4xl font-bold mt-20">Contact</h1>
      </div>
    </>
  );
};

export default Home;
