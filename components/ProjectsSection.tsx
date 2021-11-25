import React from 'react';
import Container from './Container';
import SectionHeading from './SectionHeading';
import styles from './ProjectsSection.module.css';
import ProjectArticle, { Project } from './ProjectArticle';

const projects: Project[] = [
  {
    title: 'Pendulums in ThreeJs',
    description: 'I was playing around with Three.js and I got an idea of this simple yet interesting animation.',
    tags: ['web development', 'javascript', 'typescript', 'WebGL', 'Three.js'],
    promoVideoUrl: 'https://nordicbeaver.fra1.digitaloceanspaces.com/Pendulums.mp4',
  },
  {
    title: 'Tilter',
    description: 'My attempt to recreate a labyrinth game in a browser',
    tags: ['web development', 'game development', 'javascript', 'typescript'],
    promoVideoUrl: 'https://nordicbeaver.fra1.digitaloceanspaces.com/Tilter_promo.mov',
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
