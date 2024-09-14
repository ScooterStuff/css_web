// src/components/Footer.tsx
import styles from '../styles/Footer.module.css';  // Importing Footer styles

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Computer Science Society. All rights reserved.</p>
      <div className={styles.socials}>
        <a href="https://studentsunionucl.org/clubs-societies/computer-science-society" target="_blank" rel="noopener noreferrer">Students&apos; Union</a>
        <a href="https://www.facebook.com/p/UCL-Computer-Science-Society-UCL-CSS-100075987732147/" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://www.instagram.com/uclcss" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://www.linkedin.com/company/ucl-computer-science-society/mycompany/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;
