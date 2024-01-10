import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './Project.module.css';
import { projects } from '../projectList';

export default function Project(props) {
  const { project: projectParam } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    if (projectParam) {
      const projectTitle = decodeURIComponent(projectParam);
      const foundProject = projects.find((p) => p.title === projectTitle);

      setProject(foundProject || null);
    }
  }, [projectParam]);

  if (!project) return <p>Error: Project not found.</p>;

  console.log(`${project.imageURL}`)

  return (
    <div className={styles.main}>
      <div className={styles.navWrap}></div>
      <div className={styles.header}>
        <Link to="/Projects" className={styles.backlink}>
          <p className={styles.backarrow}>{"<- "}</p>
          <p>Back to Projects</p>
        </Link>

        <div className={styles.flex}>
          <div>
            <img
              src={`/${project.imageURL}`}
              alt={project.title}
              className={styles.projectImg}
            />
            <div className={styles.projectLinks}>
              {project.links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  className={styles.projectLink}
                >
                  {link.site}
                  <img
                    src="/arrow.svg"
                    alt="->"
                    width={28}
                    height={28}
                    className={styles.projectArrow}
                  />
                </a>
              ))}
            </div>
          </div>
          <div className={styles.title}>
            <h5>{project.title}</h5>
            <h2>{project.description}</h2>
            <div className={styles.details}>
              <div className={styles.tagList}>
                {project.tags.map((tag, index) => (
                  <p key={index} className={styles.tag}>
                    {tag}
                  </p>
                ))}
              </div>
            </div>
            <p style={{ whiteSpace: "pre-line" }}>{project.paragraph}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
