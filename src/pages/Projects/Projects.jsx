import React, { useEffect } from "react";
import Card from "../../components/Card/Card";
import mixpanel from "mixpanel-browser";

mixpanel.init("2b837b3806273e1cc3e621de8faee49e", {
  debug: true,
  // track_pageview: true,
  persistence: "localStorage",
  ignore_dnt: true,
});

function Projects() {
  const projects = [
    {
      link: "/Projects/LockedIn",
      image: require("./LockedIn/images/cover.png"),
      title: "GreenSort",
      description: "App for London, Ontario's Green Bin Program.",
      properties: "UX/UI, React Native, OpenCV",
    },
    {
      link: "/Projects/Memoria",
      image: require("./Memoria/images/MEMORIA-COVER.png"),
      title: "Caffeinated",
      description: "Redefining Networking using AI & Web Scraping.",
      properties: "Product, Python, AI",
    },
    {
      link: "/Projects/SuperDMs",
      image: require("./SuperDMs/images/gif.gif"),
      title: "Leap",
      description: "Reintegrating the Formerly Incarcerated.",
      properties: "Product, UI/UX",
    },
    {
      link: "/Projects/SuperDMs",
      image: require("./QMIND/QMINDv1.gif"),
      title: "GreenLink",
      description: "Creating a Greener Supply Chain.",
      properties: "Design, UI/UX",
    },
 ];

  useEffect(() => {
    mixpanel.track("View Projects");
  }, []);

  return (
    <div className="content-body gallery">
      {projects.map((card, index) => {
        return (
          <Card
            key={index}
            url={card.link}
            image={card.image}
            title={card.title}
            desc={card.description}
            properties={card.properties}
          />
        );
      })}
    </div>
  );
}

export default Projects;
