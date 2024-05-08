import React from "react";
import * as Icons from "./icons";
import styles from "./Navigation.module.css";
import { motion } from "framer-motion";
import { useMatch, useResolvedPath } from "react-router-dom";
import { Link } from "react-router-dom";

const Navigation = () => {
  const iconAnimate = {
    hover: { scale: 1.25, transition: { ease: "easeOut", duration: 0.6 } },
    click: { transition: { ease: "easeOut", duration: 0.6 } },
  };

  const CustomLink = ({ to, children, props }) => {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });

    return (
      <Link to={to} {...props}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={isActive ? "nav-item-active" : "nav-item"}
        >
          <p>{children}</p>
        </motion.div>
      </Link>
    );
  };

  return (
    <div className={"banner"}>
      <div>
        <a className={styles.webtitle} href="/">maya lekhi</a>
      </div>
      <div className={"nav-icons-div"}>
        <motion.a
          whileHover="hover"
          whileTap="click"
          variants={iconAnimate}
          className={"nav-icon"}
          target="_blank"
          href="https://www.linkedin.com/in/maya-l/"
        >
          <Icons.LinkedIn />
        </motion.a>
        <motion.a
          whileHover="hover"
          whileTap="click"
          variants={iconAnimate}
          className={"nav-icon"}
          target="_blank"
          href="https://github.com/mlekhi"
        >
          <Icons.GitHub />
        </motion.a>
        <motion.a
          whileHover="hover"
          whileTap="click"
          variants={iconAnimate}
          className={"nav-icon"}
          target="_blank"
          href="mailto:maya.lekhi1@gmail.com"
        >
          <Icons.Email />
        </motion.a>
      </div>
      <div className={"nav-bar float-middle"} style={{ border: "none" }}>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/About">About</CustomLink>
        <CustomLink to="/Projects">Projects</CustomLink>
      </div>
    </div>
  );
};

export default Navigation;