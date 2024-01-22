import React from "react";
import "./Service.css";
import { service } from "../../data/data";

const Service = () => {
  return (
    <div className="container serviceContainer" id="Service">
      <div className="heading">
        <h2>service</h2>
      </div>
      <div className="allService">
        {service.map(e => {
          return (
            <div
              className="box"
              key={e.id}
              style={{ backgroundColor: e.backgroundService }}
            >
              <div className="img">
                <img src={e.imgs} alt="" />
              </div>
              <h3>{e.title}</h3>
              <p>{e.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Service;
