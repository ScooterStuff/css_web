'use client'; // Add this to ensure the About page runs on the client
import '../../src/styles/globals.css';

import { useLayoutEffect, useRef } from 'react';
import styles from '../../src/styles/About.module.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import funny from '../../public/image/funny.jpg';
import Image from 'next/image';
import BackDrop from '@/components/BackDrop';


gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);
  const academicRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const sections = [aboutRef.current, detailsRef.current, academicRef.current, socialRef.current];

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
    <div className={styles.container}>
      <BackDrop/>

      <section ref={aboutRef} className={`${styles.aboutSection}`}>
      <div className={styles.svgBox2}>
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
                <stop stop-color="#57CCEC80" />
                <stop offset="1" stop-color="#6600FF40" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <h1 className={styles.title}>About</h1>
    
      </section>

      <section ref={detailsRef} className={styles.detailsSection}>
        <h2 className={styles.heading}>Who are we?</h2>
        <div className={styles.contentWrapper}>
          <div className={styles.textWrapper}>
            <p className={styles.text}>
              A way to add style to your webpage, duh! Just kidding—though we do love a good coding joke! We're a society created by and for students of Computer Science at UCL. Whether you're diving deep into algorithms or just figuring out your first line of code, we're here to build a community that thrives on curiosity, collaboration, and creativity.
            </p>
            <p className={styles.text}>
              While we're proudly funded by the department, membership isn't exclusive to Computer Science students! If you appreciated that little CSS joke up top, you're already one of us. 👾
            </p>
          </div>
          
          <div className={styles.imageWrapper}>
            <Image src={funny} alt="Society Image 1" width={500} height={500} />
            <Image src={funny} alt="Society Image 2" width={500} height={500} />
          </div>
        </div>
      </section>

      <section ref={academicRef} className={`${styles.anotherSection}`}>
        <h2 className={styles.heading}>Academics</h2>
        <p className={styles.text}>
          At UCL Computer Science Society, we are dedicated to supporting the academic journey of our members. We organize a wide range of workshops, talks, and coding bootcamps designed to enhance technical skills, from beginner to advanced levels. Our events cover a variety of topics, including programming languages, data science, AI, software development, and cybersecurity.
        </p>

        {/* SVG Shape Divider */}
        {/* <div className={styles.customShapeDividerTop1726169343}>
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className={styles.shapeFill}
            ></path>
          </svg>
        </div> */}
      </section>
      <section ref={socialRef} className={`${styles.anotherSection}`}>
        <h2 className={styles.heading}>Socials</h2>
        <p className={styles.text}>
        At UCL Computer Science Society, we believe in balancing work with play! Our social events are all about bringing people together in a relaxed, fun environment. From casual picnic hangouts in the park to competitive bowling nights, and game nights filled with laughter, there's something for everyone. Whether you're a board game enthusiast, love trying out new sports, or just want to chill with fellow students, our socials are the perfect way to make new friends and unwind from academic life. Come join us—fun is always on the agenda!
        </p>
      </section>
    </div>
  );
};

export default About;
