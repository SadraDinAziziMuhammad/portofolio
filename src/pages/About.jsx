import { GrOrganization } from 'react-icons/gr';
import { motion } from 'framer-motion';
import { MdOutlineSchool, MdOutlineWorkOutline } from 'react-icons/md';
import Career from '../components/Career';
import Education from '../components/Education';
import Organization from '../components/Organization';

const About = () => {
  return (
    <motion.div className='max-w-5xl mx-auto p-6 bg-white'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{
        type: "spring",
        stiffness: 70,
        damping: 15
      }}>
      {/* About Section */}
      <div>
        <h1 className='text-3xl font-bold mb-2'>About</h1>
        <p className='text-gray-600 mb-6'>A short story of me</p>
        <hr className="mb-8 border-gray-300" />

        <p className='mb-4 text-justify text-gray-700'>
          I am an undergraduate student in Informatics Engineering at Universitas Islam Sultan Agung (UNISSULA) with a strong interest in technology development, particularly in Fullstack Web Development. I participated in the Kampus Merdeka program, which enriched me with practical experience, industry insights, and enhanced both my technical and soft skills. I am proficient in modern technologies such as React.js, Node.js, and SQL database management, focusing on creating effective and efficient technological solutions.</p>
        <p className='mb-4 text-justify text-gray-700'>
          Additionally, I have internship experience at PT LRT Jakarta as part of the developer team and IT support, where I was actively involved in system development, technical problem-solving, and IT infrastructure management. I am committed to continuous learning and contributing positively through innovative technology implementation.</p>
      </div>

      <section className='mt-12'>
        <div className='flex items-center gap-3 text-xl text-gray-800 mb-2'>
          <MdOutlineWorkOutline />
          <h2 className='font-semibold'>Career</h2>
        </div>
        <p className='text-gray-600 mb-6'>My professional career journey.</p>
        <Career />
      </section>

      {/* Education Section */}
      <section className='mt-12'>
        <div className='flex items-center gap-3 text-xl text-gray-800 mb-2'>
          <MdOutlineSchool />
          <h2 className='font-semibold'>Education</h2>
        </div>
        <p className='text-gray-600 mb-6'>My educational journey.</p>
        <Education />
      </section>

      {/* Organization Section */}
      <section className='mt-12'>
        <div className='flex items-center gap-3 text-xl text-gray-800 mb-2'>
          <GrOrganization />
          <h2 className='font-semibold'>Organization</h2>
        </div>
        <p className='text-gray-600 mb-6'>My organization journey.</p>
        <Organization />
      </section>
    </motion.div>
  );
};

export default About;
