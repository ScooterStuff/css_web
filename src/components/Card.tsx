import React from 'react';
import styles from '../styles/Card.module.css';

interface CardProps {
  title: string;
  content: string;
  timestamp: string;
  width?: string; // Optional width prop to control card size
}

const Card: React.FC<CardProps> = ({ title, content, timestamp, width }) => {
  return (
    <div className={styles.card} style={{ width: width || '100%' }}>
      <h2 className={styles.cardTitle}>{title}</h2>
      <p className={styles.cardContent}>{content}</p>
      <span className={styles.cardTimestamp}>{timestamp}</span>
    </div>
  );
};

export default Card;
