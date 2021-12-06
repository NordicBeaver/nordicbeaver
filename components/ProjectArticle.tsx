import React from 'react';
import styles from './ProjectArticle.module.css';
import Image from 'next/image';

export interface Project {
  title: string;
  promoUrl: string;
  promoType: 'video' | 'picture';
  description: string;
  tags: string[];
}

export interface ProjectArticleProps {
  project: Project;
}

export default function ProjectArticle({ project }: ProjectArticleProps) {
  return (
    <article className={styles.article}>
      <div>
        {project.promoType === 'video' ? (
          <video controls className={styles.video}>
            <source src={project.promoUrl}></source>
          </video>
        ) : project.promoType === 'picture' ? (
          <Image src={project.promoUrl} alt="Project image" width="960" height="540"></Image>
        ) : null}
      </div>
      <div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul>
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
