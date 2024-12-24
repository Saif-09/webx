
interface Technology {
  name: string;
  icon: string;
  benefits: string[];
}

interface DialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}

'use client'
import React, { useEffect, useRef, useState } from 'react';
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";

const TechStacks: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState<Technology | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [scrollX, setScrollX] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const technologies = [
    // P1: Mobile Development
    {
      name: "React Native",
      icon: "/assets/icons/reactnative.svg",
      benefits: [
        "Cross-platform mobile development",
        "Code reusability across platforms",
        "Native performance",
        "Hot reloading for faster development",
        "Large community and ecosystem"
      ]
    },
    {
      name: "Swift",
      icon: "/assets/icons/swift.svg",
      benefits: [
        "Type safety",
        "High performance",
        "Memory safety",
        "Interactive development",
        "Native iOS development"
      ]
    },
    {
      name: "Kotlin",
      icon: "/assets/icons/kotlin.svg",
      benefits: [
        "Java interoperability",
        "Null safety",
        "Concise syntax",
        "Android development",
        "Coroutines support"
      ]
    },

    // P2: Backend
    {
      name: "Node.js",
      icon: "/assets/icons/node-js.svg",
      benefits: [
        "Non-blocking I/O",
        "Fast execution",
        "Large package ecosystem (npm)",
        "Active community support",
        "Cross-platform compatibility"
      ]
    },
    {
      name: "Express",
      icon: "/assets/icons/expressjs.svg",
      benefits: [
        "Minimalist web framework",
        "Easy routing",
        "Middleware support",
        "Large ecosystem",
        "Fast and unopinionated"
      ]
    },
    {
      name: "MongoDB",
      icon: "/assets/icons/mongodb.svg",
      benefits: [
        "Flexible document schema",
        "Horizontal scalability",
        "High performance",
        "Rich query language",
        "Built-in replication"
      ]
    },
    {
      name: "Redis",
      icon: "/assets/icons/redis.svg",
      benefits: [
        "In-memory data store",
        "High performance",
        "Data structures",
        "Pub/sub messaging",
        "Cache management"
      ]
    },

    // P3: Web Development
    {
      name: "Next.js",
      icon: "/assets/icons/Nextjs.svg",
      benefits: [
        "Server-side rendering",
        "Automatic code splitting",
        "Built-in routing",
        "API routes support",
        "Great developer experience"
      ]
    },
    {
      name: "Angular",
      icon: "/assets/icons/angular.svg",
      benefits: [
        "Full-featured framework",
        "Two-way data binding",
        "Dependency injection",
        "TypeScript support",
        "CLI tools"
      ]
    },
    {
      name: "WordPress",
      icon: "/assets/icons/wordpress.svg",
      benefits: [
        "Easy content management",
        "Extensive plugin ecosystem",
        "SEO-friendly",
        "Custom themes",
        "Active community"
      ]
    },

    // Infrastructure & DevOps
    {
      name: "AWS",
      icon: "/assets/icons/aws.svg",
      benefits: [
        "Scalable cloud infrastructure",
        "Pay-as-you-go pricing",
        "Wide range of services",
        "Global availability",
        "Advanced security features"
      ]
    },
    {
      name: "Docker",
      icon: "/assets/icons/docker.svg",
      benefits: [
        "Container virtualization",
        "Consistent environments",
        "Easy deployment",
        "Resource isolation",
        "Version control"
      ]
    },
    {
      name: "Firebase",
      icon: "/assets/icons/firebase.svg",
      benefits: [
        "Real-time database",
        "Authentication services",
        "Cloud functions",
        "Analytics",
        "Push notifications"
      ]
    },

    // Programming Languages
    {
      name: "JavaScript",
      icon: "/assets/icons/js.svg",
      benefits: [
        "Universal browser support",
        "Versatile language",
        "Rich ecosystem",
        "Asynchronous programming",
        "Dynamic typing"
      ]
    },
    {
      name: "Python",
      icon: "/assets/icons/python.svg",
      benefits: [
        "Easy to learn",
        "Extensive libraries",
        "Data science capabilities",
        "Cross-platform",
        "Great documentation"
      ]
    },
    {
      name: "Java",
      icon: "/assets/icons/java.svg",
      benefits: [
        "Platform independence",
        "Strong type system",
        "Enterprise support",
        "Multithreading",
        "Backward compatibility"
      ]
    },

    // Design & Collaboration Tools
    {
      name: "Figma",
      icon: "/assets/icons/figma.svg",
      benefits: [
        "Real-time collaboration",
        "Cloud-based design",
        "Component libraries",
        "Auto-layout",
        "Prototyping tools"
      ]
    },
    {
      name: "GitHub",
      icon: "/assets/icons/github.svg",
      benefits: [
        "Version control",
        "Collaboration tools",
        "CI/CD integration",
        "Project management",
        "Code review"
      ]
    },
    {
      name: "GitLab",
      icon: "/assets/icons/gitlab.svg",
      benefits: [
        "Built-in CI/CD",
        "DevOps platform",
        "Container registry",
        "Issue tracking",
        "Self-hosting option"
      ]
    },
    {
      name: "Jira",
      icon: "/assets/icons/jira.svg",
      benefits: [
        "Agile project management",
        "Customizable workflows",
        "Time tracking",
        "Sprint planning",
        "Integration options"
      ]
    },
    {
      name: "Notion",
      icon: "/assets/icons/notion.svg",
      benefits: [
        "All-in-one workspace",
        "Flexible organization",
        "Collaboration features",
        "Custom databases",
        "Rich text editing"
      ]
    },
    {
      name: "Google Analytics",
      icon: "/assets/icons/googleanalytics.svg",
      benefits: [
        "User tracking",
        "Behavior analysis",
        "Custom reporting",
        "Goal tracking",
        "E-commerce tracking"
      ]
    },
    {
      name: "Zoom",
      icon: "/assets/icons/zoom.svg",
      benefits: [
        "Video conferencing",
        "Screen sharing",
        "Meeting recording",
        "Calendar integration",
        "Breakout rooms"
      ]
    },
    {
      name: "Next.js",
      icon: "/assets/icons/Nextjs.svg",
      benefits: [
        "Server-side rendering",
        "Automatic code splitting",
        "Built-in routing",
        "API routes support",
        "Great developer experience"
      ]
    },
    {
      name: "Node.js",
      icon: "/assets/icons/node-js.svg",
      benefits: [
        "Non-blocking I/O",
        "Fast execution",
        "Large package ecosystem (npm)",
        "Active community support",
        "Cross-platform compatibility"
      ]
    },
    {
      name: "MongoDB",
      icon: "/assets/icons/mongodb.svg",
      benefits: [
        "Flexible document schema",
        "Horizontal scalability",
        "High performance",
        "Rich query language",
        "Built-in replication"
      ]
    },
    {
      name: "Express",
      icon: "/assets/icons/expressjs.svg",
      benefits: [
        "Minimalist web framework",
        "Easy routing",
        "Middleware support",
        "Large ecosystem",
        "Fast and unopinionated"
      ]
    },
    {
      name: "WordPress",
      icon: "/assets/icons/wordpress.svg",
      benefits: [
        "Easy content management",
        "Extensive plugin ecosystem",
        "SEO-friendly",
        "Custom themes",
        "Active community"
      ]
    },
    {
      name: "Swift",
      icon: "/assets/icons/swift.svg",
      benefits: [
        "Type safety",
        "High performance",
        "Memory safety",
        "Interactive development",
        "Native iOS development"
      ]
    },
    {
      name: "Kotlin",
      icon: "/assets/icons/kotlin.svg",
      benefits: [
        "Java interoperability",
        "Null safety",
        "Concise syntax",
        "Android development",
        "Coroutines support"
      ]
    },
    {
      name: "Docker",
      icon: "/assets/icons/docker.svg",
      benefits: [
        "Container virtualization",
        "Consistent environments",
        "Easy deployment",
        "Resource isolation",
        "Version control"
      ]
    },
    {
      name: "Angular",
      icon: "/assets/icons/angular.svg",
      benefits: [
        "Full-featured framework",
        "Two-way data binding",
        "Dependency injection",
        "TypeScript support",
        "CLI tools"
      ]
    },
    {
      name: "Figma",
      icon: "/assets/icons/figma.svg",
      benefits: [
        "Real-time collaboration",
        "Cloud-based design",
        "Component libraries",
        "Auto-layout",
        "Prototyping tools"
      ]
    },
    {
      name: "JavaScript",
      icon: "/assets/icons/js.svg",
      benefits: [
        "Universal browser support",
        "Versatile language",
        "Rich ecosystem",
        "Asynchronous programming",
        "Dynamic typing"
      ]
    },
    {
      name: "Python",
      icon: "/assets/icons/python.svg",
      benefits: [
        "Easy to learn",
        "Extensive libraries",
        "Data science capabilities",
        "Cross-platform",
        "Great documentation"
      ]
    },
    {
      name: "Java",
      icon: "/assets/icons/java.svg",
      benefits: [
        "Platform independence",
        "Strong type system",
        "Enterprise support",
        "Multithreading",
        "Backward compatibility"
      ]
    },
    {
      name: "Firebase",
      icon: "/assets/icons/firebase.svg",
      benefits: [
        "Real-time database",
        "Authentication services",
        "Cloud functions",
        "Analytics",
        "Push notifications"
      ]
    },
    {
      name: "Redis",
      icon: "/assets/icons/redis.svg",
      benefits: [
        "In-memory data store",
        "High performance",
        "Data structures",
        "Pub/sub messaging",
        "Cache management"
      ]
    },
    {
      name: "GitHub",
      icon: "/assets/icons/github.svg",
      benefits: [
        "Version control",
        "Collaboration tools",
        "CI/CD integration",
        "Project management",
        "Code review"
      ]
    },
    {
      name: "GitLab",
      icon: "/assets/icons/gitlab.svg",
      benefits: [
        "Built-in CI/CD",
        "DevOps platform",
        "Container registry",
        "Issue tracking",
        "Self-hosting option"
      ]
    },
    {
      name: "Google Analytics",
      icon: "/assets/icons/googleanalytics.svg",
      benefits: [
        "User tracking",
        "Behavior analysis",
        "Custom reporting",
        "Goal tracking",
        "E-commerce tracking"
      ]
    },
    {
      name: "Jira",
      icon: "/assets/icons/jira.svg",
      benefits: [
        "Agile project management",
        "Customizable workflows",
        "Time tracking",
        "Sprint planning",
        "Integration options"
      ]
    },
    {
      name: "Notion",
      icon: "/assets/icons/notion.svg",
      benefits: [
        "All-in-one workspace",
        "Flexible organization",
        "Collaboration features",
        "Custom databases",
        "Rich text editing"
      ]
    },
    {
      name: "Zoom",
      icon: "/assets/icons/zoom.svg",
      benefits: [
        "Video conferencing",
        "Screen sharing",
        "Meeting recording",
        "Calendar integration",
        "Breakout rooms"
      ]
    }
  ];

  useEffect(() => {
    const handleScroll = (): void => {
      if (containerRef.current) {
        setScrollX(containerRef.current.scrollLeft);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll, { passive: true });
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const scrollToPosition = (direction: 'left' | 'right'): void => {
    if (containerRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleTechClick = (tech: Technology): void => {
    setSelectedTech(tech);
    setIsModalOpen(true);
  };

  return (
    <div className=" bg-white">
      <div className="container mx-auto px-4 py-16 md:pt-60 md:pb-60">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-xs font-semibold text-gray-500 tracking-widest mb-2">Expertise</h2>
          <h2 className="text-2xl md:text-4xl font-extrabold mb-4 text-gray-900">Our Technical Core</h2>
          <p className="text-lg text-gray-600 max-w-2xl text-center">
            Driving innovation with advanced development technologies
          </p>
        </div>

        <div className="relative">
          <button
            onClick={() => scrollToPosition('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white
                     p-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300
                     text-gray-600 hover:text-gray-900"
          >
            ←
          </button>

          <button
            onClick={() => scrollToPosition('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white
                     p-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300
                     text-gray-600 hover:text-gray-900"
          >
            →
          </button>

          <div
            ref={containerRef}
            className="flex overflow-x-scroll gap-8 px-12 py-12 no-scrollbar"
            style={{
              WebkitOverflowScrolling: 'touch',
              scrollBehavior: 'smooth',
              maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
            }}
          >
            {technologies.map((tech, index) => {
              const translateY = Math.sin((scrollX + index * 100) / 200) * 20;

              return (
                <div
                  key={tech.name}
                  className="flex-none transform transition-all duration-500 hover:scale-105"
                  style={{
                    transform: `translateY(${translateY}px)`,
                  }}
                  onClick={() => handleTechClick(tech)}
                >
                  <div className="w-72 bg-gray-50 rounded-2xl p-8 
                                shadow-md hover:shadow-lg border border-gray-100
                                transition-all duration-300 cursor-pointer group">
                    <div className="flex flex-col items-center justify-center space-y-6">
                      <div className="w-24 h-24 flex items-center justify-center 
                                    transition-transform duration-300 group-hover:scale-110">
                        <img
                          src={tech.icon}
                          alt={`${tech.name} icon`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        {tech.name}
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-auto bg-white">
          <DialogHeader className="p-4">
            {selectedTech && (
              <div className="flex items-center gap-4">
                <img
                  src={selectedTech.icon}
                  alt={`${selectedTech.name} icon`}
                  className="w-12 h-12 object-contain"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {selectedTech?.name}
                  </h3>
                  <p className="text-sm text-gray-500">Benefits</p>
                </div>
              </div>
            )}
          </DialogHeader>
          
          <div className="px-4 pb-4">
            <div className="space-y-2">
              {selectedTech?.benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 py-2"
                >
                  <span className="text-sm text-gray-400 font-medium">
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                  <p className="text-gray-600">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default TechStacks;