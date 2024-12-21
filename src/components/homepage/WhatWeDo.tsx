'use client';
import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';
import WhatWeDoStars from '@/../public/WhatWeDoStars.svg';
import BuildImage from '@/../public/images/BuildImage.png';
import DesignImage from '@/../public/images/DesignImage.png';
import BusinessImage from '@/../public/images/BusinessImage.png';

interface ImageDimensions {
    width: number;
    height: number;
}

interface Section {
    title: string;
    subtitle: string;
    description: string;
    image: any;
    imageDimensions: ImageDimensions;
}

const WhatWeDo: React.FC = () => {
    const [hoveredSection, setHoveredSection] = useState<string | null>(null);
    const [imagePosition, setImagePosition] = useState({ x: 0, y: 0, tiltX: 0, tiltY: 0, rotation: 0 });
    const sectionRefs = useRef<(HTMLElement | null)[]>([]);
    const prevMousePos = useRef({ x: 0, y: 0 });

    const sections: Section[] = [
        {
            title: 'Build',
            subtitle: 'Android and iOS Apps | Websites',
            description: 'We build super optimized and good looking apps in very efficient way with our strong experienced team',
            image: BuildImage,
            imageDimensions: { width: 500, height: 500 },
        },
        {
            title: 'Design',
            subtitle: 'UI/UX Design | Graphic Design',
            description: 'We build super optimized and good looking apps in very efficient way with our strong experienced team',
            image: DesignImage,
            imageDimensions: { width: 500, height: 500 },
        },
        {
            title: 'Business Development',
            subtitle: 'Product Management | Digital Marketing',
            description: 'We build super optimized and good looking apps in very efficient way with our strong experienced team',
            image: BusinessImage,
            imageDimensions: { width: 400, height: 400 },
        },
    ];

    const handleMouseMove = (event: React.MouseEvent<HTMLElement>, index: number) => {
        const section = sectionRefs.current[index];
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const x = event.clientX - rect.left - sections[index].imageDimensions.width / 2;
        const y = event.clientY - rect.top - sections[index].imageDimensions.height / 2;

        const maxX = rect.width - sections[index].imageDimensions.width;
        const maxY = rect.height - sections[index].imageDimensions.height;
        const constrainedX = Math.max(0, Math.min(x, maxX));
        const constrainedY = Math.max(0, Math.min(y, maxY));

        const tiltX = 0; 
        const tiltY = 0; 

        // Calculate tilt based on mouse position relative to the center of the section
        // const tiltX = ((event.clientX - rect.left) / rect.width - 0.5) * 20; // Max 10 degree tilt
        // const tiltY = ((event.clientY - rect.top) / rect.height - 0.5) * -20; // Max 10 degree tilt, inverted for natural feel

        const dx = event.clientX - prevMousePos.current.x;
        const dy = event.clientY - prevMousePos.current.y;
        const rotation = Math.atan2(dy, dx) * (50 / Math.PI);

        prevMousePos.current = { x: event.clientX, y: event.clientY };

        setImagePosition({ x: constrainedX, y: constrainedY, tiltX, tiltY, rotation });
    };

    const handleMouseEnter = (title: string) => {
        setHoveredSection(title);
    };

    const handleMouseLeave = () => {
        setHoveredSection(null);
        setImagePosition(prev => ({ ...prev, tiltX: 0, tiltY: 0, rotation: 0 })); 
    };

    return (
        <div className="w-full py-16 text-center bg-white relative md:px-24 px-5 overflow-hidden">
            <Image
                src={WhatWeDoStars}
                alt="rightStars"
                className="h-auto w-[10.6vw] absolute right-10"
            />
            <h2 className="text-xs md:text-sm font-medium text-gray-500 tracking-widest mb-2 text-center">
                CATEGORY
            </h2>
            <h1 className="text-2xl md:text-4xl font-extrabold md:mb-12 text-gray-900 text-center mb-7">
                What we do?
            </h1>

            <div className="flex flex-col h-auto md:h-screen gap-16 md:gap-36">
                {sections.map((section, index) => (
                    <section
                        key={index}
                        ref={el => {
                            sectionRefs.current[index] = el;
                            return undefined;
                        }}
                        className="flex flex-col text-left relative"
                        onMouseEnter={() => handleMouseEnter(section.title)}
                        onMouseLeave={handleMouseLeave}
                        onMouseMove={(e) => handleMouseMove(e, index)}
                        style={{
                            zIndex: hoveredSection === section.title ? 10 : 1, // Assign z-index dynamically
                            transition: 'z-index 0.3s ease',
                        }}
                    >
                        <h3 className="md:text-[5.625rem] text-[1.75rem] font-extralight text-[#14183E] md:leading-[5.625rem] md:mb-[1rem] -ml-1 relative z-10">
                            {section.title}
                        </h3>
                        <h4 className="text-base md:text-[2rem] font-medium md:leading-[2rem] md:mb-2 relative z-10">
                            {section.subtitle}
                        </h4>
                        <h5 className="text-xs md:text-xl font-medium relative z-10">
                            {section.description}
                        </h5>
                        <div
                            className={`absolute z-10 transition-opacity duration-500 ease-in-out ${hoveredSection === section.title ? 'opacity-100' : 'opacity-0'
                                }`}
                            style={{
                                width: `${section.imageDimensions.width}px`,
                                height: `${section.imageDimensions.height}px`,
                                left: `${imagePosition.x}px`,
                                top: `${imagePosition.y}px`,
                                transform: `
                                    perspective(1000px)
                                    rotateY(${imagePosition.tiltX}deg)
                                    rotateX(${imagePosition.tiltY}deg)
                                    rotate(${imagePosition.rotation * 0.3}deg)
                                `,
                                transition: 'left 0.3s ease-out, top 0.3s ease-out, transform 0.3s ease-out',
                            }}
                        >
                            <Image
                                src={section.image}
                                alt={`${section.title} Image`}
                                className="object-cover w-[250px] h-[250px] md:w-[500px] md:h-[500px]" 
                            />
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
};

export default WhatWeDo;