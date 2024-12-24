'use client';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link'; // Import Link from next/link
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { ArrowRight, ExternalLink, Code, Palette, TrendingUp, Sparkles, ChevronRight, CheckCircle2, ArrowUpRight } from 'lucide-react';

// Define a type for the sections
type Section = {
    title: string;
    subtitle: string;
    description: string;
    icon: JSX.Element;
    accentColor: string;
    features: string[];
    highlights: { label: string; value: string }[];
    callToAction: string;
    detailedDescription: string;
    testimonial?: {
        text: string;
        author: string;
        role: string;
    };
};

const WhatWeDo = () => {
    const [selectedSection, setSelectedSection] = useState<Section | null>(null);
    const [activeTab, setActiveTab] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSheetOpen, setIsSheetOpen] = useState(false);

    const sections = [
        {
            title: 'Build',
            subtitle: 'Android and iOS Apps | Websites',
            description: 'Ready to bring your innovative idea to life? Our expert development team is here to transform your vision into a powerful, market-ready digital solution.',
            icon: <Code className="w-8 h-8" />,
            accentColor: 'from-[#4C1E4F] to-[#760A16]',
            features: [
                'Custom Mobile App Development',
                'Responsive Web Applications',
                'E-commerce Solutions',
                'API Development',
                'Cloud Integration',
                'Technical Consultation'
            ],
            highlights: [
                { label: 'Launch Time', value: '12 Weeks' },
                { label: 'Free Support', value: '3 Months' },
                { label: 'Updates', value: 'Lifetime' }
            ],
            benefits: [
                'Fast-track your app development',
                'Scale with confidence',
                'Future-proof technology'
            ],
            callToAction: "Start Building",
            detailedDescription: 'Whether you need a stunning mobile app or a powerful web platform, our development team is ready to bring your vision to life. We use cutting-edge technologies and best practices to ensure your product stands out in the digital landscape.',
            testimonial: {
                text: "Their development team delivered our app ahead of schedule with exceptional quality.",
                author: "John Smith",
                role: "CEO, TechStart"
            }
        },
        {
            title: 'Design',
            subtitle: 'UI/UX Design | Brand Identity',
            description: 'Transform your brand with captivating designs that users love. Our creative team specializes in crafting memorable digital experiences that drive engagement.',
            icon: <Palette className="w-8 h-8" />,
            accentColor: 'from-[#760A16] to-[#4C1E4F]',
            features: [
                'User Interface Design',
                'Brand Identity Creation',
                'User Experience Strategy',
                'Interactive Prototypes',
                'Design Systems',
                'Visual Storytelling'
            ],
            highlights: [
                { label: 'Iterations', value: 'Unlimited' },
                { label: 'Concepts', value: '5+' },
                { label: 'Revisions', value: 'Free' }
            ],
            callToAction: "Start Designing",
            detailedDescription: 'Let us help you create a stunning visual identity that captures attention and drives engagement. Our design process focuses on creating intuitive, beautiful interfaces that delight users while achieving your business goals.',
            testimonial: {
                text: "The design team truly understood our brand and delivered beyond expectations.",
                author: "Sarah Johnson",
                role: "Marketing Director, BrandCo"
            }
        },
        {
            title: 'Growth',
            subtitle: 'Digital Marketing | Analytics',
            description: 'Ready to scale? Our data-driven strategies help new businesses establish their digital presence and capture market opportunities.',
            icon: <TrendingUp className="w-8 h-8" />,
            accentColor: 'from-[#4C1E4F] to-[#760A16]',
            features: [
                'Market Research',
                'Growth Strategy',
                'Social Media Marketing',
                'SEO Optimization',
                'Content Strategy',
                'Performance Analytics'
            ],
            highlights: [
                { label: 'Strategy', value: 'Custom' },
                { label: 'Reporting', value: 'Weekly' },
                { label: 'ROI Focus', value: '100%' }
            ],
            callToAction: "Start Growing",
            detailedDescription: 'Launch your business into the digital sphere with confidence. Our growth team specializes in helping new businesses establish their presence, reach their target audience, and achieve sustainable growth through data-driven strategies.',
            testimonial: {
                text: "Their growth strategies helped us double our user base in just 6 months.",
                author: "Mike Williams",
                role: "Founder, GrowthStack"
            }
        }
    ];

    const handleLearnMore = (section: Section) => {
        setSelectedSection(section);
        if (window.innerWidth < 768) {
            setIsSheetOpen(true);
        } else {
            setIsModalOpen(true);
        }
    };

    const TypeWriter = ({ words, className }: { words: string[]; className: string }) => {
        const [currentWordIndex, setCurrentWordIndex] = useState(0);
        const [currentText, setCurrentText] = useState('');
        const [isDeleting, setIsDeleting] = useState(false);
        const [delay, setDelay] = useState(200); // Increased base typing delay

        useEffect(() => {
            const word = words[currentWordIndex];

            if (isDeleting) {
                // Slower deletion speed
                const timeout = setTimeout(() => {
                    setCurrentText(word.substring(0, currentText.length - 1));
                    if (currentText.length <= 1) {
                        setIsDeleting(false);
                        setCurrentWordIndex((prev) => (prev + 1) % words.length);
                    }
                }, 100); // Deletion speed
                return () => clearTimeout(timeout);
            } else {
                // Writing logic
                if (currentText === word) {
                    // Longer pause at the end of word
                    const timeout = setTimeout(() => {
                        setIsDeleting(true);
                    }, 3000); // Pause at end of word
                    return () => clearTimeout(timeout);
                } else {
                    // Typing logic with variable speed
                    const timeout = setTimeout(() => {
                        setCurrentText(word.substring(0, currentText.length + 1));
                    }, Math.random() * 100 + 200); // Random delay between 200-300ms for more natural typing
                    return () => clearTimeout(timeout);
                }
            }
        }, [currentText, isDeleting, currentWordIndex, words]);

        return (
            <span className={className}>
                {currentText}
                <span className="animate-pulse inline-block ml-[2px] -translate-y-1">|</span>
            </span>
        );
    };

    const TypingAnimation = () => {
        const words = ["Innovate. ", "Create. ", "Succeed."];
        const [text, setText] = useState("");
        const [wordIndex, setWordIndex] = useState(0);
        const [isComplete, setIsComplete] = useState(false);

        useEffect(() => {
            if (wordIndex >= words.length) {
                setIsComplete(true);
                return;
            }

            const currentWord = words[wordIndex];
            const currentLength = text.length;
            const targetLength = words.slice(0, wordIndex + 1).join("").length;

            if (currentLength < targetLength) {
                const timeout = setTimeout(() => {
                    setText(words.slice(0, wordIndex + 1).join("").slice(0, currentLength + 1));
                }, 100); // Adjust typing speed here
                return () => clearTimeout(timeout);
            }

            const wordTimeout = setTimeout(() => {
                setWordIndex(wordIndex + 1);
            }, 500); // Pause between words
            return () => clearTimeout(wordTimeout);
        }, [text, wordIndex, words]);

        return (
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#4C1E4F] tracking-tight mb-6">
                <span>{text}</span>
                {!isComplete && (
                    <span className="inline-block w-[2px] h-[1em] bg-[#4C1E4F] animate-pulse ml-1" />
                )}
            </h1>
        );
    };

    const Header = () => {
        const words = ["Innovate.", "Create.", "Succeed."];

        return (
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex flex-col sm:flex-row items-center justify-center gap-2"
                >
                    <TypeWriter
                        words={words}
                        className="text-[#4C1E4F] min-h-[1.5em] block"
                    />
                </motion.div>
            </h1>
        );
    };

    const BuildAnimation = () => (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 w-full h-full"
        >
            <svg className="w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* < symbol */}
                <motion.path
                    d="M160 120L120 150L160 180"
                    stroke="#4C1E4F"
                    strokeWidth="12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{
                        pathLength: 1,
                        opacity: [0, 1, 1, 0],
                        transition: {
                            pathLength: { duration: 1.5, ease: "easeInOut" },
                            opacity: { duration: 2, repeat: Infinity, repeatDelay: 1 }
                        }
                    }}
                />

                {/* / symbol */}
                <motion.path
                    d="M180 100L220 200"
                    stroke="#760A16"
                    strokeWidth="12"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{
                        pathLength: 1,
                        opacity: [0, 1, 1, 0],
                        transition: {
                            pathLength: { duration: 1.5, ease: "easeInOut" },
                            opacity: { duration: 2, repeat: Infinity, repeatDelay: 1 }
                        }
                    }}
                />

                {/* > symbol */}
                <motion.path
                    d="M240 120L280 150L240 180"
                    stroke="#4C1E4F"
                    strokeWidth="12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{
                        pathLength: 1,
                        opacity: [0, 1, 1, 0],
                        transition: {
                            pathLength: { duration: 1.5, ease: "easeInOut" },
                            opacity: { duration: 2, repeat: Infinity, repeatDelay: 1 }
                        }
                    }}
                />

                {/* Optional subtle glow effect */}
                <motion.g
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: [0, 0.6, 0.6, 0],
                        transition: {
                            duration: 2,
                            repeat: Infinity,
                            repeatDelay: 1,
                            delay: 0.5
                        }
                    }}
                >
                    <circle cx="180" cy="150" r="4" fill="#C49BBB" />
                    <circle cx="200" cy="150" r="4" fill="#C49BBB" />
                    <circle cx="220" cy="150" r="4" fill="#C49BBB" />
                </motion.g>
            </svg>
        </motion.div>
    );

    const DesignAnimation = () => (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 w-full h-full"
        >
            <svg className="w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.circle
                    cx="200"
                    cy="150"
                    r="120"
                    stroke="#4C1E4F"
                    strokeWidth="8"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                />
                <motion.path
                    d="M200 30L320 150L200 270L80 150L200 30Z"
                    stroke="#760A16"
                    strokeWidth="8"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                />
                <motion.circle
                    cx="200"
                    cy="150"
                    r="40"
                    fill="#C49BBB"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                />
            </svg>
        </motion.div>
    );

    const GrowthAnimation = () => (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 w-full h-full"
        >
            <svg className="w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path
                    d="M40 260L120 180L200 220L280 140L360 40"
                    stroke="#4C1E4F"
                    strokeWidth="8"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                />
                <motion.circle
                    cx="40"
                    cy="260"
                    r="20"
                    fill="#760A16"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: 1.2 }}
                />
                <motion.circle
                    cx="120"
                    cy="180"
                    r="20"
                    fill="#760A16"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: 1.4 }}
                />
                <motion.circle
                    cx="200"
                    cy="220"
                    r="20"
                    fill="#760A16"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: 1.6 }}
                />
                <motion.circle
                    cx="280"
                    cy="140"
                    r="20"
                    fill="#760A16"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: 1.8 }}
                />
                <motion.circle
                    cx="360"
                    cy="40"
                    r="20"
                    fill="#C49BBB"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: 2 }}
                />
            </svg>
        </motion.div>
    );




    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative overflow-hidden">
                <div className="absolute inset-0" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <motion.span
                            initial={{ scale: 0.95 }}
                            animate={{ scale: 1 }}
                            className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-[#4C1E4F] text-white mb-8"
                        >
                            <Sparkles className="w-4 h-4 mr-2" />
                            Transform Your Ideas Into Reality
                        </motion.span>

                        <TypingAnimation />

                        <p className="max-w-2xl mx-auto text-xl text-gray-600 mb-10">
                            Partner with us to bring your vision to life. We combine creativity,
                            technology, and strategy to help you succeed in the digital world.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-flex items-center px-8 py-4 rounded-xl text-lg font-medium bg-[#4C1E4F] text-white shadow-lg hover:shadow-xl transition-all duration-200"
                            >
                                Start Your Journey
                                <ArrowUpRight className="ml-2 w-5 h-5" />
                            </motion.button>
                            <Link href="/our-services" passHref>
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="inline-flex items-center px-8 py-4 rounded-xl text-lg font-medium border-2 border-[#C49BBB] text-[#4C1E4F] hover:border-[#4C1E4F] transition-all duration-200"
                                >
                                    Explore Services
                                    <ChevronRight className="ml-2 w-5 h-5" />
                                </motion.div>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Services Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="flex flex-col md:flex-row gap-12">
                    <div className="md:w-1/3">
                        <div className="sticky top-8 space-y-6">
                            {sections.map((section, index) => (
                                <motion.div
                                    key={index}
                                    initial={false}
                                    animate={{
                                        scale: activeTab === index ? 1.02 : 1,
                                        opacity: activeTab === index ? 1 : 0.7
                                    }}
                                    className={`
                    cursor-pointer rounded-xl p-6
                    ${activeTab === index
                                            ? 'bg-white shadow-lg border border-[#C49BBB]/20'
                                            : 'hover:bg-white/50'}
                    transition-all duration-200
                `}
                                    onClick={() => setActiveTab(index)}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`
                        w-12 h-12 rounded-lg flex items-center justify-center
                        ${activeTab === index
                                                ? 'bg-[#4C1E4F] text-white'
                                                : 'bg-[#C49BBB]/10 text-[#4C1E4F]'}
                        transition-colors duration-200
                    `}>
                                            {section.icon}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-[#4C1E4F]">{section.title}</h3>
                                            <p className="text-sm text-gray-500">{section.subtitle}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="md:w-2/3">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="relative bg-white rounded-2xl shadow-lg p-4 sm:p-8 border border-[#C49BBB]/20 overflow-hidden"
                            >
                                {activeTab === 0 && <BuildAnimation />}
                                {activeTab === 1 && <DesignAnimation />}
                                {activeTab === 2 && <GrowthAnimation />}
                                <div className="relative z-10 space-y-6 sm:space-y-8">
                                    <div className="space-y-3 sm:space-y-4">
                                        <h2 className="text-2xl sm:text-3xl font-bold text-[#4C1E4F]">
                                            {sections[activeTab].title}
                                        </h2>
                                        <p className="text-base sm:text-lg text-gray-600">
                                            {sections[activeTab].description}
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6">
                                        {sections[activeTab].highlights.map((highlight, idx) => (
                                            <div key={idx}
                                                className="text-center p-3 sm:p-4 rounded-xl bg-[#C49BBB]/5 border border-[#C49BBB]/10">
                                                <div className="text-lg sm:text-xl font-bold text-[#4C1E4F]">
                                                    {highlight.value}
                                                </div>
                                                <div className="text-xs sm:text-sm text-gray-500 mt-1">
                                                    {highlight.label}
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                        {sections[activeTab].features.map((feature, idx) => (
                                            <div key={idx}
                                                className="flex items-center gap-3 p-3 sm:p-4 rounded-xl bg-[#C49BBB]/5 border border-[#C49BBB]/10"
                                            >
                                                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#760A16]" />
                                                <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex justify-end pt-2">
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={() => handleLearnMore(sections[activeTab])}
                                            className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 
                            rounded-xl text-base sm:text-lg font-medium bg-[#4C1E4F] text-white
                            shadow-lg hover:shadow-xl transition-all duration-200 w-full sm:w-auto"
                                        >
                                            {sections[activeTab].callToAction}
                                            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                                        </motion.button>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            {/* Desktop Modal */}
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogContent className="sm:max-w-[600px] bg-white p-0 overflow-hidden max-h-[90vh] border border-[#C49BBB]/20">
                    {selectedSection && (
                        <div className="flex flex-col h-full">
                            <DialogHeader className="p-6 pb-0">
                                <DialogTitle className="text-2xl font-bold flex items-center gap-3 mb-2 text-[#4C1E4F]">
                                    <div className="p-2 rounded-lg bg-[#4C1E4F] text-white">
                                        {selectedSection.icon}
                                    </div>
                                    {selectedSection.title}
                                </DialogTitle>
                                <DialogDescription className="text-gray-500">
                                    {selectedSection.subtitle}
                                </DialogDescription>
                            </DialogHeader>

                            <div className="overflow-y-auto flex-1 p-6 pt-4">
                                <div className="space-y-6">
                                    {/* Description Section */}
                                    <div className="prose prose-gray max-w-none">
                                        <p className="text-gray-700 leading-relaxed">
                                            {selectedSection.detailedDescription}
                                        </p>
                                    </div>

                                    {/* Highlights Grid */}
                                    <div className="grid grid-cols-3 gap-3">
                                        {selectedSection.highlights.map((highlight, idx) => (
                                            <div key={idx}
                                                className="p-3 rounded-lg bg-gray-50 border border-gray-100 hover:border-gray-200 transition-colors">
                                                <div className={`text-lg font-bold bg-gradient-to-r ${selectedSection.accentColor} text-transparent bg-clip-text`}>
                                                    {highlight.value}
                                                </div>
                                                <div className="text-xs text-gray-500 mt-1">
                                                    {highlight.label}
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Features Section */}
                                    <div className="space-y-3">
                                        <h4 className="font-semibold text-gray-900 text-lg">Key Features</h4>
                                        <div className="grid sm:grid-cols-2 gap-2">
                                            {selectedSection.features.map((feature, index) => (
                                                <div key={index}
                                                    className="flex items-center gap-2 p-2 rounded-lg bg-gray-50 border border-gray-100">
                                                    <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                                                    <span className="text-sm text-gray-700">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Testimonial Card */}
                                    {selectedSection.testimonial && (
                                        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-4">
                                            <p className="text-gray-700 italic text-sm mb-3">"{selectedSection.testimonial.text}"</p>
                                            <div className="flex items-center gap-2">
                                                <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                                                    <span className="text-sm font-medium text-gray-600">
                                                        {selectedSection.testimonial.author[0]}
                                                    </span>
                                                </div>
                                                <div>
                                                    <div className="text-sm font-medium text-gray-900">
                                                        {selectedSection.testimonial.author}
                                                    </div>
                                                    <div className="text-xs text-gray-500">
                                                        {selectedSection.testimonial.role}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Fixed Bottom Action Area */}
                            <div className="p-6 pt-4 border-t border-[#C49BBB]/20 bg-white">
                                <motion.button
                                    className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg 
                        text-sm font-medium bg-[#4C1E4F] text-white transition-all duration-200
                        hover:shadow-lg hover:scale-[1.02]"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Start Your Project
                                    <ExternalLink className="w-4 h-4" />
                                </motion.button>
                            </div>
                        </div>
                    )}
                </DialogContent>

            </Dialog>

            {/* Mobile Sheet */}
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetContent side="bottom" className="h-[85vh] p-0">
                    {selectedSection && (
                        <div className="flex flex-col h-full">
                            <SheetHeader className="px-4 py-3 border-b border-gray-100">
                                <SheetTitle className="flex items-center gap-2 text-lg">
                                    <div className={`
                            p-1.5 rounded-lg
                            bg-gradient-to-r ${selectedSection.accentColor} text-white
                        `}>
                                        {selectedSection.icon}
                                    </div>
                                    {selectedSection.title}
                                </SheetTitle>
                                <SheetDescription className="text-xs">
                                    {selectedSection.subtitle}
                                </SheetDescription>
                            </SheetHeader>

                            <div className="overflow-y-auto flex-1 px-4">
                                <div className="py-4 space-y-4">
                                    {/* Description */}
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        {selectedSection.detailedDescription}
                                    </p>

                                    {/* Highlights */}
                                    <div className="grid grid-cols-3 gap-2">
                                        {selectedSection.highlights.map((highlight, idx) => (
                                            <div key={idx} className="p-2 rounded-lg bg-gray-50 border border-gray-100">
                                                <div className={`text-base font-bold bg-gradient-to-r ${selectedSection.accentColor} text-transparent bg-clip-text`}>
                                                    {highlight.value}
                                                </div>
                                                <div className="text-[10px] text-gray-500">
                                                    {highlight.label}
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Features */}
                                    <div className="space-y-2">
                                        <h4 className="font-semibold text-gray-900 text-sm">Key Features</h4>
                                        <div className="space-y-2">
                                            {selectedSection.features.map((feature, index) => (
                                                <div key={index}
                                                    className="flex items-center gap-2 p-2 rounded-lg bg-gray-50 border border-gray-100">
                                                    <CheckCircle2 className="h-3.5 w-3.5 text-green-500 flex-shrink-0" />
                                                    <span className="text-xs text-gray-700">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Testimonial */}
                                    {selectedSection.testimonial && (
                                        <div className="bg-gray-50 rounded-lg p-3 space-y-2">
                                            <p className="text-xs text-gray-700 italic">
                                                "{selectedSection.testimonial.text}"
                                            </p>
                                            <div className="flex items-center gap-2">
                                                <div className="h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center">
                                                    <span className="text-xs font-medium text-gray-600">
                                                        {selectedSection.testimonial.author[0]}
                                                    </span>
                                                </div>
                                                <div>
                                                    <div className="text-xs font-medium text-gray-900">
                                                        {selectedSection.testimonial.author}
                                                    </div>
                                                    <div className="text-[10px] text-gray-500">
                                                        {selectedSection.testimonial.role}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Action Button */}
                            <div className="p-4 border-t border-gray-100 bg-white mt-auto">
                                <motion.button
                                    className={`
                            w-full flex items-center justify-center gap-2
                            px-4 py-3 rounded-lg text-sm font-medium
                            bg-gradient-to-r ${selectedSection.accentColor} text-white
                            transform transition-all duration-200
                        `}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Start Your Project
                                    <ExternalLink className="w-4 h-4" />
                                </motion.button>
                            </div>
                        </div>
                    )}
                </SheetContent>
            </Sheet>
        </div>
    );
};

export default WhatWeDo;