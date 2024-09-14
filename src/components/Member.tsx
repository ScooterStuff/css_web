"use client";
import Image, { StaticImageData } from 'next/image';
import styles from '../styles/Member.module.css';

interface MemberProps {
    name: string;
    role: string;
    imageSrc: StaticImageData;
    country?: string;
    hobbies?: string;
}

const Member: React.FC<MemberProps> = ({ name, role, imageSrc, country, hobbies }) => {
    return (
      <div className={styles.card}>
        {/* The image fills the entire card */}
        <Image src={imageSrc} alt={`${name}'s image`} className={styles.cardImage} layout="fill" />

        {/* The name and role are positioned at the bottom of the card */}
        <h3 className={styles.cardName}>{name}</h3>
        <p className={styles.cardRole}>{role}</p>

        {/* The overlay with additional details */}
        <div className={styles.cardOverlay}>
          <p className={styles.detailText}><strong>Country:</strong> {country || 'Unknown'}</p>
          <p className={styles.detailText}><strong>Hobbies:</strong> {hobbies || 'Not specified'}</p>
        </div>
      </div>
    );
};

export default Member;
