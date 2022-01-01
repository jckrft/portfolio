import "../assets/css/Contact.css";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Contact() {
  return (
    <div className="contact">
      <p className="connect"> let's connect!</p>
      <div className="contact-links">
      <a className="external-link" href="mailto:jckrft@gmail.com" target="_blank" rel="noreferrer">
        <MailOutlineIcon />
      </a>
      <a
        className="external-link"
        href="https://www.linkedin.com/in/jckrft/"
          target="_blank"
          rel="noreferrer"
      >
        <LinkedInIcon />
      </a>
      <a
        className="external-link"
        href="https://github.com/jckrft"
          target="_blank"
          rel="noreferrer"
      >
        <GitHubIcon />
        </a>
        </div>
    </div>
  );
}
