import Image from 'next/image';
import React, { ReactNode, useEffect, useState } from 'react';
import HomeRightDecore from '@/../public/HomeRightDecore.svg';
import HomeLeftDecore from '@/../public/HomeLeftDecore.svg';

// Define the type for the component's props
interface HeroBGProps {
    children: ReactNode; 
}

const HeroBG: React.FC<HeroBGProps> = ({ children }) => {
    const [isMobile, setIsMobile] = useState(false);

    // Effect to check the screen size and update the state
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768); 
        };

        handleResize(); // Check on mount
        window.addEventListener('resize', handleResize); // Listen for resize events

        return () => window.removeEventListener('resize', handleResize); // Cleanup
    }, []);

    if (isMobile) {
        return <div className='w-full h-full flex flex-col '>{children}</div>;
    }

    return (
        <div className='relative w-screen h-screen flex justify-between items-center overflow-hidden'>
            <div className='absolute top-0 left-0'>
                <Image
                    src={HomeLeftDecore}
                    alt="left-decor"
                    className="h-auto w-[40vw]"
                />
            </div>
            <div className='absolute top-0 right-0'>
                <Image
                    src={HomeRightDecore}
                    alt="right-decor"
                    className="h-auto w-[50vw]"
                />
            </div>
            <div className='relative z-10 w-full h-full flex flex-col '>
                {children}
            </div>
        </div>
    );
};

export default HeroBG;