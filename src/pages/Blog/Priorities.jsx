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
            <a href='/blog'>Back</a>
            <br/>
            <br/>
            <div>
              <h3>My Priorities — Summer 2024</h3>
              <p>Becoming the best software engineer & technical founder as possible</p>
              <p>&emsp;Learn how to build simple LLMs on PyTorch</p>
              <p>&emsp;Succeed in my work at BorealisAI & understand the pain points of infrastructure engineers</p>
              <p>PaperTrail</p>
              <p>&emsp;Get PaperTrail’s first client</p>
<p>&emsp;Build PaperTrail web app up for official launch</p>
<p>&emsp;Revisit software pricing models</p>
<p>Momentum</p>
<p>&emsp;Get Momentum at least 2 more connections with VCs</p>
<p>&emsp;Find Momentum a graphic designer</p>
<p>&emsp;Find hosts for the Fall 2024 semester at Momentum</p>
<p>Meeting Founders</p>
<p>&emsp;Attend 1517 summit, Vancouver startup week, & Collision conference</p>
<p>&emsp;Invite passionate founders to apply for Cansbridge programs</p>
<p>Continue writing!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
