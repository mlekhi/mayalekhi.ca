import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";
import { motion } from "framer-motion";
import mixpanel from "mixpanel-browser";

mixpanel.init("2b837b3806273e1cc3e621de8faee49e", {
  debug: true,
  persistence: "localStorage",
  ignore_dnt: true,
});

const CustomLink = ({ children, onClick }) => {
  const handleClick = () => {
    onClick();
  };

  const justifyOptions = ["flex-start", "center", "flex-end"]; 
  const randomJustify = justifyOptions[Math.floor(Math.random() * justifyOptions.length)];

  return (
    <div onClick={handleClick} style={{ display: 'flex', justifyContent: randomJustify, alignItems: 'center'}}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="body-item"
      >
        <p>{children}</p>
      </motion.div>
    </div>
  );
};

function Home() {
  const iconAnimate = {
    hover: { rotate: 360, transition: { ease: "easeOut", duration: 0.6 } },
    click: { rotate: 0, transition: { ease: "easeOut", duration: 0.6 } },
  };

  useEffect(() => {
    mixpanel.track("Page Viewed");
  }, []);

  const linkSets = {
    SoftwareEngineer: [
      "/Projects",
      "https://github.com/mlekhi",
    ],
    Researcher: [
      "https://castellanilab.com/members/",
      "https://csfjournal.com/volume-5-issue-2/2022/10/26/tackling-canadas-discriminatory-water-crisis-optimizing-scoby-biofilms-to-develop-renewable-living-filter-membranes",
    ],
    Poet: [
      "https://www.notion.so/maya-lekhi/Tainted-59224276092a4808998521ae5ba01e1b?pvs=4",
      "https://www.notion.so/maya-lekhi/Interprovincial-cc56a4590c5a4ca9b1e203a5972f94e6?pvs=4",
      "https://www.notion.so/maya-lekhi/A-Reminder-of-Affection-ead2cb0c62694e45a641c1e9bc4d12d1?pvs=4",
      "https://www.notion.so/maya-lekhi/Tikka-127b0bd05eeb42d0bc384dc8d70a5171?pvs=4",
      "https://www.notion.so/maya-lekhi/Smoke-Rising-1378ff0c26a045e58c464c24409adbf7?pvs=4",
    ],
    Founder: [
      "/About",
    ],
    CommunityBuilder: [
      "https://www.socratica.info",
      "https://lu.ma/moment.um",
      "https://www.foundersnetwork.ca",
      "https://www.project5k.ca",
    ],
  };

  const getRandomLink = (key) => {
    const links = linkSets[key];
    const randomIndex = Math.floor(Math.random() * links.length);
    return links[randomIndex];
  };

  const handleLinkClick = (key) => {
    const randomLink = getRandomLink(key);
    window.open(randomLink, "_blank");
  };

  return (
    <div className={"content-body"}>
      <div
        className={`${
          styles["home-hero"]
        } ${"flex flex-col-reverse lg:flex-row"}`}
      >
        <div className={`${styles["home-hero-text"]} ${"lg:w-[60%] w-full"}`}>
          <div className="header-container">
            <h2>Hi! I'm Maya Lekhi.</h2>
            <CustomLink onClick={() => handleLinkClick("SoftwareEngineer")}>
              Software Engineer
            </CustomLink>
            <CustomLink onClick={() => handleLinkClick("Researcher")}>
              Researcher
            </CustomLink>
            <CustomLink onClick={() => handleLinkClick("Poet")}>
              Poet
            </CustomLink>
            <CustomLink onClick={() => handleLinkClick("Founder")}>
              Founder
            </CustomLink>
            <CustomLink onClick={() => handleLinkClick("CommunityBuilder")}>
              Community-Builder
            </CustomLink>
            <div className={styles["button-container"]}>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={iconAnimate}
                className={styles["button"]}
                href="/Home"
              >
                <p>About Me</p>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
