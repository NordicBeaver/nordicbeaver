import React from 'react';
import Container from './Container';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <div className={styles.hero}>
      <Container>
        <h1 className={styles.heading}>Nordic Beaver</h1>
        <p className={styles.subheading}>
          Hi! You can call me <em>Eli</em>. I am a <em>full-stack developer</em>. <br />
          This website is an attempt to show you how <em>good</em> I am.
        </p>
      </Container>
    </div>
  );
}
