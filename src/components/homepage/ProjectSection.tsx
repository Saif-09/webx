"use client";
import React, { useState } from 'react';
import ProjectCard from '@/components/projectCard/ProjectCard';
import Image from 'next/image';
import spring from '@/../public/spring.svg';

interface Project {
    image: string;
    name: string;
    category: string;
}

const projects: Project[] = [
    {
        image: '/images/colosseum.jpg',
        name: 'Project name1',
        category: 'Web design',
    },
    {
        image: '/images/bigBen.jpg',
        name: 'Project name2',
        category: 'Web design',
    },
    {
        image: '/images/helsinki.jpg',
        name: 'Project name3',
        category: 'Web design',
    },
];

const ProjectSection: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="bg-white min-h-screen py-10">
            <div className="max-w-6xl mx-auto px-4">
                <h1 className="md:text-[1.125rem] text-xs font-semibold text-center mb-1 text-[#5E6282]">Project</h1>
                <h2 className="md:text-[3.125rem] text-2xl font-bold text-center md:mb-20 mb-10 text-[#14183E]">How we do it</h2>

                {/* Mobile Carousel */}
                <div className="sm:hidden relative flex justify-center items-center">
                    {/* Left Navigation Button */}
                    <button
                        onClick={handlePrevClick}
                        className="absolute left-2 p-2 bg-[#C49BBB] text-white rounded-full hover:bg-[#916a88] transition font-bold z-20"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Project Card */}
                    <div className="max-w-sm mx-auto">
                        <ProjectCard
                            image={projects[currentIndex].image}
                            name={projects[currentIndex].name}
                            category={projects[currentIndex].category}
                        />
                    </div>

                    {/* Right Navigation Button */}
                    <button
                        onClick={handleNextClick}
                        className="absolute right-2 p-2 bg-[#C49BBB] text-white rounded-full hover:bg-[#916a88] transition"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* Desktop and Tablet Grid Layout */}
                <div className="hidden sm:flex sm:flex-wrap sm:justify-center sm:gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="relative">
                            <div className="relative z-10">
                                <ProjectCard
                                    image={project.image}
                                    name={project.name}
                                    category={project.category}
                                />
                            </div>
                            {/* Position the spring image only on the last card */}
                            {index === projects.length - 1 && (
                                <div className="absolute bottom-[-20px] right-[-50px] z-0">
                                    <Image
                                        src={spring}
                                        alt="spring decor"
                                        className="h-auto w-[8vw] transition-transform duration-300 hover:animate-wobbleOnce"
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectSection;