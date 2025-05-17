import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Countional",
    image: "/img/projects/Cloud Com.png",
    description: "Countional is a big assignment to complete cloud computing course",
    link: "https://drive.google.com/file/d/1nanp-QD5cMxCZtjvnPVbThbn_2tFDff-/view?usp=drive_link",
  },
  {
    title: "Portofolio",
    image: "/img/projects/Portofolio.png",
    description: "A personal portfolio project showcasing my skills and projects.",
    link: "https://drive.google.com/file/d/1MYyNbGfmNdjH7xlbLZZR1CQ_R3qZqXIV/view?usp=drive_link",
  },
  {
    title: "MentorKu",
    image: "/img/projects/Landing Page.png",
    description: "Landing page for a mentoring platform built with responsive layout.",
    link: "https://drive.google.com/file/d/1jwpiihqAHnZozSa_IaaPnjv0dN4fs1-m/view?usp=drive_link",
  },
];

const ProjectsCard = ({ title, image, description, link }) => (
  <div className="border border-gray-300 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
    <img
      src={image}
      alt={title}
      className="w-full object-cover"
    />
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 text-sm mb-4">{description || "No description available."}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
      >
        Detail
      </a>
    </div>
  </div>
);

const Projects = () => {
  return (
    <motion.div className="max-w-5xl mx-auto p-6 bg-white text-gray-800"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{
        type: "spring",
        stiffness: 70,
        damping: 15
      }}>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Projects</h1>
        <p className="text-gray-600">Several projects that I have worked on, both private and open source.</p>
        <hr className="mt-4 border-gray-300" />
      </div>

      <section className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectsCard key={index} {...project} />
        ))}
      </section>
    </motion.div>
  );
};

export default Projects;