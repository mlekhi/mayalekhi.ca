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
              <h3>Entrepreneurship @ Western University</h3>
              <br/>
              <br/>
              <p>My experience as a founder at Western University has not always been smooth sailing. I spent my first year of university feeling quite disconnected from the entrepreneurial scene, and the majority of my second year advocating for budding entrepreneurs and providing them the support that I wish I had. </p>
              <br/>
              <p>As a result, I’ve developed a critical lens on the areas of need in Western’s current entrepreneurial ecosystem and have become empowered to address them. This post is my vision of how I hope to see entrepreneurship at Western to grow over the next 3-5 years, as well as strategy for how we can make this happen.</p>
              <br/>
              <p>This is a working document, so I would appreciate any comments or feedback!! The last thing I mean to be is prescriptive :)</p>
              <br/>              <br/>

              <br/>
              <b>Disconnect in the Student Entrepreneurial Community</b>
              <br/>
              <br/>
              <p>Western has no shortage of entrepreneurial communities. Clubs like W5, WFN, Hult, and more are all vital hubs for students. Many students, including myself, quickly find these clubs after accepting their offer to Western University through Instagram or Google searches, as they are the primary entry points to Western’s entrepreneurial community.</p>
              <br/>
              <p>Lately, I see a trend where student entrepreneurial clubs have been straying from their flagship events (e.g. incubators, fireside chats) in favour of more popular events that may be less directly related to entrepreneurship (e.g. consulting competitions, office tours). This is understandable; these newer events can be lucrative and stand to boost their popularity on campus. However, there was a reason these clubs were formed in the name of entrepreneurship in the first place and I think all they need now is a little bit of reminding.</p>
              <br/>
              <p>From an individual perspective, the current landscape results in a lot of difficulties meeting fellow founders, nurturing individual's entrepreneurial drive, and fostering a closely knit entrepreneurship scene where we inspire one another. I have been trying to bridge this disconnect as an individual; however, there is a deep need for some structural changes to take place. </p>
              <br/>

              <p><i>How to bridge this?  </i>  There needs to a unifying thread between these entrepreneurial organizations. Just as structures for individual accountability are important, large organizations like student clubs can benefit from each other's direction and drive towards building tomorrow's entrepreneurs. I think that Morrissette is perfectly positioned to help achieve this. Morrissette has a wealth of resources for Western entrepreneurs, from advisors to pitch competitions to mentors. The one thing they need more of is exposure to students, which is exactly what these clubs have. A crucial next step for both organizations would be to establish a symbiotic relationship, where Morrissette provides further resources to these student organizations, while they serve as a funnel directing entrepreneurial potential to the right place to grow.</p>
              <br/>
              <br/>
              <br/>

              <b>Ideation Support</b>
              <br/>
              <br/>
              <p>I've talked to a lot of students with crazy potential. A common answer that I hear from why they shy away from entrepreneurship as a viable career is uncertainty—uncertainty about the value of their ideas, lack of confidence in their abilities, fear of failure, and more. These barriers are preventing a significant portion of the talent at Western from overcoming the stigma associated with entrepreneurship and going all in on their ideas.</p>
              <br/>
<p>As a result, their fantastic ideas remain just that: ideas.</p>

              <br/>
              <p><i>How to bridge this?  </i>  This is something that I’ve built Momentum specifically to combat. We are a coworking community designed to provide accountability sessions tailored for passionate people to pursue the projects they care about. No school allowed. Recently, we have been collaborating with VCs to provide ‘leap of faith’ grants for new builders. I find this concept especially important as this little investment is exactly what I've seen propel some of the most talented builders and founders. It just takes a little nudge.</p>
              <p>If you’re reading this and feel like you have an interesting project, I would love to hear it and propel you as much as I possibly can. </p>
              <br/>
 <p>Additionally, I've been in discussions with Morrissette to transform Momentum into a space where everyone engaging with their programming can gather and nurture each other's passions. This aims to alleviate traffic overload from Morrissette's entrepreneurship advisors while retaining all these talented individuals.</p>
              <br/>
              <br/>              <br/>

              <b>Bonus: Western's Tech Scene</b>
              <br/>
              <br/>
              <p>I write this last point with a touch of selfishness, coming from my background as a tech founder and software engineer. </p>
              <br/>
    <p>I've come to realize that the vast majority of founders that come out of Western University lie in the CPG/manufacturing space. It makes a lot of sense considering Western's status as a renowned business school and assignments like the 2257 Feasibility project that force students to immerse themselves in the possibility of building a production enterprise. This leaves tech founders like myself turning our gaze to schools with a big tech entrepreneurship scene like Waterloo, and often dropping out or trying to transfer. For some like myself, this course of action is not possible, leaving us yearning to meet other Western-based tech founders in the same boat. </p>
              <br/>
  <p><i>How to bridge this?  </i>  This is one I plan to take on myself. I hope to lead by example by furthering my relentless pursuit to be a successful founder. I've had entrepreneurial experience in social impact fields (see: <a href='https://westerngazette.ca/news/campus/usc-to-add-in-app-waste-sorting-page-collaborates-with-student-group/article_9ef62de4-8245-11ee-bf9c-f38039b5a84d.html'>Greensort</a>, <a href='https://www.project5k.ca/'>Project 5K</a>), though in the long-term, I aim to develop successful tech companies as a technical founder. I'm working on this as we speak through building my first SaaS startup: Papertrail, an expense management tool for non-profits. However, this is my long-term vision taking over. In the short term, I've been supporting individual tech founders (shoutout Robin, Ryan, and more!) and been sharing the opportunities that come my way with others (e.g. <a href='https://www.cansbridgescholars.com/'>Cansbridge connections</a>, <a href="https://www.socratica.info/">Socratica network</a>), etc.</p>
  <br/>
  <p>There is definitely more to be done. Going forward, I hope to see more engagement with successful Western alum in tech startups (e.g. Y-Combinator grads, talented CEOs like Braden Ream, etc.) to serve as inspiration for Western tech students show them that flocking to bigger tech hubs is not the only answer.</p>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;