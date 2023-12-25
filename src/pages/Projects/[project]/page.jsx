import React, { useEffect, useState } from "react";
import { projects } from "../Projects";
import styles from "./Project.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Project({ params }) {
  const [project, setProject] = useState(null);

  useEffect(() => {
    const projectTitle = decodeURIComponent(params.project);

    const foundProject = projects.find((p) => p.title === projectTitle);
    setProject(foundProject || null);
  }, [params]);

  if (!project) return <p></p>;

  return (
    <div className={styles.main}>
      <div className={styles.navWrap}></div>
      <div className={styles.header}>
        <Link href={"/Projects"} className={styles.backlink}>
          <p className={styles.backarrow}>{"<- "}</p>
          <p>Back to Projects</p>
        </Link>

        <div className={styles.flex}>
          <div>
            <img
              src={project.imageURL}
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
                  <Image
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
