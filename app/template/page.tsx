'use client'; // Add this to ensure the About page runs on the client
import { useEffect, useRef, useLayoutEffect } from 'react';
import styles from '../../src/styles/Events.module.css';
import '../../src/styles/globals.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const Events = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const sections = [aboutRef.current];

    sections.forEach((section) => {
      if (section) {
        gsap.fromTo(
          section,
          { opacity: 0, y: 50 }, // Initial state
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power1.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 50%', // Start animation when section is 40% into the viewport
              toggleActions: 'play none none reverse', // Play when entering, reverse when leaving
            },
          }
        );
      }
    });

    // Clean up ScrollTriggers when component unmounts
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
  <div className='container'>
    <section ref={aboutRef} className={`${styles.aboutSection}`}>
      {/* <div className={styles.svgBox2}>
      <svg width="900"
            height="900" viewBox="-300 0 1600 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d={`M27.9998 155.5C-45.6002 348.7 148.499 447.333 239.999 456C251.999 466 613.5 497.5 759.5 456C905.5 414.5 1039.5 231.5 1008 136C976.5 40.5 605 -32 436.5 41C268 114 120 -86 27.9998 155.5Z`}
              stroke={`url(#${'whiteGradient'})`}
              stroke-width="16"
              stroke-linecap="round"
            />
            <defs>
              <linearGradient id="whiteGradient">
                <stop stop-color="#57CCEC" />
                <stop offset="1" stop-color="#6600FF" />
              </linearGradient>
            </defs>
          </svg>
        </div> */}
        <h1 className={styles.title}>Events</h1>
    
      </section>
    </div>
  );
};

export default Events;
