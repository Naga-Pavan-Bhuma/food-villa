import React from "react";
import "./Shimmer.css"; 
const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array(10).fill("").map((_, index) => (
        <div className="shimmer-card" key={index}>
          <div className="shimmer-image"></div>
          <div className="shimmer-content">
            <div className="shimmer-line shimmer-line-short"></div>
            <div className="shimmer-line shimmer-line-long"></div>
            <div className="shimmer-line shimmer-line-medium"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
