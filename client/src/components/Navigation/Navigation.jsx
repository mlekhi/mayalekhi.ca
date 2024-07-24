import React, { useState } from "react";
import * as Icons from "./icons";
import styles from "./Navigation.module.css";
import { motion } from "framer-motion";
import { useMatch, useResolvedPath } from "react-router-dom";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const iconAnimate = {
    hover: { scale: 1.25, transition: { ease: "easeOut", duration: 0.6 } },
    click: { transition: { ease: "easeOut", duration: 0.6 } },
  };

  const CustomLink = ({ to, children, ...props }) => {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });

    return (
      <Link to={to} {...props}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={isActive ? styles["nav-item-active"] : styles["nav-item"]}
        >
          <p>{children}</p>
        </motion.div>
      </Link>
    );
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className={styles.banner}>
        <div>
          <a className={styles.webtitle} href="/">maya lekhi</a>
        </div>
        <div className={styles["nav-bar"]}>
          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="/About">About</CustomLink>
          <CustomLink to="/Projects">Projects</CustomLink>
          {/* <CustomLink to="/Travels">Travels</CustomLink> */}
          <CustomLink to="/Blog">Blog</CustomLink>
        </div>
        <div className={styles["nav-icons-div"]}>
          <motion.a
            whileHover="hover"
            whileTap="click"
            variants={iconAnimate}
            className={styles["nav-icon"]}
            target="_blank"
            href="https://www.linkedin.com/in/maya-l/"
          >
            <Icons.LinkedIn />
          </motion.a>
          <motion.a
            whileHover="hover"
            whileTap="click"
            variants={iconAnimate}
            className={styles["nav-icon"]}
            target="_blank"
            href="https://github.com/mlekhi"
          >
            <Icons.GitHub />
          </motion.a>
          <motion.a
            whileHover="hover"
            whileTap="click"
            variants={iconAnimate}
            className={styles["nav-icon"]}
            target="_blank"
            href="mailto:maya.lekhi1@gmail.com"
          >
            <Icons.Email />
          </motion.a>
        </div>
        <div className={styles.hamburgerMenu} onClick={toggleMenu}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>
      </div>
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <CustomLink to="/" onClick={toggleMenu}>Home</CustomLink>
          <CustomLink to="/About" onClick={toggleMenu}>About</CustomLink>
          <CustomLink to="/Projects" onClick={toggleMenu}>Projects</CustomLink>
          {/* <CustomLink to="/Travels" onClick={toggleMenu}>Travels</CustomLink> */}
          <CustomLink to="/Blog" onClick={toggleMenu}>Blog</CustomLink>
        </div>
      )}
    </>
  );
};

export default Navigation;
