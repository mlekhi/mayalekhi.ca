import React, { useState, useEffect } from "react";
import styles from "./Blog.module.css";
import { motion } from "framer-motion";
import mixpanel from "mixpanel-browser";

mixpanel.init("2b837b3806273e1cc3e621de8faee49e", {
  debug: true,
  persistence: "localStorage",
  ignore_dnt: true,
});

function Home() {
  const iconAnimate = {
    hover: { rotate: 360, transition: { ease: "easeOut", duration: 0.6 } },
    click: { rotate: 0, transition: { ease: "easeOut", duration: 0.6 } },
  };

  useEffect(() => {
    mixpanel.track("Page Viewed");
  }, [])

  return (
    <div className={"content-body"}>
      <div
        className={`${
          styles["home-hero"]
        } ${"flex flex-col-reverse lg:flex-row"}`}
      >
        <div className={`${styles["home-hero-text"]} ${"lg:w-[60%] w-full"}`}>
          <div className="header-container">
            <h2>Blog.</h2>
            <div>
              <br/>
              <a href="/blog/priorities">My Priorities — Summer 2024</a>
              <br/>
              <br/>
              <a href="/blog/uwo">Entrepreneurship @ Western University</a>
              <br/>
              <br/>
              <a href="/blog/community">Community-Building: My Learnings</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
