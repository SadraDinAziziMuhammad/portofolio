
const Career = () => {
    // Data Career
    const careerData = [
        {
            img: '/img/about/LOGO MUDA GROUP.png',
            title: 'Web Developer',
            company: 'PT MudaGroup',
            location: 'Jakarta, Indonesia',
            duration: 'July, 2024 - Present',
            type: 'Freelance',
            workType: 'Remote',
        },
        {
            img: '/img/about/LRTJakarta.png',
            title: 'IT Support Intern',
            company: 'PT LRT Jakarta',
            location: 'Jakarta, Indonesia',
            duration: 'Maret, 2024 - July, 2024',
            type: 'Intern',
            workType: 'Onsite',
        },
    ];

    return (
        <div>
            {careerData.map((career, index) => (
                <div
                    key={index}
                    className='flex bg-gray-50 border border-gray-300 rounded-xl p-5 gap-5 items-center mb-4'
                >
                    {career.img && (
                        <img
                            src={career.img}
                            alt={career.title}
                            className='w-24 md:w-32 object-contain'
                        />
                    )}
                    <div className='flex-1 flex flex-col justify-between'>
                        <div>
                            <h3 className='text-xl font-semibold'>{career.title}</h3>
                            <ul className='text-gray-600 text-sm flex flex-wrap gap-4'>
                                <li>{career.company}</li>
                                <li>{career.location}</li>
                            </ul>
                            <ul className='text-gray-600 text-sm flex flex-wrap gap-4 mt-1'>
                                <li>{career.duration}</li>
                                <li>{career.type}</li>
                                <li>{career.workType}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Career
