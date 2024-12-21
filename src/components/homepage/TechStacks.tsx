"use client"
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Info } from 'lucide-react';
import { FaReact, FaWordpress, FaFigma, FaNode, FaMobileAlt, FaDatabase } from 'react-icons/fa'; // Import icons as needed
import { SiNextdotjs, SiMysql, SiMongodb, SiGraphql, SiRedux, SiFirebase, SiSwift, SiKotlin } from 'react-icons/si'; // Add other icons

const techStacks = [
    {
        title: "Website Building",
        technologies: [
            { name: "React.js", icon: <FaReact style={{ color: "#61DBFB" }} />, bgColor: "#E0F7FA" },
            { name: "Next.js", icon: <SiNextdotjs style={{ color: "#000000" }} />, bgColor: "#E8EAF6" },
            { name: "GraphQL", icon: <SiGraphql style={{ color: "#E10098" }} />, bgColor: "#F3E5F5" },
            { name: "MySQL", icon: <SiMysql style={{ color: "#4479A1" }} />, bgColor: "#E0F2F1" },
            { name: "Express.js", icon: <FaNode style={{ color: "#68A063" }} />, bgColor: "#E8F5E9" },
            { name: "Wordpress", icon: <FaWordpress style={{ color: "#21759B" }} />, bgColor: "#E3F2FD" },
            { name: "MongoDB", icon: <SiMongodb style={{ color: "#4DB33D" }} />, bgColor: "#F1F8E9" },
            { name: "Figma", icon: <FaFigma style={{ color: "#F24E1E" }} />, bgColor: "#FFF3E0" }
        ]
    },
    {
        title: "Mobile App Development",
        technologies: [
            { name: "React Native", icon: <FaMobileAlt style={{ color: "#61DBFB" }} />, bgColor: "#E0F7FA" },
            { name: "Flutter", icon: <FaMobileAlt style={{ color: "#02569B" }} />, bgColor: "#E3F2FD" },
            { name: "Swift", icon: <SiSwift style={{ color: "#FA7343" }} />, bgColor: "#FFE0B2" },
            { name: "Kotlin", icon: <SiKotlin style={{ color: "#0095D5" }} />, bgColor: "#B3E5FC" },
            { name: "Firebase", icon: <SiFirebase style={{ color: "#FFCA28" }} />, bgColor: "#FFFDE7" },
            { name: "Redux", icon: <SiRedux style={{ color: "#764ABC" }} />, bgColor: "#F3E5F5" },
            { name: "Expo", icon: <FaMobileAlt style={{ color: "#000020" }} />, bgColor: "#F5F5F5" },
            { name: "Android Studio", icon: <FaMobileAlt style={{ color: "#3DDC84" }} />, bgColor: "#E8F5E9" }
        ]
    
    },
    {
        title: "Designing",
        technologies: [
            { name: "Photoshop", icon: <FaFigma /> },
            { name: "Illustrator", icon: <FaFigma /> },
            { name: "Figma", icon: <FaFigma /> },
            { name: "Sketch", icon: <FaFigma /> },
            { name: "Adobe XD", icon: <FaFigma /> },
            { name: "InVision", icon: <FaFigma /> },
            { name: "Zeplin", icon: <FaFigma /> },
            { name: "Principle", icon: <FaFigma /> }
        ]
    },
    {
        title: "Business Development",
        technologies: [
            { name: "Salesforce", icon: <FaFigma /> },
            { name: "HubSpot", icon: <FaFigma /> },
            { name: "Jira", icon: <FaFigma /> },
            { name: "Trello", icon: <FaFigma /> },
            { name: "Asana", icon: <FaFigma /> },
            { name: "Slack", icon: <FaFigma /> },
            { name: "Zoom", icon: <FaFigma /> },
            { name: "Google Workspace", icon: <FaFigma /> }
        ]
    }
];

const TechStacks: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [techPositions, setTechPositions] = useState<Array<{ x: number; y: number; rotate: number; delay: number; duration: number }>>([]);
    const containerRef = useRef<HTMLDivElement>(null);

    const nextSlide = () => {
        if (!isAnimating) {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % techStacks.length);
            setIsAnimating(true);
        }
    };

    const prevSlide = () => {
        if (!isAnimating) {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + techStacks.length) % techStacks.length);
            setIsAnimating(true);
        }
    };

    const calculatePosition = (index: number, positions: Array<{ x: number; y: number; rotate: number; delay: number; duration: number }>) => {
        const containerWidth = containerRef.current?.clientWidth || 500;
        const containerHeight = containerRef.current?.clientHeight || 500;
        const itemWidth = 120;
        const itemHeight = 40;

        let x = Math.random() * (containerWidth - itemWidth);
        let y = containerHeight - itemHeight;
        let rotate = Math.random() * 30 - 15;
        let delay = Math.random() * 0.5;
        let duration = 1 + Math.random() * 0.5;

        for (let i = 0; i < index; i++) {
            if (x < positions[i].x + itemWidth && x + itemWidth > positions[i].x && y === containerHeight - itemHeight) {
                y = positions[i].y - itemHeight;
            }
        }

        return { x, y, rotate, delay, duration };
    };

    useEffect(() => {
        if (isAnimating) {
            const newPositions: Array<{ x: number; y: number; rotate: number; delay: number; duration: number }> = [];
            techStacks[currentIndex].technologies.forEach((_, index) => {
                newPositions.push(calculatePosition(index, newPositions));
            });
            setTechPositions(newPositions);
            const timer = setTimeout(() => setIsAnimating(false), 3000);
            return () => clearTimeout(timer);
        }
    }, [currentIndex, isAnimating]);

    return (
        <div className="w-full py-16 text-center bg-white relative md:px-24 px-5 overflow-hidden">
            <h2 className="text-xs md:text-sm font-medium text-gray-500 tracking-widest mb-2 text-center">
                A Deep Dive into Our Tech
            </h2>
            <h1 className="text-2xl md:text-4xl font-extrabold md:mb-12 text-gray-900 text-center mb-7">
                Our powerful tech stack and tools overview
            </h1>

            <div className="flex flex-col h-auto md:h-screen gap-16 md:gap-36">
                <div className="relative w-full max-w-4xl mx-auto px-4 py-8">
                    <div ref={containerRef} className="relative bg-slate-400 rounded-lg shadow-lg w-[60vw] h-[34.5rem] overflow-hidden">
                        <h1 className="text-4xl font-bold mb-4 text-center">{techStacks[currentIndex].title}</h1>
                        <h2 className="text-xl text-gray-600 mb-8 text-center">Technologies and Tools</h2>
                        <div className="absolute top-0 right-0 p-4">
                            <Info size={24} className="text-gray-400" />
                        </div>
                        {techStacks[currentIndex].technologies.map((tech, index) => (
                            <div
                                key={tech.name}
                                className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg text-lg font-semibold flex items-center gap-2 absolute"
                                style={{
                                    left: `${techPositions[index]?.x || 0}px`,
                                    top: isAnimating ? '-10%' : `${techPositions[index]?.y || 0}px`,
                                    transform: `rotate(${techPositions[index]?.rotate || 0}deg)`,
                                    transition: `top ${techPositions[index]?.duration || 1}s cubic-bezier(0.5, 1, 0.89, 1), transform ${techPositions[index]?.duration || 1}s`,
                                    transitionDelay: `${techPositions[index]?.delay || 0}s`,
                                }}
                            >
                                {tech.icon} {tech.name}
                            </div>
                        ))}

                        <button
                            onClick={prevSlide}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors z-10"
                            disabled={isAnimating}
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors z-10"
                            disabled={isAnimating}
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TechStacks;