import React from 'react'
import { motion } from 'framer-motion';

const certificates = [
  {
    title: "Intern Paid",
    issuer: "PT LRT Jakarta",
    date: "July, 2024",
    image: "/img/achievements/Seritikat Magang.png",
    alt: "Seritifikat Intern"
  },
  {
    title: "Basic React JavaScript",
    issuer: "BuildWithAngga",
    date: "January, 2024",
    image: "/img/achievements/Sertifikat ReactJS.png",
    alt: "Seritifikat Basic React JavaScript"
  },
  {
    title: "Fullstack Web Developer",
    issuer: "Skilvul",
    date: "December, 2023",
    image: "/img/achievements/Sertifikat MSIB FS.jpg",
    alt: "Sertifikat MSIB"
  },
  {
    title: "Basic JavaScript",
    issuer: "Skilvul",
    date: "September, 2023",
    image: "/img/achievements/Serifikat Skilvul - JavaScript Dasar.png",
    alt: "Seritifikat Basic JavaScript"
  },
  {
    title: "Basic CSS",
    issuer: "Skilvul",
    date: "September, 2023",
    image: "/img/achievements/Sertifikat Skilvul - CSS Dasar.png",
    alt: "Seritifikat Basic CSS"
  },
  {
    title: "Basic HTML5",
    issuer: "Skilvul",
    date: "September, 2023",
    image: "/img/achievements/Sertifikat Skilvul - HTML Dasar.png",
    alt: "Seritifikat Basic HTML5"
  },
  {
    title: "Intro to Coding",
    issuer: "Skilvul",
    date: "September, 2023",
    image: "/img/achievements/Sertifikat Skilvul - Intro to Coding.png",
    alt: "Seritifikat Intro to Coding"
  },
  {
    title: "Program Kreatifitas Mahasiswa",
    issuer: "Unissula",
    date: "May, 2023",
    image: "/img/achievements/Sertifikat PKM KC.jpg",
    alt: "Sertifikat PKM-KC"
  },
  {
    title: "Basic HTML5",
    issuer: "BuildWithAngga",
    date: "September, 2022",
    image: "/img/achievements/Sertifikat HTML5 Dasar.png",
    alt: "Seritifikat Basic HTML5"
  },
]

const CertificateCard = ({ title, issuer, date, image, alt }) => (
  <div className="border border-gray-300 rounded-xl p-4 shadow-sm hover:shadow-md transition duration-300 bg-white">
    <div className="aspect-[4/3] overflow-hidden rounded-md mb-4">
      <img src={image} alt={alt} className="w-full h-full object-cover" />
    </div>
    <h2 className="text-lg font-semibold">{title}</h2>
    <p className="text-sm text-gray-600">{issuer}</p>
    <p className="text-sm text-gray-500">{date}</p>
  </div>
)

const Achievements = () => {
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
        <h1 className="text-3xl font-bold mb-2">Achievements</h1>
        <p className="text-gray-600">
          A collection of certificates and badges that I have earned throughout my professional journey.
        </p>
        <hr className="mt-4 border-gray-300" />
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <CertificateCard key={index} {...cert} />
        ))}
      </section>
    </motion.div>
  )
}

export default Achievements
