"use client";
import React from 'react';
import HeroBG from './HeroBG';
import Image from 'next/image';
import HomeUnderlineDecore from '@/../public/HomeUnderlineDecore.svg';


const Hero: React.FC = () => {
    return (
        <HeroBG>
            <div className="flex flex-col md:justify-center md:h-screen px-4 md:px-8 lg:px-16">
                <div className="text-[#760A16] text-[0.75rem] font-bold leading-[14.63px] md:text-[1.25rem] md:leading-[24.38px] uppercase tracking-wide mb-2 md:mb-[25px]">
                    We Design & Develop Your Dream
                </div>
                <h1 className="text-[1.875rem] md:text-7xl lg:text-[5.25rem] font-extrabold text-[#040411] leading-tight mb-3 md:mb-10 uppercase">
                    Let's <span className="relative inline-block">
                        <span className="relative z-10">Build</span>
                        <span className="absolute inset-x-0 md:bottom-1 h-2 bottom-0">
                            <Image
                                src={HomeUnderlineDecore}
                                alt="left-decor"
                                className="h-auto w-[40vw]"
                            />
                        </span>
                    </span>
                    <br />
                    Something
                    <br />
                    Amazing Together
                </h1>
                <p className="text-[#AA9BAB] text-[0.75rem] md:text-base mb-8 md:mb-[4.25rem] md:max-w-[29.813rem] max-w-[20.25rem]  ">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration or randomised words which don't look even slightly believable.
                </p>
                <div className="flex items-center space-x-4 mb-[2.75rem]">
                    <button
                        className="text-xs md:text-[1rem] px-[0.700rem] py-[0.625rem] md:px-[1.8rem] md:py-[1.2rem] bg-[#4C1E4F] text-white font-semibold rounded-lg shadow-lg hover:bg-[#513a52] transition duration-300"
                        style={{ boxShadow: "0px 20px 35px 0px #F1A50126" }}
                    >
                        Got an idea?
                    </button>
                </div>
            </div>
        </HeroBG>
    );
}

export default Hero;