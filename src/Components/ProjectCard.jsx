import React from "react";

function ProjectCard(props) {
  return (
    <div>
      <div className="card">
        <div className="card_img">
          <img
            src={props.cardImage}
            alt=""
            style={{ width: "100%", objectFit: "cover" }}
          />
        </div>
        <div className="card_text">
          <div className="card_title">
            <h1>{props.cardTitle}</h1>
          </div>
          <div className="card_description">{props.cardDescription}</div>
          <div className="card_visitbtn">
            <a
              href={props.cartVisitLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Site
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
