import React from "react";

function LeftSection({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  linkName,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5 pt-5">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col p-3 text-center ms-5 ps-5 me-5">
            <img src={imageUrl}/>
        </div>
        <div className="col ms-5 ps-5">
            <h3>{productName}</h3>
            <p>{productDescription}</p>
            <div className="p-3">
                <a href={tryDemo} className="pe-5">{linkName} <i className="fa-solid fa-arrow-right"></i></a>
                <a href={learnMore}> Learn More <i className="fa-solid fa-arrow-right"></i></a>
            </div>
            <div className="p-3">
                <a href={googlePlay} className="pe-2"> <img src="media/images/googlePlayBadge.svg"/> </a>
                <a href={appStore}> <img src="media/images/appStoreBadge.svg"/> </a>
            </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
