import React from 'react';
import styles from './AboutMeSection.module.css';
import Container from './Container';
import Section from './Section';
import SectionHeading from './SectionHeading';

export default function AboutMeSection() {
  return (
    <Section>
      <Container>
        <SectionHeading>What I Do</SectionHeading>
        <p>
          I graduated a univesity as a mathematician/programmer about 6 years ago and I&apos;ve worked as a developer
          since then. I got to use many different languages and technologies, but right now I&apos;m most interested in
          web development. Particularly, in making complex web applications using Typescript/NodeJs/React.
        </p>
      </Container>
    </Section>
  );
}
