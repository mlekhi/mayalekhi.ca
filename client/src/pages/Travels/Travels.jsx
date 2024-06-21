import React, { useEffect, useState } from "react";
import styles from "./About.module.css";
import * as Img from "./images";
import Footer from "../../components/Footer/Footer.jsx";

mixpanel.init("2b837b3806273e1cc3e621de8faee49e", {
  debug: true,
  persistence: "localStorage",
  ignore_dnt: true,
});

function Travels() {
  return (
    <div className={"content-body"}>
      <div
        className={`${
          styles["home-hero"]
        } ${"flex flex-col-reverse lg:flex-row"}`}>
        <div className={`${styles["home-hero-text"]} ${"lg:w-[60%] w-full"}`}>
          <div className="header-container">
            <h1>About Me.</h1>

            <Footer />
            </div>
          </div>
        </div>
      </div>
    );
  }

export default Travels;
