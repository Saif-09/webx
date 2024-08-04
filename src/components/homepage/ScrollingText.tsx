// components/ScrollingText.js

import React from 'react';
import styles from './ScrollingText.module.css';

// Import SVG from the public directory
const ScrollingTextIcon = '/ScrollingTextIcon.svg';

const ScrollingText = () => {
    const items = [
        'Web/App Design',
        'Full Stack Developer',
        'APIs',
        'Front-end Developer',
        'App Development',
        'UI/UX Design',
        'Software Engineering',
    ];

    // Duplicate the items for seamless scrolling
    const scrollingItems = [...items, ...items];

    return (
        <div className={styles.tickerContainer}>
            <div className={styles.tickerContent}>
                {scrollingItems.map((item, index) => (
                    <div key={index} className={styles.tickerItem}>
                        {item}
                        <img
                            src={ScrollingTextIcon}
                            alt=""
                            className={styles.icon}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ScrollingText;