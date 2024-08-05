import React from 'react';

interface ProjectCardProps {
    image: string;
    name: string;
    category: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, name, category }) => {
    return (
        <div className="bg-white h-[28.56rem] shadow-custom rounded-3xl w-[19.68rem] overflow-hidden mx-auto transform md:hover:scale-105 transition-transform duration-300">
            <img src={image} alt={name} className="w-full h-[20.43rem] object-cover" />
            <div className="p-4">
                <h3 className="text-xl font-bold text-[#5E6282]"> {name}</h3>
                <p className="text-[#5E6282] text-base font-normal">{category}</p>
            </div>
        </div>
    );
};

export default ProjectCard;