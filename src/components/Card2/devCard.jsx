import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./devCard.module.css";

const DevCard = ({ title, description, tags, imageURL, colour, disabled }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    const formattedTitle = title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");
      navigate(`/dev/${formattedTitle}`);
    };

  return (
    <div
      className={!disabled ? styles.card : styles.cardDisabled}
      onClick={disabled ? undefined : handleClick}
    >
      <div className={styles.imageBlock}>
        <img
          className={!disabled ? styles.image : styles.imageDisabled}
          src={imageURL}
          alt={title}
        />
      </div>
      <div className={styles.info} style={{ backgroundColor: colour }}>
        <div className={styles.infoMain}>
          <h5>{title}</h5>
          <h1>{description}</h1>
        </div>
        <div>
          <div className={styles.tagList}>
            {tags.map((tag, index) => (
              <p key={index} className={styles.tag}>
                {tag}
              </p>
            ))}
          </div>
          {!disabled && (
            <div className={styles.arrow}>
              <img src="/arrow.svg" alt="->" width={32} height={32} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DevCard;
