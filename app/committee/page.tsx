'use client';

import { useLayoutEffect, useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from '../../src/styles/Committee.module.css';
import '../../src/styles/globals.css';
import scooter from '../../public/image/Scooter.png';
import ashley from '../../public/image/Ashley.png';
import fahad from '../../public/image/Fahad.png';
import carolina from '../../public/image/Carolina.png';
import lucia from '../../public/image/Lucia.png';
import suhas from '../../public/image/Suhas.png';
import ahmed from '../../public/image/Ahmed.png';
import christy from '../../public/image/Christy.png';
import abdullah from '../../public/image/Abdullah.png';
import Image from 'next/image';
import Member from '../../src/components/Member'; // Import the Member component

import SCOOTER from '../../public/image/SCO.jpg';
import ASHLEY from '../../public/image/ASH.jpg';
import FAHAD from '../../public/image/FAH.jpg';
import CAROLINA from '../../public/image/CAR.jpg';
import LUCIA from '../../public/image/LUC.jpg';
import SUHAS from '../../public/image/SUH.jpg';
import AHMED from '../../public/image/AHM.jpg';
import CHRISTY from '../../public/image/CHRISTY.jpg';
import ABDULLAH from '../../public/image/ABD.jpg';
import { StaticImageData } from "next/image"
import BackDrop from '@/components/BackDrop';


type CommitteeYear = '23-24' | '24-25' | '25-26';
// Define committee data for multiple years
const committeeData: Record<CommitteeYear, { name: string; role: string; imageSrc: StaticImageData; country: string; hobbies: string; module: string }[]> = {
  '23-24': [
    { name: 'Fahad', role: 'President', imageSrc: FAHAD, country: 'India', hobbies: 'Gaming, Cricket, Reading', module: 'Design and Professional Skills' },
    { name: 'Ashley', role: 'Vice President', imageSrc: ASHLEY, country: 'Hong Kong', hobbies: 'Mario Cart',module: 'Design and Professional Skills' },
    { name: 'Lucia', role: 'Treasurer', imageSrc: LUCIA, country: 'South Korea/ Hong Kong', hobbies: 'Tennis, Duck Chess',module: 'Algorithms' },
    { name: 'Ahmed', role: 'General Secretary', imageSrc: AHMED, country: 'Pakistan', hobbies: 'Gaming, Running',module: 'Design and Professional Skills' },
    { name: 'Carolina', role: 'Welfare Officer', imageSrc: CAROLINA, country: 'Portugal', hobbies: 'Dance, Arts, TikTok',module: 'Algorithms' },
    { name: 'Christy', role: 'Events Executive', imageSrc: CHRISTY, country: 'Hong Kong', hobbies: 'Crochet, TikTok',module: 'Theory of Computation' },
    { name: 'Suhas', role: 'Head of Events', imageSrc: SUHAS, country: 'Singapore', hobbies: 'Tennis, Table Tennis, FPV Quadcopters, Gaming',module: 'Design and Professional Skills' },
    { name: 'Abdullah', role: 'Head of Operations', imageSrc: ABDULLAH, country: 'Pakistan', hobbies: 'Cricket, Tennis, Table Tennis',module: 'Design and Professional Skills' },
    { name: 'Scooter', role: 'Head of Marketing', imageSrc: SCOOTER, country: 'Thailand', hobbies: 'Film, Badminton, Trivia', module: 'Theory of Computation' },
  ],
  '24-25': [
    { name: 'John', role: 'President', imageSrc: FAHAD, country: 'Canada', hobbies: 'Reading, Coding', module: 'Design and Professional Skills' },
    { name: 'Alice', role: 'Vice President', imageSrc: ASHLEY, country: 'France', hobbies: 'Cooking, Writing', module: 'Design and Professional Skills' },
    // Add more members for the year 24-25
  ],
  '25-26': [
    { name: 'Michael', role: 'President', imageSrc: FAHAD, country: 'Germany', hobbies: 'Traveling, Coding', module: 'Design and Professional Skills' },
    { name: 'Emma', role: 'Vice President', imageSrc: ASHLEY, country: 'Spain', hobbies: 'Dancing, Blogging', module: 'Design and Professional Skills' },
    // Add more members for the year 25-26
  ],
};


gsap.registerPlugin(ScrollTrigger);

const ParallaxImage = ({ src, alt, dataValue }: { src: any; alt: string; dataValue: string }) => (
  <Image
    src={src}
    alt={alt}
    className="parallax-object"
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      zIndex: 1,
    }}
    data-value={dataValue}
  />
);

const Committee = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);
  const [selectedYear, setSelectedYear] = useState<CommitteeYear>('23-24');

  useLayoutEffect(() => {
    const sections = [aboutRef.current, detailsRef.current];

    sections.forEach((section) => {
      if (section) {
        gsap.fromTo(
          section,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power1.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 50%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    const parallax = (e: MouseEvent) => {
      document.querySelectorAll<HTMLDivElement | HTMLHeadingElement>('.parallax-object').forEach((move) => {
        const moving_value = move.getAttribute('data-value');
        if (moving_value) {
          const value = Number(moving_value);
          const x = (e.clientX * value) / 100;
          const y = (e.clientY * value) / 100;

          move.style.transform = `translateX(${x}px) translateY(${y}px)`;
        }
      });
    };

    document.addEventListener('mousemove', parallax);

    return () => {
      document.removeEventListener('mousemove', parallax);
    };
  }, []);

  const handleYearChange = (year: CommitteeYear) => {
    setSelectedYear(year);
  };

  return (
    <div className="container">
      {/* Year Selector Button */}
      <div className={styles.yearSelector}>
        <button onClick={() => handleYearChange('23-24')} className={selectedYear === '23-24' ? styles.active : ''}><p>23-24</p></button>
        <button onClick={() => handleYearChange('24-25')} className={selectedYear === '24-25' ? styles.active : ''}><p>24-25</p></button>
      </div>
      <BackDrop/>

      <section ref={aboutRef} className={`${styles.aboutSection}`}>
        <h1 className={`${styles.title} parallax-object`} data-value="3">
          {selectedYear} <br /> Committee
        </h1>

         {/* Parallax images */}
         <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh' }}>
          <ParallaxImage src={scooter} alt="Scooter" dataValue="-5" />
          <ParallaxImage src={fahad} alt="Fahad" dataValue="2" />
          <ParallaxImage src={carolina} alt="Carolina" dataValue="3" />
          <ParallaxImage src={ashley} alt="Ashley" dataValue="5" />
          <ParallaxImage src={lucia} alt="Lucia" dataValue="-2" />
          <ParallaxImage src={suhas} alt="Suhas" dataValue="-3" />
          <ParallaxImage src={christy} alt="Christy" dataValue="4" />
          <ParallaxImage src={ahmed} alt="Ahmed" dataValue="3" />
          <ParallaxImage src={abdullah} alt="Abdullah" dataValue="4" />
        </div>
      </section>

      <section className={styles.detailsSection}>
        <h2 className={styles.heading}>Members</h2>
        <div className={styles.gridWrapper}>
          {committeeData[selectedYear].map((member, index) => (
            <Member key={index} name={member.name} role={member.role} imageSrc={member.imageSrc} country={member.country} hobbies={member.hobbies} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Committee;
