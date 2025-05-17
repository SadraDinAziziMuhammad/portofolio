import React from 'react'

const Education = () => {
    // Data Education
    const educationData = [
        {
            img: '/img/about/Unissula.png',
            title: 'Sultan Agung Islamic University',
            degree: 'Bachelor Degree',
            major: 'Informatic Engineering',
            duration: '2021 - 2025',
            location: 'Semarang, Indonesia'
        },
        {
            img: 'img/about/Skilvul.png',
            title: 'Skilvul',
            degree: 'None',
            major: 'Fullstack Web Development',
            duration: 'July, 2023 - December, 2023',
            location: 'Jakarta, Indonesia'
        },
    ];
    return (
        <div>
            {educationData.map((edu, index) => (
                <div key={index} className='flex bg-gray-50 border border-gray-300 rounded-xl p-5 gap-5 items-center mb-4'>
                    <img src={edu.img} alt={edu.title} className='w-24 md:w-32 object-contain' />
                    <div>
                        <h3 className='text-xl font-semibold'>{edu.title}</h3>
                        <ul className='text-gray-600 text-sm flex flex-wrap gap-4'>
                            <li>{edu.degree}</li>
                            <li>{edu.major}</li>
                        </ul>
                        <ul className='text-gray-600 text-sm flex flex-wrap gap-4 mt-1'>
                            <li>{edu.duration}</li>
                            <li>{edu.location}</li>
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Education
