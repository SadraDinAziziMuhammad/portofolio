import React from 'react'
import { motion } from 'framer-motion';
import { MdOutlineEmail } from 'react-icons/md'
import { FaInstagram, FaLinkedin, FaGithub, FaTiktok } from 'react-icons/fa'

const Contact = () => {
  const contacts = [
    {
      platform: 'Instagram',
      link: 'https://www.instagram.com/sdradin?igsh=MnFiZWJiazhsNTF4',
      icon: <FaInstagram />,
      bg: 'bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600',
    },
    {
      platform: 'LinkedIn',
      link: 'https://www.linkedin.com/in/sadradinazizimuhammad/',
      icon: <FaLinkedin />,
      bg: 'bg-blue-700',
    },
    {
      platform: 'TikTok',
      link: 'https://www.tiktok.com/@leaderzi?_t=ZS-8wQM7rI8MB6&_r=1',
      icon: <FaTiktok />,
      bg: 'bg-black',
    },
    {
      platform: 'Github',
      link: 'https://github.com/SadraDinAziziMuhammad',
      icon: <FaGithub />,
      bg: 'bg-gray-800',
    },
  ]

  return (
    <motion.div className='max-w-5xl mx-auto p-6 bg-white text-gray-800'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{
        type: "spring",
        stiffness: 70,
        damping: 15
      }}>
      {/* Header */}
      <div>
        <h1 className='text-3xl font-semibold mb-2'>Contact</h1>
        <p className='mb-6 text-gray-600'>Let's get in touch</p>
        <hr className="mb-8 border-gray-300" />
      </div>

      {/* Gmail Section */}
      <div className='bg-red-100 p-6 rounded-lg mb-12 shadow-md'>
        <h2 className='text-2xl font-semibold mb-4 text-red-700'>Stay in Touch</h2>
        <div className='flex flex-col md:flex-row items-center justify-between'>
          <div className='mb-4 md:mb-0 md:w-3/4'>
            <p className='text-gray-700 mb-2'>
              You can email me for collaborations, questions, or networking.
            </p>
            <a
              href="mailto:sadraazizi1305@gmail.com"
              className='text-red-700 hover:underline font-medium'
            >
              Go to Gmail
            </a>
          </div>
          <div className='text-4xl text-red-700'>
            <MdOutlineEmail />
          </div>
        </div>
      </div>

      {/* Social Media Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6'>
        {contacts.map((item, index) => (
          <div
            key={index}
            className={`text-white p-6 rounded-lg shadow-md flex justify-between items-center hover:shadow-lg transition-shadow ${item.bg}`}
          >
            <div>
              <h3 className='text-lg font-semibold mb-2'>Stay in Touch</h3>
              <p className='mb-3'>
                Connect with me on {item.platform} for updates and networking!
              </p>
              <a
                href={item.link}
                target='_blank'
                rel='noopener noreferrer'
                className='text-xs font-light rounded-xl p-2 bg-gray-200 text-gray-800 bg-opacity-60'
              >
                Go to {item.platform}
              </a>
            </div>
            <div className='text-3xl ml-4'>
              {item.icon}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default Contact
