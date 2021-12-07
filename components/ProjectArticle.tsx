import React from 'react';
import styles from './ProjectArticle.module.css';
import Image from 'next/image';
import KeywordsList from './KeywordsList';
import * as feather from 'react-feather';

export interface ProjectLinks {
  live?: string;
  github?: string;
  youtube?: string;
}

export interface Project {
  title: string;
  promoUrl: string;
  promoType: 'video' | 'picture';
  description: string;
  tags: string[];
  links: ProjectLinks;
}

export interface ProjectArticleProps {
  project: Project;
}

export default function ProjectArticle({ project }: ProjectArticleProps) {
  return (
    <article className={styles.article}>
      <div className={styles.promo}>
        {project.promoType === 'video' ? (
          <video controls className={styles.video}>
            <source src={project.promoUrl}></source>
          </video>
        ) : project.promoType === 'picture' ? (
          <Image src={project.promoUrl} alt="Project image" width="960" height="540"></Image>
        ) : null}
      </div>
      <h3 className={styles.title}>{project.title}</h3>
      <div className={styles.projectData}>
        <p className={styles.projectDescription}>{project.description}</p>
        <KeywordsList keywords={project.tags}></KeywordsList>
        <div>
          {project.links.live ? (
            <a
              href={project.links.live}
              className={styles.link}
              target="_blank"
              rel="noreferrer"
              title={`Live Version - ${project.title}`}
            >
              <feather.Link></feather.Link>
            </a>
          ) : null}
          {project.links.github ? (
            <a
              href={project.links.github}
              className={styles.link}
              target="_blank"
              rel="noreferrer"
              title={`GitHub - ${project.title}`}
            >
              <feather.GitHub></feather.GitHub>
            </a>
          ) : null}
          {project.links.youtube ? (
            <a
              href={project.links.youtube}
              className={styles.link}
              target="_blank"
              rel="noreferrer"
              title={`YouTube - ${project.title}`}
            >
              <feather.Youtube></feather.Youtube>
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
