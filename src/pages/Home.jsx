import React from 'react';
import { motion } from 'framer-motion';
import { MdHandshake } from 'react-icons/md';
import {
    SiTailwindcss, SiReact, SiNpm, SiHtml5, SiCss3, SiVite,
    SiMysql, SiFigma, SiExpress, SiStrapi, SiNodedotjs, SiGit, SiGithub, SiLaragon,
} from 'react-icons/si';

export default function Home() {
    const skills = [
        { name: 'Figma', icon: <SiFigma className="text-pink-500" /> },
        { name: 'HTML', icon: <SiHtml5 className="text-orange-600" /> },
        { name: 'CSS', icon: <SiCss3 className="text-blue-500" /> },
        { name: 'Tailwind', icon: <SiTailwindcss className="text-sky-400" /> },
        { name: 'React.js', icon: <SiReact className="text-sky-500" /> },
        { name: 'Vite.js', icon: <SiVite className="text-purple-500" /> },
        { name: 'MySQL', icon: <SiMysql className="text-blue-600" /> },
        { name: 'Laragon', icon: <SiLaragon className="text-blue-500" /> },
        { name: 'Express.js', icon: <SiExpress className="text-gray-700" /> },
        { name: 'Strapi', icon: <SiStrapi className="text-indigo-500" /> },
        { name: 'Node.js', icon: <SiNodedotjs className="text-green-600" /> },
        { name: 'Npm', icon: <SiNpm className="text-red-600" /> },
        { name: 'Git', icon: <SiGit className="text-orange-500" /> },
        { name: 'Github', icon: <SiGithub className="text-black" /> },
    ];

    return (
        <motion.div
            className="max-w-5xl mx-auto p-6 bg-white text-gray-800"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{
                type: "spring",
                stiffness: 70,
                damping: 15
            }}
        >
            <h1 className="text-3xl font-bold mb-2">Hi, I'm Sadra Din Azizi Muhammad</h1>

            <p className="mb-4 text-gray-700 leading-relaxed">
                Ungraduate Informatic Engineering | Full Stack Web Development Enthusiast | SIB Batch 5 at Skilvul | Internship at PT LRT Jakarta</p>
            <a href='/img/CV Sadra Din Azizi Muhammad.pdf'
                download
                className="mb-4 px-5 py-1 rounded-full border border-gray-30 font-light items-center hover:bg-gray-100 transition">
                Download CV
            </a>
            <hr className="mb-8 mt-4 border-gray-300" />

            {/* Skills */}
            <section>
                <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    <code className="text-gray-700">{'</>'}</code> Skills
                </h2>
                <p className="text-gray-600 mb-4">My professional skills.</p>

                <div className="flex flex-wrap gap-3">
                    {skills.map((skill) => (
                        <div
                            key={skill.name}
                            className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 bg-gray-50 hover:bg-gray-100 shadow-sm transition"
                        >
                            <span className="text-xl">{skill.icon}</span>
                            <span className="text-sm font-medium text-gray-800">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </section>

            <hr className="my-10 border-gray-300" />

            {/* Service */}
            <section className="my-10">
                <div className="mb-4 flex items-center gap-2 text-xl font-semibold text-gray-800">
                    <MdHandshake className="text-2xl text-indigo-600" />
                    <h2>Service</h2>
                </div>

                <p className="text-gray-600 mb-4 max-w-2xl">
                    I work as a freelancer to develop exceptional websites for brands, companies, institutions, and startups,
                    focusing on strategic web solutions.
                </p>

                <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-6 rounded-xl shadow max-w-xl">
                    <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                        <span>💼</span> Let's work together!
                    </h3>
                    <p className="text-gray-700 mb-4">
                        I'm open for freelance projects, feel free to email me to see how we can collaborate.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg transition"
                    >
                        Contact me
                    </a>
                </div>
            </section>
        </motion.div>
    );
}