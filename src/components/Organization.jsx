import React from 'react'

const Organization = () => {
    // Data Organization
    const organizationData = [
        {
            img: '/img/about/LOGO2.png',
            title: 'Staff of Research and Technology',
            org: 'Himpunan Mahasiswa Teknik Informatika',
            duration: 'November 2023 - December 2024',
            location: 'Semarang, Indonesia'
        }
    ];
    return (
        <div>
            {organizationData.map((org, index) => (
                <div key={index} className='flex bg-gray-50 border border-gray-300 rounded-xl p-5 gap-5 items-center mb-4'>
                    <img src={org.img} alt={org.title} className='w-24 md:w-32 object-contain' />
                    <div>
                        <h3 className='text-xl font-semibold'>{org.title}</h3>
                        <ul className='text-gray-600 text-sm flex flex-wrap gap-4'>
                            <li>{org.org}</li>
                            <li>{org.location}</li>
                        </ul>
                        <ul className='text-gray-600 text-sm flex flex-wrap gap-4 mt-1'>
                            <li>{org.duration}</li>
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Organization
