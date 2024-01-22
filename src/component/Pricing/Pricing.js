import React from "react";
import "./Pricing.css";
import { Plans } from "../../data/data";
const Pricing = () => {
  return (
    <div className="container container_price" id="Pricing">
      <div className="heading">
        <h2>pricing plan</h2>
      </div>
      <div className="allBoxPlan">
        {Plans.map(priceEle => {
          return (
            <div className="priceBox" key={priceEle.id}>
              <img src={priceEle.img} alt="" />
              <h2>{priceEle.title}</h2>
              <p>{priceEle.disc}</p>
              <h3>{priceEle.kind}</h3>
              <div className="num">
                <sup>$</sup>
                <span> {priceEle.number}</span>
                <sub>Month</sub>
              </div>
              <button>get started</button>
              <div className="title">
                <h3>{priceEle.recommended}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pricing;
