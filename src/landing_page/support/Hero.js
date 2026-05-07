import React from "react";
function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
        <div className="pt-5 ps-5 pe-5" id="supportWrapper">
            <h5>Support Portal</h5>
            <a href="" className="pe-5 me-5">Track Tickets</a>
        </div>

        <div className="row p-5  mb-5">
            <div className="col-6 mb-5 ps-5 ms-5">
                <h4 className="pb-2">Search for an answer or browse help <br/> topic to create a ticket</h4>
                <input placeholder=" Eg: How do i active f&Q, why is my order getting reject" className="mb-2"/>
                <br/>
                <a href="">Track account opening</a> &nbsp;
                <a href="">Track segment axtivation</a>
                <br/>
                <a href="">Intraday margins</a> &nbsp;
                <a href="">Kite user manual</a>
            </div>
            <div className="col ms-5">
                <h4>Featured</h4>
                <a href="">current Takeovers and Delisting march 2026</a><br/>
                <a href="">Latest Intraday leverages - MIS & CO</a>
            </div>
        </div>

    </section>
  );
}

export default Hero;
