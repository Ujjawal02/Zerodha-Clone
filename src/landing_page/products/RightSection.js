import React from "react";

function RightSection({imageUrl, 
    productName, 
    productDescription, 
    learnMore}) {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col ms-5 ps-5">
          <h3>{productName}</h3>
          <p>{productDescription}</p>
          <a href={learnMore}>
            {" "}
            Learn More <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="col p-3 text-center ms-5 ps-5 me-5">
          <img src={imageUrl} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
