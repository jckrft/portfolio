import React from "react";
import resume from "../assets/files/resume.pdf";
import me from "../assets/images/me.JPG";
import "../assets/css/About.css";

export default function About() {
  return (
    <div className="about-image">
      <div>
        <img className="img-me" src={me} alt="me" />
      </div>
      <div className="about">
        <p className="about-detail">
          the U.S. government and my mother call me Jacquelyn, but it's a bit
          formal, no? I'm an authentic and inventive Software Engineer. I once
          opened a can with a spoon and sawed a toilet seat off with a serated
          knife and a lighter, but really that's neither here nor there. Once I
          discovered my love for coding, I enthusicatically immersed myself in
          everything there is to know. I pride myself on my ability to
          commuicate, especially virtually, due to my background in teaching
          English. I'm able to work creatively under pressure and find out of
          the box solutions. Being curious by nature, I love to learn and am
          constantly researching new things. As a self-professed world traveler,
          I bring adaptability and a thirst for new and challenging experiences
          to my career, as well as my personal life. Tenacious and always up for
          something new, bring it on!
        </p>
        <a className="resume" href={resume} target="_blank" rel="noreferrer">
          resume
        </a>
      </div>
      {/* <div>
      <i class="devicon-html5-plain-wordmark"></i>


      </div> */}
    </div>
  );
}
