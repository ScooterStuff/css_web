'use client';

import { useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Card from '../../src/components/Card'; // Import the Card component
import styles from '../../src/styles/Events.module.css';
import BackDrop from '@/components/BackDrop';

gsap.registerPlugin(ScrollTrigger);

// Define event data for multiple years
type EventYear = '23-24' | '24-25';

const eventData: Record<EventYear, { id: number; title: string; content: string; time: string }[]> = {
  '23-24': [
  { id: 0, title: 'Pub Crawl', content: 'Join with other Engineering societies to visit various pubs around UCL such as Phineas, Mully’s, Rocket, and more. It’s a great way to socialize, make new friends from different departments, and explore UCL’s social scene.', time: 'Thu Sep - 28 - 2023 18:00' },
  { id: 1, title: 'Picnic', content: 'We’re hosting a picnic at Regent’s Park where you can enjoy free food provided by the society while socializing with fellow members. Share your UCL Freshers’ Week experiences and get to know your peers in a relaxed environment.', time: 'Sat Sep - 30 - 2023 12:00' },
  { id: 2, title: 'Games Night', content: 'Come and join us for a variety of games including Xbox, Switch, board games, and cards. It’s a perfect opportunity to enjoy some fun with friends and meet other Computer Science Society members. Free pizza and drinks will be provided!', time: 'Wed Oct - 04 - 2023 18:00' },
  { id: 3, title: 'Welcome Fair', content: 'Visit our booth at the South Cloister during the Welcome Fair! We’ll be showcasing our society, handing out free merch, and introducing our values and activities to new freshers. A great way to kick off the year!', time: 'Mon Oct - 02 - 2023 10:00' },
  { id: 4, title: 'Internship Panel', content: 'Hear from students who have completed software engineering internships at top companies like Google, Amazon, and Bloomberg. Engage in a Q&A session to learn about the application and interview processes and tips for securing internships. Open to all students.', time: 'Thu Nov - 09 - 2023 17:00' },
  { id: 5, title: 'CV Roast', content: 'Bring your CV and get expert feedback from senior students. We’ll provide advice on how to improve your resume and get it internship-ready. A valuable session for students at any level.', time: 'Tue Nov - 14 - 2023 16:00' },
  { id: 6, title: 'Python BootCamp', content: 'Learn the basics of Python programming in this introductory bootcamp. Perfect for beginners or anyone looking to refresh their coding skills. Our friendly instructors will guide you through hands-on exercises.', time: 'Mon Oct - 23 - 2023 14:00' },
  { id: 7, title: 'Advent of Code', content: 'Join our coding competition during the Advent of Code challenge! Put your skills to the test and compete with fellow society members to solve coding problems. Fun and prizes await the top performers.', time: 'Thu Dec - 01 - 2023 10:00' },
  { id: 8, title: 'Trivia Night', content: 'Wrap up Term 1 with a Christmas Trivia Night! Show off your knowledge in various topics including computer science, Christmas traditions, and pop culture. Prizes, board games, and pizza included.', time: 'Fri Dec - 15 - 2023 19:00' },
  { id: 9, title: 'Bowling Social', content: 'Come bowl with us! Join your fellow society members for a fun evening at the bowling alley. A great chance to relax and socialize.', time: 'Fri Oct - 20 - 2023 17:30' },
  { id: 10, title: 'Terra Panel Event', content: 'Join us for a panel event by Terra, a Y-Combinator startup. Learn about their API that makes it easy to connect apps to wearables. Get insights into the world of health tech and meet the Terra team.', time: 'Wed Nov - 22 - 2023 16:00' },
  { id: 11, title: 'FHIR Hackathon', content: 'Take part in the FHIR-powered Healthcare Hackathon! Collaborate with Great Ormond Street Hospital and Roche to innovate healthcare solutions using FHIR data and APIs. A chance to work on challenges ranging from AI to patient communication.', time: 'Sat Feb - 12 - 2024 09:00' },
  { id: 12, title: 'HackLondon', content: 'UCL Technology Society and UCL Computer Science Society present HackLondon in collaboration with KCL Tech Society! Get ready for UCL’s flagship hackathon where creativity meets technology in a high-energy event.', time: 'Sat Mar - 23 - 2024 08:00' },
  { id: 13, title: 'Bowling Social 2', content: 'Another bowling social! A second chance to join us for a fun evening at the bowling alley. New faces and new strikes!', time: 'Fri Mar - 30 - 2024 18:00' },
  ],
  '24-25': [
    { id: 0, title: 'Event 0', content: 'Details of event 0 for 24-25', time: 'Mon Mar - 18 - 2025 04:00' },
    { id: 1, title: 'Event 1', content: 'Details of event 1 for 24-25', time: 'Tue Apr - 20 - 2025 06:30' },
  ],
};

const Events = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [selectedYear, setSelectedYear] = useState<EventYear>('23-24'); // Initialize with the year '23-24'

  useLayoutEffect(() => {
    const timelineItems = timelineRef.current?.querySelectorAll(`.${styles.timelineItem}`) as NodeListOf<Element>;
    if (!timelineItems.length) return;

    timelineItems.forEach((item) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [selectedYear]); // Re-run effect when the selected year changes

  const handleYearChange = (year: EventYear) => {
    setSelectedYear(year); // Update the year when a button is clicked
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
        <h1 className={styles.title}>
          {selectedYear} <br /> Events
        </h1>
      </section>
      <div className={styles.timelineContainer}>
        <div id="timeline" ref={timelineRef} className={styles.timeline}>
          {eventData[selectedYear].map((item, index) => (
            <div key={item.id} className={`${styles.timelineItem} ${index % 2 === 0 ? '' : styles.right}`}>
              <Card
                title={item.title}
                content={item.content}
                timestamp={item.time}
                width={`${index % 2 === 0 ? '45%' : '100%'}`} /* You can control the width here */
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;