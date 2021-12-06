import React from 'react';
import Container from './Container';
import SectionHeading from './SectionHeading';
import styles from './SkillsSection.module.css';

export default function SkillsSection() {
  return (
    <section className={styles.skillsSection}>
      <Container>
        <SectionHeading>Skills</SectionHeading>
        <p className={styles.text}>
          Here is a bunch of stuff that I have experience with. Not sure if anyone except search engines is gonna read
          this.
        </p>
        <ul className={styles.skillsList}>
          <li className={styles.SkillsListItem}>HTML</li>
          <li className={styles.SkillsListItem}>CSS</li>
          <li className={styles.SkillsListItem}>JavaScript</li>
          <li className={styles.SkillsListItem}>Typescript</li>
          <li className={styles.SkillsListItem}>NodeJs</li>
          <li className={styles.SkillsListItem}>NestJs</li>
          <li className={styles.SkillsListItem}>SQL</li>
          <li className={styles.SkillsListItem}>Prisma</li>
          <li className={styles.SkillsListItem}>React</li>
          <li className={styles.SkillsListItem}>Redux</li>
          <li className={styles.SkillsListItem}>React Query</li>
          <li className={styles.SkillsListItem}>NextJs</li>
          <li className={styles.SkillsListItem}>Python</li>
          <li className={styles.SkillsListItem}>TensorFlow</li>
          <li className={styles.SkillsListItem}>C#</li>
          <li className={styles.SkillsListItem}>.NET</li>
          <li className={styles.SkillsListItem}>ASP.NET</li>
          <li className={styles.SkillsListItem}>C++</li>
        </ul>
      </Container>
    </section>
  );
}
