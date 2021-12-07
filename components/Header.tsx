import React from 'react';
import Container from './Container';
import styles from './Header.module.css';
import SocialLinks from './SocialLinks';

export default function Header() {
  return (
    <header>
      <Container>
        <div className={styles.content}>
          <SocialLinks></SocialLinks>
        </div>
      </Container>
    </header>
  );
}
