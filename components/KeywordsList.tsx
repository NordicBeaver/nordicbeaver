import React from 'react';
import styles from './KeywordsList.module.css';

export interface KeywordsListProps {
  keywords: string[];
}

export default function KeywordsList({ keywords }: KeywordsListProps) {
  return (
    <ul className={styles.list}>
      {keywords.map((keyword) => (
        <li key={keyword} className={styles.listItem}>
          {keyword}
        </li>
      ))}
    </ul>
  );
}
