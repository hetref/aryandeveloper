import React, { useEffect, useState } from "react";
import profileimgavtar from "../assets/Avatar/pngAvatar.png";
import profileimg from "../assets/Homejs/Aryan Shinde Profile.png";
import Progressbar from "./ProgressBar";
import ProjectCard from "./ProjectCard";
import devoutlookswebsite from "../assets/Homejs/WebsiteScreenshot/DevOutlooksWebsite.png";
import airlineswebsite from "../assets/Homejs/WebsiteScreenshot/AirlinesWebsite.png";
import classicfurniturewebsite from "../assets/Homejs/WebsiteScreenshot/ClassicFurnitureWebsite.png";
import codingguidezwebsite from "../assets/Homejs/WebsiteScreenshot/CodingGuidezWebsite.png";
import textutilswebsite from "../assets/Homejs/WebsiteScreenshot/TextutilsWebsite.png";
import todowebsite from "../assets/Homejs/WebsiteScreenshot/TodoWebsite.png";
import weatherwebsite from "../assets/Homejs/WebsiteScreenshot/WeatherWebsite.png";
import calculatorwebsite from "../assets/Homejs/WebsiteScreenshot/Calculator.png";
import clockwebsite from "../assets/Homejs/WebsiteScreenshot/Clock.png";
import sourcecodewebsite from "../assets/Homejs/WebsiteScreenshot/SourceCode.png";
import stopwatchwebsite from "../assets/Homejs/WebsiteScreenshot/StopWatch.png";
import tilewebsite from "../assets/Homejs/WebsiteScreenshot/TileGame.png";
import axios from "axios";
import db from "./Firebase";
import { addDoc, collection } from "firebase/firestore";

function Home() {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [contacted, setContacted] = useState(false);

  const today = new Date();
  const date = today.getDate();
  const month = today.getMonth();
  const day = today.getDay();
  const year = today.getFullYear();
  const montharr = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "December",
  ];
  const dayarr = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Firday",
    "Saturday",
  ];
  const timestamp = `${dayarr[day]} ${date} ${montharr[month]}, ${year}`;

  const languageSkills = [
    {
      id: 1,
      name: "HTML",
      percentage: "100",
    },
    {
      id: 2,
      name: "CSS",
      percentage: "100",
    },
    {
      id: 3,
      name: "JavaScript",
      percentage: "90",
    },
    {
      id: 4,
      name: "React JS",
      percentage: "80",
    },
    {
      id: 5,
      name: "React Native",
      percentage: "60",
    },
    {
      id: 6,
      name: "Bootstrap",
      percentage: "100",
    },
    {
      id: 7,
      name: "NodeJS",
      percentage: "80",
    },
    {
      id: 8,
      name: "Express JS",
      percentage: "70",
    },
    {
      id: 9,
      name: "Tailwind CSS",
      percentage: "90",
    },
    {
      id: 10,
      name: "Java",
      percentage: "60",
    },
    {
      id: 11,
      name: "Arduino",
      percentage: "50",
    },
    {
      id: 12,
      name: "SCSS",
      percentage: "90",
    },
    {
      id: 13,
      name: "SQL",
      percentage: "70",
    },
  ];

  const techSkills = [
    {
      id: 1,
      name: "Web Development",
      percentage: "100",
    },
    {
      id: 2,
      name: "App Development",
      percentage: "80",
    },
    {
      id: 3,
      name: "IOT Development",
      percentage: "60",
    },
    {
      id: 4,
      name: "Ethical Hacking",
      percentage: "35",
    },
  ];

  const contactsubmit = async (e) => {
    e.preventDefault();
    setContacted(true);
    if (
      (fName === "" || lName === "" || email === "" || phone == "",
      message == "")
    ) {
      alert("Please fill all the fields");
    } else if (phone.length !== 12) {
      alert("Please enter a valid phone number");
    } else {
      try {
        const docRef = await addDoc(collection(db, "contactdata"), {
          name: fName + " " + lName,
          companyName,
          email,
          phone,
          message,
          timestamp,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  };

  const redirectto = (link, e) => {
    e.preventDefault();
    window.open(link, "_blank");
  };

  return (
    <div>
      <div id="header_section">
        <header>
          <div id="grid">
            <div id="header_text">
              <div id="header_heading">
                <div>
                  <h1 id="header_hello">Hello There,</h1>
                  <h1 id="header_name">
                    I'm Aryan <span>Shinde</span>
                  </h1>
                </div>
              </div>
              <div id="header_category">
                <span>Developer</span>
              </div>
              <div id="header_description">
                <span>I am into Website and Application Development.</span>
              </div>
              <div id="header_aboutbtn">
                <a href="#about_me">About Me &gt;</a>
              </div>
            </div>
            <div id="header_img">
              <img src={profileimgavtar} alt="" />
            </div>
          </div>
        </header>
      </div>

      <div id="about_me">
        <div id="about_grid">
          <div id="about_img">
            <img src={profileimg} alt="" />
          </div>
          <div id="about_text">
            <div id="about_name">
              <h1>Aryan Shinde</h1>
            </div>
            <div id="about_experience">
              <span>2 Years Experience</span>
            </div>
            <div id="about_description">
              <span>
                <p>
                  As a 16-year-old with a passion for web and app development, I
                  have spent the past two years honing my skills and creating
                  numerous projects that showcase my talent and creativity. With
                  experience in both web and mobile application development, I
                  have gained a strong understanding of programming languages &
                  software development tools.
                </p>
                <br />
                <p>
                  In addition to my technical abilities, I have a deep-seated
                  desire to use my skills to help others. Whether it's through
                  developing websites or apps that address societal problems or
                  teaching others how to code, I am always looking for ways to
                  make a positive impact.
                </p>
                <br />
                <p>
                  Currently, I am a member of the Student Activity Committee
                  (SAC) at IEEE Bombay Section, where I work alongside
                  like-minded peers to organize events and initiatives that
                  promote technical education and community service.
                </p>
                <br />
                <p>
                  With a combination of technical proficiency and a drive to
                  help others, I am excited to take the next step in my journey
                  as a developer and continue making meaningful contributions to
                  the field.
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div id="skills">
        <div id="skills_header">
          <h1>My Skills</h1>
        </div>
        <div id="skills_skill">
          <div id="skills_languages">
            <div id="skill_language_text">Languages :-</div>
            <div id="skills_language_progress">
              {languageSkills.map((skill) => {
                return (
                  <div className="skill_label" key={skill.id}>
                    <span>{skill.name}</span>
                    <div className="skill_progress_bar">
                      <Progressbar progress={skill.percentage} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div id="skills_technologies">
            <div id="skill_technlogy_text">Technologies :-</div>
            <div id="skills_technology_progress">
              {techSkills.map((technologyLearned) => {
                return (
                  <div className="technology_label" key={technologyLearned.id}>
                    <span>{technologyLearned.name}</span>
                    <div className="skill_progress_bar">
                      <Progressbar progress={technologyLearned.percentage} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div id="projects">
        <div id="projects_heading">
          <h1>My Projects</h1>
        </div>
        <div id="projects_body">
          <div className="project">
            <ProjectCard
              cardImage={devoutlookswebsite}
              cardTitle="Dev Outlooks (2021)"
              cardDescription="This is a Dev Outlooks Website."
              cartVisitLink="https://devoutlook.netlify.app"
            />
          </div>
          <div className="project">
            <ProjectCard
              cardImage={classicfurniturewebsite}
              cardTitle="Classic Furniture (2022)"
              cardDescription="Simple showcase of the products."
              cartVisitLink="https://hetref.github.io/csfurniture"
            />
          </div>
          <div className="project">
            <ProjectCard
              cardImage={todowebsite}
              cardTitle="Todo (2021)"
              cardDescription="Add TODO using this website."
              cartVisitLink="https://hetref.github.io/yourtodo"
            />
          </div>
          <div className="project">
            <ProjectCard
              cardImage={codingguidezwebsite}
              cardTitle="Coding Guidez (2021)"
              cardDescription="Get guides for coding."
              cartVisitLink="https://hetref.github.io/codinguides"
            />
          </div>
          <div className="project">
            <ProjectCard
              cardImage={weatherwebsite}
              cardTitle="Weather Forecaster (2021)"
              cardDescription="Get weather globally."
              cartVisitLink="https://hetref.github.io/weatherapp"
            />
          </div>
          <div className="project">
            <ProjectCard
              cardImage={textutilswebsite}
              cardTitle="Textutils (2021)"
              cardDescription="Filter text using this website."
              cartVisitLink="https://hetref.github.io/textutils"
            />
          </div>
          <div className="project">
            <ProjectCard
              cardImage={airlineswebsite}
              cardTitle="Airlines (2020)"
              cardDescription="Book demo airlines ticket."
              cartVisitLink="https://hetref.github.io/airline"
            />
          </div>

          <div className="project">
            <ProjectCard
              cardImage={calculatorwebsite}
              cardTitle="Calculator (2021)"
              cardDescription="Book demo airlines ticket."
              cartVisitLink="https://hetref.github.io/airline"
            />
          </div>
          <div className="project">
            <ProjectCard
              cardImage={clockwebsite}
              cardTitle="Analog Clock (2020)"
              cardDescription="Book demo airlines ticket."
              cartVisitLink="https://hetref.github.io/airline"
            />
          </div>
          <div className="project">
            <ProjectCard
              cardImage={sourcecodewebsite}
              cardTitle="Source Code Website (2020)"
              cardDescription="Book demo airlines ticket."
              cartVisitLink="https://hetref.github.io/airline"
            />
          </div>
          <div className="project">
            <ProjectCard
              cardImage={stopwatchwebsite}
              cardTitle="StopWatch (2020)"
              cardDescription="Book demo airlines ticket."
              cartVisitLink="https://hetref.github.io/airline"
            />
          </div>
          <div className="project">
            <ProjectCard
              cardImage={tilewebsite}
              cardTitle="Tile Game (2020)"
              cardDescription="Book demo airlines ticket."
              cartVisitLink="https://hetref.github.io/airline"
            />
          </div>
        </div>
      </div>

      <div id="contact">
        <div id="contact_section">
          <div id="contact_section_header">
            <div id="contact_header_heading">
              <h1>Contact Me</h1>
            </div>
            <div id="contact_header_text">Respond will be within 24 hours.</div>
          </div>
          <div id="contact_section_form">
            <form autoComplete="off">
              <div className="twoinputs" id="input_name">
                <div id="input_fname">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="contact_input"
                    required
                    onChange={(e) => {
                      setFName(e.target.value);
                    }}
                    value={fName}
                  />
                </div>
                <div id="input_lname">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="contact_input"
                    required
                    onChange={(e) => {
                      setLName(e.target.value);
                    }}
                    value={lName}
                  />
                </div>
              </div>
              <div id="input_compoanyname">
                <input
                  type="text"
                  placeholder="Company Name (If any)"
                  className="contact_input"
                  required
                  onChange={(e) => {
                    setCompanyName(e.target.value);
                  }}
                  value={companyName}
                />
              </div>
              <div className="twoinputs" id="input_emailphone">
                <div id="input_email">
                  <input
                    type="email"
                    placeholder="Email here"
                    className="contact_input"
                    required
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    value={email}
                  />
                </div>
                <div id="input_phone">
                  <input
                    type="number"
                    placeholder="Phone Number (91809729****)"
                    className="contact_input"
                    required
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                    value={phone}
                  />
                </div>
              </div>
              <div id="input_message">
                <textarea
                  name="input_message"
                  id="input_message"
                  placeholder="Enter Your Message"
                  className="contact_input"
                  required
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  value={message}
                ></textarea>
              </div>

              <div id="submit_btn">
                <button
                  type="submit"
                  disabled={contacted}
                  onClick={contactsubmit}
                >
                  {contacted ? "Contacted" : "Contact"}
                </button>
              </div>
            </form>
          </div>
        </div>
        <div id="contact_info">
          <div id="contact_info_email">
            <div className="contact_info_heading">
              <h1>Email -</h1>
            </div>
            <div className="contact_info_body">
              <a href="mailto: shindearyan179@gmail.com">
                shindearyan179@gmail.com
              </a>
            </div>
          </div>
          <div id="contact_info_phone">
            <div className="contact_info_heading">
              <h1>Phone -</h1>
            </div>
            <div className="contact_info_body">
              <a href="tel:+918097296453">+91 8097296453</a>
            </div>
          </div>
          <div id="contact_info_socialmedia">
            <div className="contact_info_heading">
              <h1>Social Media -</h1>
            </div>

            <div className="main">
              <div className="up">
                <button
                  className="card1"
                  onClick={(e) =>
                    redirectto("https://www.instagram.com/aryu_dev_28", e)
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0,0,256,256"
                    width="30px"
                    height="30px"
                    fillRule="nonzero"
                    className="instagram"
                  >
                    <g
                      fillRule="nonzero"
                      stroke="none"
                      strokeWidth="1"
                      strokeLinecap="butt"
                      strokeLinejoin="miter"
                      strokeMiterlimit="10"
                      strokeDasharray=""
                      strokeDashoffset="0"
                      fontFamily="none"
                      fontWeight="none"
                      fontSize="none"
                      textAnchor="none"
                      style={{ mixBlendMode: "normal" }}
                    >
                      <g transform="scale(8,8)">
                        <path d="M11.46875,5c-3.55078,0 -6.46875,2.91406 -6.46875,6.46875v9.0625c0,3.55078 2.91406,6.46875 6.46875,6.46875h9.0625c3.55078,0 6.46875,-2.91406 6.46875,-6.46875v-9.0625c0,-3.55078 -2.91406,-6.46875 -6.46875,-6.46875zM11.46875,7h9.0625c2.47266,0 4.46875,1.99609 4.46875,4.46875v9.0625c0,2.47266 -1.99609,4.46875 -4.46875,4.46875h-9.0625c-2.47266,0 -4.46875,-1.99609 -4.46875,-4.46875v-9.0625c0,-2.47266 1.99609,-4.46875 4.46875,-4.46875zM21.90625,9.1875c-0.50391,0 -0.90625,0.40234 -0.90625,0.90625c0,0.50391 0.40234,0.90625 0.90625,0.90625c0.50391,0 0.90625,-0.40234 0.90625,-0.90625c0,-0.50391 -0.40234,-0.90625 -0.90625,-0.90625zM16,10c-3.30078,0 -6,2.69922 -6,6c0,3.30078 2.69922,6 6,6c3.30078,0 6,-2.69922 6,-6c0,-3.30078 -2.69922,-6 -6,-6zM16,12c2.22266,0 4,1.77734 4,4c0,2.22266 -1.77734,4 -4,4c-2.22266,0 -4,-1.77734 -4,-4c0,-2.22266 1.77734,-4 4,-4z"></path>
                      </g>
                    </g>
                  </svg>
                </button>
                <button
                  className="card2"
                  onClick={(e) => redirectto("https://twitter.com/aryudev", e)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="30px"
                    height="30px"
                    className="twitter"
                  >
                    <path d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"></path>
                  </svg>
                </button>
              </div>
              <div className="down">
                <button
                  className="card3"
                  onClick={(e) => redirectto("https://github.com/hetref", e)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 30 30"
                    width="30px"
                    height="30px"
                    className="github"
                  >
                    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                  </svg>
                </button>
                <button
                  className="card4"
                  onClick={(e) =>
                    redirectto("https://discord.gg/S2ffR2emTh", e)
                  }
                >
                  <svg
                    height="30px"
                    width="30px"
                    viewBox="0 0 48 48"
                    xmlns="http://www.w3.org/2000/svg"
                    className="discord"
                  >
                    <path d="M40,12c0,0-4.585-3.588-10-4l-0.488,0.976C34.408,10.174,36.654,11.891,39,14c-4.045-2.065-8.039-4-15-4s-10.955,1.935-15,4c2.346-2.109,5.018-4.015,9.488-5.024L18,8c-5.681,0.537-10,4-10,4s-5.121,7.425-6,22c5.162,5.953,13,6,13,6l1.639-2.185C13.857,36.848,10.715,35.121,8,32c3.238,2.45,8.125,5,16,5s12.762-2.55,16-5c-2.715,3.121-5.857,4.848-8.639,5.815L33,40c0,0,7.838-0.047,13-6C45.121,19.425,40,12,40,12z M17.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C21,28.209,19.433,30,17.5,30z M30.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C34,28.209,32.433,30,30.5,30z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
