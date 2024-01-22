import React from "react";
import { experience } from "../../data/data";
import "./Experience.css";
import { FaGraduationCap } from "react-icons/fa";
import { IoBagHandle } from "react-icons/io5";

const Experience = () => {
  return (
    <div className="container experience" id="Experience">
      <div className="heading">
        <h2>Experience</h2>
      </div>
      <div className="allService">
        <div className="bigBox">
          <div className="smallBox">
            {experience.map(e => {
              if (e.category === "left") {
                return (
                  <div key={e.id}>
                    <div className="box">
                      <div className="icon">{<FaGraduationCap />}</div>

                      <div className="data">{e.date}</div>
                      <h2>{e.title}</h2>
                      <p>{e.description}</p>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
        <div className="bigBox">
          <div className="smallBox">
            {experience.map(e => {
              if (e.category === "right") {
                return (
                  <div key={e.id}>
                    <div className="box">
                      <div className="icon">{<IoBagHandle />}</div>
                      <div className="data">{e.date}</div>
                      <h2>{e.title}</h2>
                      <p>{e.description}</p>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
