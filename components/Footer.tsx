import React from 'react';
import Container from './Container';
import styles from './Footer.module.css';
import SocialLinks from './SocialLinks';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.content}>
          <span className={styles.trademark}>2021 - Nordic Beaver</span>
          <SocialLinks></SocialLinks>
        </div>
      </Container>
    </footer>
  );
}
