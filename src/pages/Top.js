import React from "react";
import { TopView, TopNews, TopIntro, TopStory, TopComment, TopGallery, TopStaff } from "./for_components/ForTop.js";

function About() {
  return (
    <div className="about-content">
      <TopView />
      <TopNews />
      <TopIntro />
      <TopStory />
      <TopComment />
      <TopGallery />
      <TopStaff />
    </div>
  );
}

export default About;

// function 