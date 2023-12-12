import s from "../Playground/Playground.module.css";
import React, { useEffect } from "react";
import mixpanel from "mixpanel-browser";

mixpanel.init("2b837b3806273e1cc3e621de8faee49e", {
  debug: true,
  // track_pageview: true,
  persistence: "localStorage",
  ignore_dnt: true,
});

function Gallery() {
  useEffect(() => {
    mixpanel.track("View on Gallery");
  }, []);

  // Render the image gallery
  return (
    <div className="content-body">
      <p>
        A collection of some works I'm proud of. Click to read.</p>
      <div className={s.imgGallery}>
        <div className={s.galleryTitle}>
          <p className="rotateNinetyCounter">poems</p>
        </div>
        <a href="https://maya-lekhi.notion.site/Tainted-59224276092a4808998521ae5ba01e1b?pvs=4">
          <img src="./photos/1.jpg" alt="1" />
        </a>
        <a href="https://maya-lekhi.notion.site/Interprovincial-cc56a4590c5a4ca9b1e203a5972f94e6?pvs=4">
          <img src="./photos/2.jpeg" alt="2" />
        </a>
        <a href="https://maya-lekhi.notion.site/Smoke-Rising-1378ff0c26a045e58c464c24409adbf7?pvs=4">
          <img src="./photos/3.jpeg" alt="3" />
        </a>
        <a href="https://maya-lekhi.notion.site/Tikka-127b0bd05eeb42d0bc384dc8d70a5171?pvs=4">
          <img src="./photos/4.jpg" alt="4" />
        </a>
        <a href="https://maya-lekhi.notion.site/A-Reminder-of-Affection-ead2cb0c62694e45a641c1e9bc4d12d1?pvs=4">
          <img src="./photos/5.jpg" alt="5" />
        </a>
      </div>
  </div>
  );
}

export default Gallery;
