import React from "react";
import "../assets/css/Projects.css";

export default function Projects() {
  return (
    <div>
      <div className="blob-box">
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <g>
            <path
              fill="#9a8c98"
              d="M58.2,-47.5C67.4,-34.8,61.4,-11.1,53.5,7.6C45.6,26.4,35.8,40.1,20.5,50.5C5.2,60.9,-15.5,68.1,-31.3,61.7C-47,55.4,-57.8,35.5,-62.1,14.7C-66.4,-6,-64.2,-27.7,-52.7,-40.9C-41.3,-54.1,-20.7,-58.8,1.9,-60.3C24.5,-61.8,49,-60.2,58.2,-47.5Z"
              transform="translate(100 100)"
            />
            <text x="52" y="70" className="name-1">
              what is your story?
            </text>
            <a
              className="external-link"
              href="https://github.com/what-is-your-story"
              target="_blank"
            >
              <text x="85" y="150" className="github-1">
                github
              </text>
            </a>
            <a
              className="external-link"
              href="https://whatisyourstory.netlify.app"
              target="_blank"
            >
              <text x="63" y="150" className="link-1">
                link |
              </text>
            </a>
          </g>
        </svg>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <g>
            <path
              className="test"
              fill="#c9ada7"
              d="M51.5,-41.3C65.5,-23.6,74.7,-2.2,69.7,14.3C64.7,30.9,45.4,42.6,24.7,53.5C3.9,64.4,-18.4,74.5,-34.7,68.1C-51.1,61.8,-61.5,39.1,-63.2,18.3C-64.9,-2.6,-57.9,-21.6,-45.9,-38.9C-33.9,-56.3,-17,-71.9,0.9,-72.7C18.8,-73.4,37.5,-59.1,51.5,-41.3Z"
              transform="translate(100 100)"
            />
            <text x="70" y="70" className="name-2">
              the library
            </text>
            <a
              className="external-link"
              href="https://jasz-library.netlify.app"
              target="_blank"
            >
              <text x="62" y="150" className="link-2">
                link |
              </text>
            </a>
            <a
              className="external-link"
              href="https://github.com/JASZ-library"
              target="_blank"
            >
              <text x="85" y="150" className="github-2">
                github
              </text>
            </a>
          </g>
        </svg>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <g>
            <path
              fill="#5f6588"
              d="M43.3,-37.3C53,-22.4,55.6,-4.5,53.9,16.1C52.3,36.8,46.3,60.3,31.9,68C17.4,75.6,-5.5,67.3,-24.6,56.2C-43.6,45,-58.8,31,-61.2,15.4C-63.6,-0.1,-53.1,-17,-40.7,-32.6C-28.4,-48.2,-14.2,-62.3,1.3,-63.4C16.8,-64.4,33.6,-52.3,43.3,-37.3Z"
              transform="translate(100 100)"
            />
            <text x="68" y="70" className="name-3">
              nether zone
            </text>
            <a
              className="external-link"
              href="https://netherzone.netlify.app"
              target="_blank"
            >
              <text x="85" y="150" className="link-3">
                link |
              </text>
            </a>
            <a
              className="external-link"
              href="https://github.com/nether-zone"
              target="_blank"
            >
              <text x="108" y="150" className="github-3">
                github
              </text>
            </a>
          </g>
        </svg>
        
      </div>
    </div>
  );
}
