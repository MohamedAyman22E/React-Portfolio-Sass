import React from "react";
import "./About.css";
import img from "../../assets/avatar-2.svg";
import {
  about_title_card,
  about_card_skills,
  about_about__subtitle,
} from "../../data/data";

const About = () => {
  return (
    <div className="container about" id="About">
      <div className="heading">
        <h2>about me</h2>
      </div>
      <div className="aboutContainer">
        <div className="img">
          <img src={img} alt="" />
        </div>
        <div className="card">
          <div className="info">
            {about_title_card.map(e => {
              return (
                <div key={e.id}>
                  <p>{e.title}</p>
                </div>
              );
            })}
            <button>download cv</button>
          </div>
          <div className="allSkill">
            {about_card_skills.map(x => {
              return (
                <div key={x.id}>
                  <div className="skill">
                    <div className="infoSkill">
                      <h2>{x.department}</h2>
                      <h3>{x.percentage}</h3>
                    </div>
                    <div className="skillBar">
                      <div
                        className="inside"
                        style={{
                          backgroundColor: `${x.background}`,
                          width: x.width,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="aboutBox">
        {about_about__subtitle.map(z => {
          return (
            <div className="box" key={z.id}>
              <div className="icon">{z.icon}</div>
              <div className="info">
                <h2>{z.numberCompleted}</h2>
                <h3>{z.title}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
