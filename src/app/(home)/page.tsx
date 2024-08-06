// src/pages/index.js
import Hero from '@/components/homepage/Hero';
import HeroBG from '@/components/homepage/HeroBG';
import ProjectSection from '@/components/homepage/ProjectSection';
import ScrollingText from '@/components/homepage/ScrollingText';
import Testimonials from '@/components/homepage/Testimonials';
import WhatWeDo from '@/components/homepage/WhatWeDo';
import WhyUs from '@/components/homepage/WhyUs';
import { Herr_Von_Muellerhoff } from 'next/font/google';
import Head from 'next/head';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col">
            <Hero/>
            <ScrollingText />
            <WhatWeDo />
            <ProjectSection/>
            <WhyUs />
            <Testimonials/>


        </main>
    );
}