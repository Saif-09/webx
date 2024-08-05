import Image from 'next/image';
import React from 'react';
import WhatWeDoStars from '@/../public/WhatWeDoStars.svg';

interface Service {
    title: string;
    description: string;
    tags: string[];
}

const services: Service[] = [
    {
        title: 'Design',
        description:
            'We design the entire thing. Just sit back, relax and get ready for lift-off. Full digital experiences, clear messaging, and plain common sense.',
        tags: ['UI/UX Design', 'App Design', 'Website Design'],
    },
    {
        title: 'Build',
        description:
            'We design the entire thing. Just sit back, relax and get ready for lift-off. Full digital experiences, clear messaging, and plain common sense.',
        tags: ['UI/UX Design', 'App Develop', 'Website Develop'],
    },
];

const WhatWeDo: React.FC = () => {
    return (
        <div className="w-full py-16 text-center bg-white relative">
            <Image
                    src={WhatWeDoStars}
                    alt="rightStars"
                    className="h-auto w-[10.6vw] absolute right-10"
                />
            <h2 className="text-sm font-medium text-gray-500 tracking-widest mb-2">
                CATEGORY
            </h2>
            <h1 className="text-2xl md:text-4xl font-extrabold md:mb-12 text-gray-900">
                What we do?
            </h1>

            <div className="flex flex-col md:flex-row h-auto md:h-screen">
                {/* Conditional rendering to hide on mobile */}
                <div className="hidden md:block w-[45.48vw] h-screen bg-white"></div>

                <div className="w-full md:w-[54.52vw] flex flex-col">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="w-full pb-12 relative"
                        >
                            {/* Absolute Element */}
                            {index === 0 && (
                                <div
                                    className="absolute w-[150px] h-[150px] bg-[#760A16] rounded-br-[20px] rounded-tl-[30px] bottom-4 left-0 z-[1]"
                                ></div>
                            )}

                            {/* Main Content */}
                            <div
                                className="mx-auto md:ml-12 w-[90%] md:w-[41.87vw] h-auto bg-white flex flex-col justify-center items-center py-12 px-4 md:px-8 rounded-3xl relative z-10"
                                style={{
                                    boxShadow: `0px 1.85px 3.15px 0px #00000001, 0px 8.15px 6.52px 0px #00000002, 0px 20px 13px 0px #00000003, 0px 38.52px 25.48px 0px #00000003, 0px 64.81px 46.85px 0px #00000004, 0px 100px 80px 0px #00000005`,
                                }}
                            >
                                <h3 className="text-[#040411] text-3xl md:text-[5.25rem] leading-tight md:leading-[6.375rem] mb-3">
                                    {service.title}
                                </h3>
                                <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-3">
                                    {service.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="
                                                flex 
                                                justify-center 
                                                items-center 
                                                px-2 md:px-4 py-1 md:py-2 
                                                bg-[#040411] 
                                                rounded-lg 
                                                font-montserrat 
                                                font-semibold 
                                                text-sm md:text-base
                                                leading-5 
                                                text-white 
                                                whitespace-nowrap
                                                overflow-hidden
                                                max-w-full
                                            "
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <p
                                    className="
                                        text-center 
                                        font-montserrat 
                                        font-medium 
                                        text-sm md:text-base
                                        leading-5 
                                        text-[#760A16] 
                                        
                                    "
                                >
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WhatWeDo;