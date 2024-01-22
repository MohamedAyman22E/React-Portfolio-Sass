import React, { useState } from "react";
import { Menu } from "../../data/data";
import "./Work.css";
const Work = () => {
  const [items, setItems] = useState(Menu);
  const filterItem = categoryItem => {
    const updatedItem = Menu.filter(curElem => {
      return curElem.category === categoryItem;
    });
    setItems(updatedItem);
  };
  return (
    <div className="container container_work" id="Work">
      <div className="heading">
        <h2>resent work</h2>
      </div>
      <div className="work_filter">
        <span className="work_item" onClick={() => setItems(Menu)}>
          everything
        </span>
        <span className="work_item" onClick={() => filterItem("Creative")}>
          Creative
        </span>
        <span className="work_item" onClick={() => filterItem("Art")}>
          art
        </span>
        <span className="work_item" onClick={() => filterItem("Design")}>
          design
        </span>
        <span className="work_item" onClick={() => filterItem("Branding")}>
          branding
        </span>
      </div>
      <div className="allBoxWork">
        {items.map(element => {
          const { id, image, title, category, link } = element;
          return (
            <div className="work_card" key={id}>
              <img src={image} alt="" />
              <div className="info">
                <h2>{category}</h2>
                <h3 className="title">{title}</h3>
                <span>{link}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Work;
