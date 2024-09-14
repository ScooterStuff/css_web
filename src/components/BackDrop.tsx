// src/components/BackDrop.tsx
import styles from '../styles/BackDrop.module.css'; // Create a separate CSS file for BackDrop styles if needed

const BackDrop = () => {
  return (
    <div className={styles.svgBox}>
      <svg
        width="900"
        height="900"
        viewBox="-100 0 600 250"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={`M106.874 19L26.8882 80.6644C16.3983 88.7515 16.5249 104.617 27.1425 112.536L93.9767 162.381C101.508 167.998 111.933 167.615 119.033 161.462L270.712 30C278.051 23.6393 288.899 23.4701 296.433 29.5988L361.592 82.6066C370.865 90.1504 371.494 104.09 362.937 112.438L301.878 172`}
          stroke={`url(#blueGradient)`}
          strokeWidth="38"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="blueGradient">
            <stop stopColor="#0751E8" />
            <stop offset="1" stopColor="#57CCEC" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default BackDrop;
