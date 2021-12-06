import React from 'react';
import Container from './Container';
import KeywordsList from './KeywordsList';
import SectionHeading from './SectionHeading';
import styles from './SkillsSection.module.css';

export default function SkillsSection() {
  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'Typescript',
    'NodeJs',
    'NestJs',
    'SQL',
    'Prisma',
    'React',
    'Redux',
    'React Query',
    'NextJs',
    'Python',
    'TensorFlow',
    'C#',
    '.NET',
    'ASP.NET',
    'C++',
  ];

  return (
    <section className={styles.skillsSection}>
      <Container>
        <SectionHeading>Skills</SectionHeading>
        <p className={styles.text}>
          Here is a bunch of stuff that I have experience with. Not sure if anyone except search engines is gonna read
          this.
        </p>
        <KeywordsList keywords={skills}></KeywordsList>
      </Container>
    </section>
  );
}
