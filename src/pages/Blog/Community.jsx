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
              <h3>My Big Learnings About Community-Building (an on-going work)</h3>
              <br/>
              <br/>

              <b>1. How to find great people</b>
              <br/>
              <br/>
<p><strong>TLDR:</strong> They are right in front of you.</p>

<p>In my life today, I see the manifestation of the “there are no good people here” attitude most prevalently with Canadian students flocking to the United States. New York and San Francisco are ✨where the pretty people are ✨ — shiny, better, smarter, and cooler — moving to these places will make all your problems go away. While I can’t deny the magic of being surrounded by awesome people, the problem with everyone constantly chasing the hype is that it essentially turns us all into leeches — if 100% of people are focused on “finding where the best party is”, none of the parties will actually be fun. Communities die when everyone seeks to gain more than they hope to give.</p>
<p>I’ve also witnessed this with several fellowships and programs (and have caught myself feeling this way as well) — once you get accepted into something that was once the dream (usually because it was competitive to get into), you feel like it’s not all you painted it out to be. There are two ways to deal with this disappointment: keep searching for the next shiny thing because that’s where “your people” will be, or double down and believe in the magic within the people right in front of you. If you’re constantly searching and feeling unstable, unsettled, or like you don’t belong, you may find that choosing to stay in one place long enough to build the magic right where you are is the only path that puts an end to this cycle.</p>

<br/>
              <br/>

<b>2. How to get people to show up</b>
<br/>
              <br/>

<p><strong>TLDR:</strong> Prioritize the experience of the people who DO show up</p>
<p>If you have a disappointing turnout, don’t focus your energy on the people who aren’t there. Don’t lecture the people in a call about how attendance is important, and don’t spend the first 40 minutes waiting for people to trickle into your event. Everyone in attendance will feel their time is wasted, and that will probably be the last time they attend.</p>
<p>Instead, focus on the experience of the people who did show up, and have so much fun that the people who skipped feel FOMO for not being there. In your post-event marketing, show people laughing and having a good time, and set it to fun music. Don’t beg, stay winning. This is how you get returners coming back again and again, and this is how you get people to prioritize showing up next time.</p>
<br/>
              <br/>
              <b>3. How to help people be the best versions of themselves</b>

              <br/>
              <br/>
              <p><strong>TLDR:</strong> “Feeling like you’ve found your people” is rarely about the specific selection of people in a room and often about the social norms governing the way you interact with each other.</p>
              <p>It’s comforting having a shiny vision of far-away places where the people are exactly who you want to spend your time around — but this blatantly ignores the fact that most of the people you interact with are tailoring their external personas to adapt to the social norms in given environments. Want people to be more authentic, not flex on you, and to have a real conversation? Take the first leap. People who think others are boring are usually just projecting — the secret to having great conversations is being a great conversationalist, and most people have really interesting things to share if you know the right questions to ask.</p>

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
