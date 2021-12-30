import React from "react";
import { Link } from "react-router-dom";
import resume from "../assets/files/resume.pdf";

export default function About() {
  return (
    <div>
      <p>Hi! I'm Jackie</p>
      <a href={resume} target="_blank">
        resume
      </a>

    </div>
  );
}
