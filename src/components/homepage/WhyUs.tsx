"use client";

import React, { useState } from 'react';
import Image from 'next/image';

// Define SVG paths
const experiencedTeamSvg = '/ExperiencedTeam.svg';
const cleanCodeSvg = '/CleanCode.svg';
const minimalistSvg = '/MinimalistDesign.svg';
const transparencySvg = '/Transparency.svg';
const whyUsBlur = '/WhyUsBlur.svg'
const whyUsBG = '/WhyUsBG.svg'

const features = [
    {
        title: 'Experienced Team',
        icon: experiencedTeamSvg,
        description:
            'Our experienced team is composed of industry experts with a proven track record of delivering exceptional results.',
    },
    {
        title: 'Clean Code',
        icon: cleanCodeSvg,
        description:
            'We pride ourselves on writing clean, maintainable code that adheres to industry standards and best practices.',
    },
    {
        title: 'Minimalist Design',
        icon: minimalistSvg,
        description:
            'Our design philosophy is centered around minimalism, ensuring that our products are both functional and aesthetically pleasing.',
    },
    {
        title: 'Transparency',
        icon: transparencySvg,
        description:
            'We maintain full transparency with our clients, keeping them informed and involved throughout the entire process.',
    },
];

type Feature = {
    title: string;
    icon: string | JSX.Element;
    description: string;
};

const WhyUs: React.FC = () => {
    // Track the selected feature with React's useState hook
    const [selectedFeature, setSelectedFeature] = useState<Feature>(features[0]);

    return (
        <section className="py-16 md:py-16 bg-white md:px-20 px-0">
            <div className="container mx-auto px-4 relative">
                <h2 className="text-xs font-semibold text-gray-500 tracking-widest mb-2 text-center md:text-left">Team</h2>
                <h2 className="text-2xl md:text-4xl font-extrabold md:mb-12 text-gray-900 text-center md:text-left mb-6">Why Us</h2>
                <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 gap-80 ">
                    {/* Left side: feature list */}
                    <div className="flex flex-col space-y-6 md:w-[28.6vw] z-[4]">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className={`flex items-start space-x-4 cursor-pointer ${selectedFeature.title === feature.title
                                    ? ' md:border-b-2 border-[#4C1E4F]'
                                    : 'border-b-0 border-[#9f76a2]'
                                    } p-4 rounded-xl transition duration-200`}
                                onClick={() => setSelectedFeature(feature)}
                            >
                                <div className="flex items-center justify-center md:px-3 md:py-3 bg-[#F4EBE1] md:rounded-2xl px-3 py-3 rounded-xl">
                                    {typeof feature.icon === 'string' ? (
                                        <Image
                                            src={feature.icon}
                                            alt={`${feature.title} icon`}
                                            width={100}
                                            height={100}
                                        />
                                    ) : (
                                        feature.icon
                                    )}
                                </div>
                                <div>
                                    <h3 className="text-sm md:text-[1.25rem] font-bold text-[#040411]">
                                        {feature.title}
                                    </h3>
                                    <p className="text-[#AA9BAB] text-xs md:text-[0.875rem] font-normal">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='md:hidden absolute left-0 -bottom-44 z-[3]'>
                        {typeof whyUsBlur === 'string' ? (
                            <Image
                                src={whyUsBG}
                                alt={`${'blur'} icon`}
                                width={450}
                                height={550}
                            />
                        ) : (
                            selectedFeature.icon
                        )}
                    </div>
                    <div className='hidden md:block absolute -right-10 bottom-[18rem]'>
                        {typeof whyUsBlur === 'string' ? (
                            <Image
                                src={whyUsBlur}
                                alt={`${'blur'} icon`}
                                width={357}
                                height={367}
                            />
                        ) : (
                            selectedFeature.icon
                        )}
                    </div>
                    {/* Right side: selected feature details */}

                    <div className="hidden md:flex flex-col relative bg-white shadow-xl rounded-xl md:w-[25.69vw] flex-shrink-0 overflow-hidden max-h-[25rem] px-6 py-8" style={{ boxShadow: '0px 20px 50px rgba(0, 0, 0, 0.15)' }}>
                        <div className="flex items-center justify-center  rounded-xl relative z-10 mb-7">
                            <div className="w-40 h-40">
                                {typeof selectedFeature.icon === 'string' ? (
                                    <Image
                                        src={selectedFeature.icon}
                                        alt={`${selectedFeature.title} icon`}
                                        width={150}
                                        height={150}
                                    />
                                ) : (
                                    selectedFeature.icon
                                )}
                            </div>
                        </div>
                        <h3 className="text-[1.25rem] font-bold text-[#080809] text-center">
                            {selectedFeature.title}
                        </h3>
                        <p className="text-[#AA9BAB] text-[0.875rem] font-medium text-center">{selectedFeature.description}</p>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyUs;