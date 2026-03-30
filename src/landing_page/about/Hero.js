import React from "react";
// import {Link} from "react-router-dom"
function Hero() {
  return (
    <div className="container">
      <div className="row text-center mt-5 mb-5">
        <div className="col mt-5">
          <h3 className="text-muted">
            We pioneered the discount broking model in India.
            <br />
            Now, we are breaking ground with our technology.
          </h3>
        </div>
      </div>
      <div className="row border-top mt-5 ms-5 text-muted">
        <div className="col mt-5 ms-5 me-5">
          <p className="mt-5 me-5">
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </p>
          <br />
          <p className="me-5">
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <br />
          <p className="me-5">
            Over 1.6+ crore clients place billions of orders every year through
            our powerful ecosystem of investment platforms, contributing over
            15% of all Indian retail trading volumes
          </p>
        </div>
        <div className="col mt-5 me-5">
          <p className="mt-5 me-5">
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <br />
          <p className="me-5">
            <a href="" style={{textDecoration:"none"}}>Rainmatter</a>, our fintech fund and incubator, has invested in several
            fintech startups with the goal of growing the Indian capital
            markets.
          </p>
          <br />
          <p className="me-5">
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our blog or see what the media is saying about
            us or learn more about our business and product philosophies.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
