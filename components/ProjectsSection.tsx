import React from 'react';
import Container from './Container';
import SectionHeading from './SectionHeading';
import styles from './ProjectsSection.module.css';
import ProjectArticle, { Project } from './ProjectArticle';

const projects: Project[] = [
  {
    title: 'Pendulums in ThreeJs',
    description: 'I was playing around with Three.js and I got an idea of this simple yet interesting animation.',
    tags: ['Web Development', 'JavaScript', 'TypeScript', 'WebGL', 'Three.js'],
    promoUrl: 'https://nordicbeaver.fra1.digitaloceanspaces.com/Pendulums.mp4',
    promoType: 'video',
  },
  {
    title: 'Tilter',
    description: 'My attempt to recreate a labyrinth game in a browser.',
    tags: ['Web Development', 'Game Development', 'JavaScript', 'TypeScript'],
    promoUrl: 'https://nordicbeaver.fra1.digitaloceanspaces.com/Tilter_promo.mov',
    promoType: 'video',
  },
  {
    title: 'BeardyBear',
    description:
      "An example of a small website for a local business. I'm doing this mainly for my YouTube series where I try to show how to make something like this.",
    tags: ['Web Development', 'JavaScript', 'TypeScript', 'NodeJs', 'NestJs', 'Prisma', 'React', 'NextJs'],
    promoUrl: 'https://nordicbeaver.fra1.digitaloceanspaces.com/beardybear-promo-pic.jpg',
    promoType: 'picture',
  },
  {
    title: 'Fourier Painter',
    description:
      "A simple web application, where you can draw a shape and then it's redrawn just by rotating sticks using Fourier Transform.",
    tags: ['Web Development', 'JavaScript', 'TypeScript', 'Canvas', 'Math'],
    promoUrl: 'https://nordicbeaver.fra1.digitaloceanspaces.com/Fourier_promo.mov',
    promoType: 'video',
  },
];

export default function ProjectsSection() {
  return (
    <section className={styles.projectsSection}>
      <Container>
        <SectionHeading>My Projects</SectionHeading>
        {projects.map((project) => (
          <ProjectArticle project={project} key={project.title}></ProjectArticle>
        ))}
      </Container>
    </section>
  );
}
