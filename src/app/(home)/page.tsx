// src/pages/index.js
import Hero from '@/components/homepage/Hero';
import HeroBG from '@/components/homepage/HeroBG';
import ScrollingText from '@/components/homepage/ScrollingText';
import WhatWeDo from '@/components/homepage/WhatWeDo';
import { Herr_Von_Muellerhoff } from 'next/font/google';
import Head from 'next/head';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col">
            <Hero/>
            <ScrollingText />
            <WhatWeDo />

        </main>
    );
}