import '../assets/css/Contact.css';

export default function Contact() {
  return (
    <div className="contact-links">
      <a href="mailto:jckrft@gmail.com" target="_blank">
        contact me | 
      </a>
      <a
        className="external-link"
        href="https://github.com/jckrft"
        target="_blank"
      >
        github | 
      </a>
      <a
        className="external-link"
        href="https://www.linkedin.com/in/jckrft/"
        target="_blank"
      >
        linkedin
      </a>
    </div>
  );
}
