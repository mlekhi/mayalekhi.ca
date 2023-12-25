import styles from "./Projects.module.css";
import { Link } from 'react-router-dom';
import DevCard from "../../components/Card2/devCard";
import { projects } from "./projectList";

export default function Dev() {
  return (
    <main className={styles.main}>
      <div className={styles.projects}>
        <div className={styles.header}>
          <h2>I'm passionate about developing with purpose.</h2>
          <p>
            I love unraveling complex problems, leveraging technology to bridge gaps, and 
            crafting tech solutions that center around human needs. 
            Whether it's supporting accessible education or improving patient care, I code for the potential
            technology has to aid and enrich our lives.
          </p>
        </div>
        <div className={styles.devGrid}>
          {projects.map((project) =>
            project.disabled ? (
              <DevCard
                key={project.title}
                title={project.title}
                description={project.description}
                tags={project.tags}
                imageURL={project.imageURL}
                colour={project.colour}
                disabled={project.disabled}
              />
            ) : (
              <Link
                href={`/dev/${encodeURIComponent(project.title)}`}
                key={project.title}
                passHref
              >
                <DevCard
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  imageURL={project.imageURL}
                  colour={project.colour}
                  disabled={project.disabled}
                />
              </Link>
            )
          )}
        </div>
      </div>
    </main>
  );
}