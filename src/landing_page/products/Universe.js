import React from "react";

function Universe() {
  return (
    <div className="container mt-5 p-5 universe mb-5">
      <div className="row text-muted text-center">
        <div className="col">
          <h4 className="mb-4">The Zerodha Universe</h4>
          <p className="mb-5">
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>
      </div>
      <div className="row ms-5 me-5">
        <div className="col p-3 ms-5">
          <img src="media/images/zerodhaFundhouse.png" alt="smallcaselogo" />
          <p className="text-muted text-small mb-5">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p> 

          <img src="media/images/streakLogo.png" alt="smallcaselogo" />
          <p className="text-muted text-small mb-5">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>

        </div>
        <div className="col p-3 ms-5">
          <img src="media/images/sensibullLogo.svg" alt="smallcaselogo" />
          <p className="text-muted text-small mb-5">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>

          <img src="media/images/smallcaseLogo.png" alt="smallcaselogo" />
          <p className="text-muted text-small mb-5">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>

        </div>
        <div className="col p-3 ms-5">
          <img src="media/images/goldenpiLogo.png" alt="smallcaselogo" />
          <p className="text-muted text-small mb-5">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>

          <img src="media/images/dittoLogo.png" alt="smallcaselogo" />
          <p className="text-muted text-small mb-5">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <button className="btn btn-primary" style={{width:"25%", height:"80%"}}>Sign up for free</button>
      </div>
    </div>
  );
}

export default Universe;
