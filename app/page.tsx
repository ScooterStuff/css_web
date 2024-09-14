"use client";

import styles from '../src/styles/Home.module.css';
import { CSSProperties } from 'react';
import React, { useState } from 'react';

export default function Home() {
  // State to toggle between normal and inverted color schemes
  const [isInverted, setIsInverted] = useState(false);

  // Function to toggle color mode
  const toggleColorMode = () => {
    setIsInverted(!isInverted);
  };

  return (
    <main className={isInverted ? styles.inverted : ''}>
      <div className={styles.container}>
        <div className={styles.bubbles}>
          {Array.from({ length: 40 }).map((_, index) => {
            const leftOffset = Math.random() * 100; // Random left percentage (0-100%)

            return (
              <span
                key={index}
                style={
                  {
                    '--i': index + 10, // Example offset for animation delay
                    // top: `${topOffset}%`,  // Random top position
                    left: `${leftOffset}%`, // Random left position
                  } as CSSProperties
                }
              ></span>
            );
          })}
        </div>
      </div>

      <section className={styles.heroSection}>
        <div className={styles.heroText}>
          <h1>
            Welcome to the UCL <span className={styles.gradientText}>Computer Science Society</span>
          </h1>
          <p>This is the homepage of our society&apos;s website.</p>
        </div>
        <div className={styles.svgBox} onClick={toggleColorMode}>
          <svg
            width="900"
            height="900"
            viewBox="-100 0 600 250"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d={`M106.874 19L26.8882 80.6644C16.3983 88.7515 16.5249 104.617 27.1425 112.536L93.9767 162.381C101.508 167.998 111.933 167.615 119.033 161.462L270.712 30C278.051 23.6393 288.899 23.4701 296.433 29.5988L361.592 82.6066C370.865 90.1504 371.494 104.09 362.937 112.438L301.878 172`}
              stroke={`url(#${isInverted ? 'redYellowGradient' : 'blueGradient'})`}
              stroke-width="38"
              stroke-linecap="round"
            />
            <defs>
              <linearGradient id="blueGradient">
                <stop stop-color="#0751E8" />
                <stop offset="1" stop-color="#57CCEC" />
              </linearGradient>
              <linearGradient id="redYellowGradient">
                <stop stop-color="#FF4500" />
                <stop offset="1" stop-color="#FFA500" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>
    </main>
  );
}
