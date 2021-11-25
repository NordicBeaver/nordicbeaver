import React from 'react';
import styles from './ProjectArticle.module.css';

export interface Project {
  title: string;
  promoVideoUrl: string;
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
        <video controls className={styles.video}>
          <source src={project.promoVideoUrl}></source>
        </video>
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
