import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import * as Img from "./images";
import { motion } from "framer-motion";
import Card from "../../components/Card/Card";
import mixpanel from "mixpanel-browser";

mixpanel.init("2b837b3806273e1cc3e621de8faee49e", {
  debug: true,
  persistence: "localStorage",
  ignore_dnt: true,
});

const CustomLink = ({ onClick, children, props }) => {
  return (
    <div onClick={onClick} {...props}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`nav-item`}
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
    mixpanel.track("View on Home");
  }, []);

  const [cardsShown, setCardsShown] = useState("past");

  const cardsPresent = [
    {
      url: "https://www.td.com/ca/en/personal-banking",
      image: Img.TDCard,
      orgName: "TD Bank",
      positionName: "Technology Operations",
    },
    {
      url: "https://castellanilab.com",
      image: Img.CastellaniCard,
      orgName: "Castellani Lab",
      positionName: "Bioinformatics Research",
    },
    {
      url: "https://www.foundersnetwork.ca",
      image: Img.WFNCard,
      orgName: "WFN | Western's Entrepreuneurial Society",
      positionName: "Future View President",
    },
    {
      url: "https://www.rbcroyalbank.com",
      image: Img.RBCCard,
      orgName: "RBC",
      positionName: "Innovation and Design",
    },
  ];

  const cardsPast = [
    {
      url: "https://opensource.fb.com/partnerships/major-league-hacking/",
      image: Img.MetaCard,
      orgName: "Meta & Major League Hacking | Technology",
      positionName: "Site Reliability Engineer ['23]",
    },
    {
      url: "https://algifoods.com",
      image: Img.AlgiCard,
      orgName: "Algi | Food with Impact",
      positionName: "Growth Strategy ['22]",
    },
    {
      url: "https://www.project5k.ca",
      image: Img.P5KCard,
      orgName: "Project 5K | Meaningful Youth Volunteerism",
      positionName: "President ['21-'22]",
    },
    {
      url: "https://www.linkedin.com/company/mastery-tutoring-services",
      image: Img.MTSCard,
      orgName: "Mastery Tutoring Services | Education",
      positionName: "Founder ['19-'22]",
    },
  ];

  const cardsCur = cardsShown === "past" ? cardsPresent : cardsPast;

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
            <h3 class="colored">Software Engineer, Researcher, Founder</h3>
          </div>
          <p>
            I am a driven second-year Computer Science student at Western University.
            I’m extremely passionate about tech, social impact, 
            writing, and nurturing communities! <br />
            <br />
            Currently, I'm leading Western University's largest conference on emerging technology at {" "}
            <a target="_blank" href="https://www.foundersnetwork.ca">
              Western Founder's Network, 
            </a> Western's entrepreneurship society. 
            <br />
            <br />
            On top of this, I have been building Momentum: a coworking community bringing together Western University's builders, 
            creatives, technologists, budding founders, and more, to work on and showcase their passion projects. 
            It's a space that provides youth with the permission, accountability, and community to dedicate themselves to work they care about. 
            <br />
            <br />
            When I'm not working to support youth in their passions, I'm busy pursuing my own!
            You can usually find me playing Pokémon, making Spotify playlists, competing in hackathons, 
            meeting exceptional people, and building new things.
          </p>
          <div className={styles["button-container"]}>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={iconAnimate}
              className={styles["button"]}
              target="_blank"
              href="mailto: maya.lekhi1@gmail.com"
            >
              <p>Email Me!</p>
            </motion.a>
          </div>
        </div>
      </div>
      <div className={"nav-bar"}>
        <CustomLink
          variants={iconAnimate}
          onClick={() => setCardsShown("past")}
          className={`${styles["button"]} ${
            cardsShown == "[present]" ? styles["button-active"] : ""
          }`}
        >
          Present
          <span
            style={{
              paddingLeft: "0.5rem",
              fontSize: "8pt",
              alignSelf: "center",
            }}
          >
            ({cardsPresent.length})
          </span>
        </CustomLink>
        <CustomLink
          variants={iconAnimate}        
          onClick={() => setCardsShown("present")}
          className={`${styles["button"]} ${
            cardsShown == "[past]" ? styles["button-active"] : ""
          }`}
        >
          Past
          <span
            style={{
              paddingLeft: "0.5rem",
              fontSize: "8pt",
              alignSelf: "center",
            }}
          >
            ({cardsPast.length})
          </span>
        </CustomLink>
      </div>
      <div className={"gallery"}>
        {cardsCur.map((card, index) => {
          return (
            <Card
              key={index}
              url={card.url}
              image={card.image}
              title={card.orgName}
              desc={card.positionName}
            />
          );
        })}
      </div>
      <div className={"content-body"}>
      </div>
    </div>
  );
}

export default Home;