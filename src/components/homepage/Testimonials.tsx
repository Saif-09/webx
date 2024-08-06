"use client";

import React, { useState } from "react";
import Image from "next/image";

// Sample data for testimonials
const testimonials = [
    {
        id: 1,
        name: "Mike Taylor",
        location: "London",
        image: "/images/colosseum.jpg", // Replace with the correct path
        text: "“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”",
    },
    {
        id: 2,
        name: " Taylor",
        location: "India",
        image: "/images/colosseum.jpg", // Replace with the correct path
        text: "“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”",
    },
    // Add more testimonials here if needed
];

const Testimonials: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Handle navigation between testimonials
    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    };

    const currentTestimonial = testimonials[currentIndex];

    return (
        <section className="py-16 bg-white px-4 sm:px-8 md:px-20 lg:px-32">
            <div className="container mx-auto">
                <h2 className="text-sm font-medium text-gray-500 tracking-widest mb-2">Testimonials</h2>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8">
                    What people say about Us.
                </h2>
                <div className="flex flex-col md:flex-row items-center md:items-start">
                    {/* Left side for testimonial content */}
                    <div className="flex flex-col items-center md:items-start md:w-1/2 space-y-4">
                        <div className="bg-white shadow-md rounded-lg p-6 md:p-8 relative z-10">
                            <p className="text-gray-600 mb-4">{currentTestimonial.text}</p>
                            <div className="flex items-center space-x-3">
                                <Image
                                    src={currentTestimonial.image}
                                    alt={currentTestimonial.name}
                                    width={48}
                                    height={48}
                                    className="rounded-full"
                                />
                                <div>
                                    <h3 className="font-bold text-gray-800">{currentTestimonial.name}</h3>
                                    <p className="text-sm text-gray-500">{currentTestimonial.location}</p>
                                </div>
                            </div>
                        </div>
                        {/* Navigation Buttons for Mobile */}
                        <div className="flex md:hidden space-x-2 mt-4">
                            <button
                                onClick={goToPrevious}
                                className="bg-purple-200 p-2 rounded-full hover:bg-purple-300"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 text-purple-600">
                                    <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                                </svg>
                            </button>
                            <button
                                onClick={goToNext}
                                className="bg-purple-200 p-2 rounded-full hover:bg-purple-300"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 text-purple-600">
                                    <path d="M10 17.51 16 12l-6-5.5-1.41 1.41L13.17 12l-4.58 4.59z" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Right side for image and navigation (Desktop) */}
                    <div className="hidden md:flex flex-col justify-center items-center md:w-1/2 relative">
                        <Image
                            src={currentTestimonial.image}
                            alt={currentTestimonial.name}
                            width={100}
                            height={100}
                            className="rounded-full mb-6"
                        />
                        <div className="flex flex-col space-y-2 absolute top-1/2 transform -translate-y-1/2">
                            <button
                                onClick={goToPrevious}
                                className="bg-gray-200 p-2 rounded-full hover:bg-gray-300"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 text-gray-600">
                                    <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                                </svg>
                            </button>
                            <button
                                onClick={goToNext}
                                className="bg-gray-200 p-2 rounded-full hover:bg-gray-300"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 text-gray-600">
                                    <path d="M10 17.51 16 12l-6-5.5-1.41 1.41L13.17 12l-4.58 4.59z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Dots for navigation */}
                <div className="flex justify-center mt-6">
                    {testimonials.map((testimonial, index) => (
                        <span
                            key={testimonial.id}
                            className={`h-2 w-2 rounded-full mx-1 ${currentIndex === index ? "bg-purple-600" : "bg-gray-300"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;