import React from "react";
import avatar from "../assets/Avatar/svgAvatar.svg";
import { FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";
import { RiBarChartHorizontalFill } from "react-icons/ri";
import resume from "../Resume/Aryan Shinde CV.pdf";

function NavBar() {
  return (
    <div>
      <div id="nav">
        <nav>
          <div id="navbar">
            <div id="brand">
              <a href="/">
                <img src={avatar} alt="" />
                <div id="heading">
                  <h1>Aryan Shinde</h1>
                </div>
              </a>
            </div>

            <div id="nav_links" className="links">
              <div className="nav_link link">
                <a href="/">Home</a>
              </div>
              <div className="nav_link link">
                <a href={resume} download>
                  Get CV
                </a>
              </div>
            </div>

            <div id="social_media_links" className="links">
              <div className="social_link link">
                <a
                  href="https://www.instagram.com/aryu_dev_28/"
                  id="instagram_ic"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="icon">
                    <FaInstagram />
                  </span>
                  <span className="innerbox">Instagram</span>
                </a>
              </div>
              <div className="social_link link">
                <a
                  href="https://twitter.com/aryudev"
                  id="twitter_ic"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="icon">
                    <FaTwitter />
                  </span>
                  <span className="innerbox">Twitter</span>
                </a>
              </div>
              <div className="social_link link">
                <a
                  href="https://github.com/hetref"
                  id="github_ic"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="icon">
                    <GoMarkGithub />
                  </span>
                  <span className="innerbox">Github</span>
                </a>
              </div>
              <div className="social_link link">
                <a
                  href="https://wa.me/918097296453"
                  id="whatsapp_ic"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="icon">
                    <FaWhatsapp />
                  </span>
                  <span className="innerbox">Whatsapp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Nav */}
          <div id="mobile_navbar">
            <div id="mobile_leftbar">
              <a href="/">
                <img src={avatar} alt="" />
                <div id="heading">
                  <h1>Aryan Shinde</h1>
                </div>
              </a>
            </div>
            <div id="mobile_rightbar">
              <input type="checkbox" id="checkbox_toggle" />
              <label htmlFor="checkbox_toggle" className="hamburger">
                <RiBarChartHorizontalFill />
              </label>
              <div className="mobile_links">
                <div className="mobile_nav_link">
                  <a href="/">Home</a>
                </div>
                <div className="mobile_nav_link">
                  <a href={resume} download>
                    Get CV
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
