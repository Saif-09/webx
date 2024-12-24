'use client';
import { motion } from 'framer-motion';
import { Phone, Globe, Palette, PenTool, Megaphone, ArrowRight } from 'lucide-react';
import { useRef } from 'react';

interface Service {
    title: string;
    description: string;
    icon: React.ReactNode;
    features: string[];
    illustration: string;
}

const ServicePage = () => {
    const servicesSectionRef = useRef<HTMLDivElement | null>(null);

    const handleGetStartedClick = () => {
        if (servicesSectionRef.current) {
            servicesSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const services: Service[] = [
        {
            title: "App Development",
            description: "Building robust mobile applications that deliver exceptional user experiences across platforms",
            icon: <Phone size={32} className="text-[#4C1E4F]" />,
            illustration: "/assets/images/mobileappillus.svg",
            features: [
                "Native iOS Development",
                "Native Android Development",
                "Cross-platform Solutions",
                "App Store Optimization",
                "Mobile UI/UX Design",
                "App Maintenance & Support"
            ]
        },
        {
            title: "Website Development",
            description: "Creating modern, responsive websites and web applications that drive business growth",
            icon: <Globe size={32} className="text-[#4C1E4F]" />,
            illustration: "/assets/images/webdevillus.svg",
            features: [
                "Custom Web Applications",
                "E-commerce Solutions",
                "CMS Development",
                "Progressive Web Apps",
                "API Integration",
                "Performance Optimization"
            ]
        },
        {
            title: "UI/UX Design",
            description: "Crafting intuitive and engaging user experiences through research-driven design",
            icon: <Palette size={32} className="text-[#4C1E4F]" />,
            illustration: "/assets/images/uiux-illustration.svg",
            features: [
                "User Research & Analysis",
                "Wireframing & Prototyping",
                "Interface Design",
                "User Journey Mapping",
                "Usability Testing",
                "Design Systems"
            ]
        },
        {
            title: "Graphic Design",
            description: "Delivering impactful visual designs that strengthen your brand identity",
            icon: <PenTool size={32} className="text-[#4C1E4F]" />,
            illustration: "/assets/images/graphicdesigner.svg",
            features: [
                "Brand Identity Design",
                "Marketing Materials",
                "Social Media Graphics",
                "Print Design",
                "Motion Graphics",
                "Illustration"
            ]
        },
        {
            title: "Digital Marketing",
            description: "Implementing data-driven strategies to enhance your online presence",
            icon: <Megaphone size={32} className="text-[#4C1E4F]" />,
            illustration: "/assets/images/digitalmarketing.svg",
            features: [
                "SEO Optimization",
                "Social Media Marketing",
                "Content Strategy",
                "Email Marketing",
                "PPC Campaigns",
                "Analytics & Reporting"
            ]
        },
        // {
        //     title: "Custom Solutions",
        //     description: "Developing tailored software solutions to address unique business challenges",
        //     icon: <Code size={32} className="text-[#4C1E4F]" />,
        //     illustration: "/assets/images/custom-solutions.svg",
        //     features: [
        //         "Enterprise Software",
        //         "Cloud Solutions",
        //         "System Integration",
        //         "Legacy Modernization",
        //         "Automation Tools",
        //         "Consultation Services"
        //     ]
        // }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center bg-white overflow-hidden">
                <div className="container mx-auto px-4 relative">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="text-left space-y-8">
                            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                                Transform Your <span className="text-[#4C1E4F]">Ideas</span> Into Reality
                            </h1>
                            <p className="text-xl text-gray-600 max-w-xl">
                                We craft digital experiences that inspire, engage, and deliver exceptional results for your business growth.
                            </p>
                            <button
                                onClick={handleGetStartedClick}
                                className="bg-[#4C1E4F] hover:bg-[#513a52] text-white px-8 py-4 rounded-lg 
                                transition-all duration-300 flex items-center justify-center gap-2 text-lg group"
                            >
                                Get Started
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                        <div className="relative hidden lg:block">
                            <img
                                src="/assets/images/service.svg"
                                alt="Hero Illustration"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Services Section */}
            <section ref={servicesSectionRef} className="py-32 bg-gradient-to-b from-white to-purple-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-24 space-y-4">
                        <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-900 to-red-800 bg-clip-text text-transparent">
                            Our Services
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            End-to-end solutions to help your business thrive in the modern age.
                        </p>
                    </div>

                    <div className="space-y-40">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                className={`flex flex-col ${
                                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                } items-center gap-20 group`}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, ease: 'easeOut' }}
                                viewport={{ once: true }}
                            >
                                <motion.div
                                    className="w-full lg:w-1/2"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <img
                                        src={service.illustration}
                                        alt={service.title}
                                        className="relative w-full max-w-xl mx-auto h-auto rounded-2xl"
                                    />
                                </motion.div>
                                <motion.div className="w-full lg:w-1/2" whileHover={{ translateY: -5 }}>
                                    <div className="p-8 bg-white text-[#513A52] rounded-3xl shadow-md">
                                        <h3 className="text-3xl font-bold text-[#4C1E4F]">{service.title}</h3>
                                        <p className="text-gray-600 text-lg">{service.description}</p>
                                        <ul className="mt-4 space-y-2">
                                            {service.features.map((feature) => (
                                                <li key={feature} className="text-gray-700">
                                                    - {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-16 relative">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-8 left-8 w-36 h-36 bg-indigo-100 rounded-full blur-3xl opacity-30"></div>
                    <div className="absolute bottom-16 right-16 w-48 h-48 bg-indigo-200 rounded-full blur-3xl opacity-20"></div>
                </div>

                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <h2 className="text-4xl font-extrabold text-gray-800 leading-tight">
                            Let’s Build Something Extraordinary Together
                        </h2>
                        <p className="text-lg text-gray-600 mt-4">
                            Partner with our team to create innovative solutions tailored to your needs. We're here to bring your vision to life.
                        </p>
                    </div>

                    <div className="mt-12 max-w-3xl mx-auto bg-white p-10 rounded-2xl shadow-xl border border-gray-200">
                        <form
                            action="/api/contact"
                            method="POST"
                            className="space-y-6"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        placeholder="John Doe"
                                        className="mt-2 w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-800 
                                focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        placeholder="example@email.com"
                                        className="mt-2 w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-800 
                                focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    required
                                    placeholder="Tell us about your project..."
                                    className="mt-2 w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-800 
                            focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                                ></textarea>
                            </div>

                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="w-full md:w-auto bg-indigo-500 text-white px-8 py-3 rounded-lg font-medium shadow-lg 
                            hover:bg-indigo-600 transition duration-300 transform hover:scale-105"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="mt-12 text-center text-gray-600">
                        <p className="text-lg">
                            Prefer to reach out directly?{' '}
                            <a href="mailto:yourteam@example.com" className="text-indigo-500 font-medium hover:underline">
                                Email us
                            </a>{' '}
                            or call us at{' '}
                            <a href="tel:+1234567890" className="text-indigo-500 font-medium hover:underline">
                                +123 456 7890
                            </a>.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServicePage;