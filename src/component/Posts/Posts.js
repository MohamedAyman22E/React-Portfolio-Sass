import React from "react";
import { lastPost } from "../../data/data";
import "./Posts.css";
const Posts = () => {
  return (
    <div className="container container_post">
      <div className="heading">
        <h2>latest post</h2>
      </div>
      <div className="allLastPost">
        {lastPost.map(ele => {
          return (
            <div key={ele.id} className="post">
              <div className="img">
                <img src={ele.img} alt="" />
              </div>
              <div className="info">
                <h2>{ele.title}</h2>
                <p>{ele.date}</p>
                <span>{ele.logo}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
