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
              <p>My experience as a founder at Western University has not always been smooth sailing. I spent my first year of university feeling quite disconnected from the entrepreneurial scene, and spent the majority of my second year fighting to give budding entrepreneurs the support that I wish I had. </p>
              <br/>
              <p>As a result, I feel as though I’ve gained a critical lens on what changes I believe need to happen in Western’s entrepreneurial ecosystem. This post is my vision of how I hope entrepreneurship at Western will grow over the next 3-5 years, as well as strategy for how I hope to help make that happen. This is a working document, so I would appreciate any comments or feedback!!</p>
              <br/>              <br/>

              <br/>
              <b>Disconnect in the Student Entrepreneurial Community</b>
              <br/>
              <br/>
              <p>Lately, I even find student entrepreneurial communities that have been straying from their original mission in favour of more popular events like consulting competitions. This is understandable; these events are more lucrative, and stand to boost their popularity on campus. However, there has to be a reason these clubs were formed in the name of entrepreneurship in the first place. I think all these clubs need is a little bit of reminding.</p>
              <p>From an individual perspective, this landscape results in a lot of difficulties meeting fellow founders, nurturing individual's entrepreneurial drive, and fostering a closely knit entrepreneurship scene where we inspire one another. I have been trying to bridge this disconnect as an individual; however, there is a deep need for some structural changes to take place. </p>
              <br/>

              <p><i>How to bridge this? </i> I think there needs to be some thread that holds these organizations together. Just as I believe individual accountability is important, larger organizations like student clubs could benefit from each other's direction and drive towards building tomorrow's entrepreneurs. I think that Morrissette is the perfect organization to help achieve this. Morrissette has a plethora of fantastic resources for Western entrepreneurs, from their advisors to pitch competitions. The one thing they need more of is exposure to students, which is exactly what these clubs have. A crucial next step for both organizations would be to join forces, where Morrissette provides further resources to these student organizations, while they serve as a funnel directing entrepreneurial potential to the right place to grow.</p>
<br/>
<br/>
<br/>

              <b>Ideation Support</b>
              <br/>
              <br/>
              <p>I've talked to a lot of students with crazy potential. A common answer that I hear from why they shy away from entrepreneurship as a viable career is uncertainty. Uncertainty in the value of their ideas, lack of confidence in their abilities, risk of failure, and more. These barriers are preventing a significant portion of the talent at Western from overcoming the stigma associated with entrepreneurship and going all in on their ideas.</p>

              <br/>
              <br/>
              <p><i>How to bridge this? </i> This is something that I’ve built Momentum specifically to combat. We are a coworking community designed to provide accountability sessions tailored for passionate people to get work done on the projects they care about. Recently, we have been collaborating with VCs to provide ‘leap of faith’ grants for new builders. I find this concept especially important as this little investment is exactly what I've seen propel some of the most talented builders. It just takes a little nudge. If you’re reading this and feel like you have an interesting project, I would love to hear it and propel you as much as I possibly can. </p>
              <p>On top of this, Iʼve been discussing with Morrissette to make Momentum a space where everyone interacting with Morissette can come together and feed each otherʼs passions, thus redirecting traffic overloads away from Morrissette's entrepreneurship advisors while still retaining this talent.</p>
              <br/>
              <br/>              <br/>

              <b>Bonus: Western's Tech Scene</b>
              <br/>
              <br/>
              <p>This last one I write a bit selfishly as a tech founder and software engineer. Because Western is known for being a fantastic business school, the reality is that the vast majority of founders that come out of this school lie in the CPG/manufacturing space. This leaves tech founders like myself looking forelorn to schools like Waterloo, with a big tech entrepreneurship scene, and often dropping out or trying to transfer. For people like myself, this is simply not realistic. </p>
              <br/>
  <p><i>How to bridge this? </i> This is one I plan to take on myself. I hope to lead by example by being a successful founder myself. I've had entrepreneurial experience in social impact fields (see: <a href='https://westerngazette.ca/news/campus/usc-to-add-in-app-waste-sorting-page-collaborates-with-student-group/article_9ef62de4-8245-11ee-bf9c-f38039b5a84d.html'>Greensort</a>, <a href='https://www.project5k.ca/'>Project 5K</a>), though in the long-term, I aim to develop successful tech companies as a technical founders. I'm working on this as we speak through my work on Papertrail: an expense management tool for non-profits. However, this is my long-term vision taking over. In the short term, I hope to see more engagement with successful Western alum tech founders (e.g. Y-Combinator grads or Braden Ream types), to serve as inspiration for Western tech students and show them that flocking to bigger tech hubs is not the only answer.</p>
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