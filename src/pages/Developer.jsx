import {
  FaEnvelopeCircleCheck,
  FaLinkedinIn,
  FaXTwitter,
  FaGithub
} from "react-icons/fa6";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Developer() {
  return (
    <div>
      <Header />
      <div className="container dev-container">
        <div className="dev-content">
          <p className="page-name">Contact Me</p>

          <div className="contact-msg">
            THANK YOU For trying NOTA.<br />
            You can connect with me on various platform
          </div>

          <div className="contact-icon">
            <span>
              <a rel="noreferrer" target="_blank" href="mailto:abdullahisalaudeen@gmail.com"><FaEnvelopeCircleCheck /></a>
            </span>
            <span>
              <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/abdullahi-salaudeen-08392a252"><FaLinkedinIn /></a>
            </span>
            <span>
              <a rel="noreferrer" target="_blank" href="https://twitter.com/TheOnlyAbdull?t=kcKxH0wNRouoDtCJ8Akugw&s=09"><FaXTwitter /></a>
            </span>
            <span>
              <a rel="noreferrer" target="_blank" href="https://github.com/TheOnlyAbdull"><FaGithub /></a>
            </span>
          </div>

          <div className="name-tag">By SALAUDEEN ABDULLAHI❤️</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Developer;
