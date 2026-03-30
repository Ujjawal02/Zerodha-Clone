import React from 'react';

function CreateTicket() {
    return ( 
        <>
      <div className="container">
        <div className="row mt-5">
            <h4 className='mb-4'>To create a ticket, select a relevant topic</h4>
          <div className="col-8">
            <div className="accordion" id="supportAccordion">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headerZero">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseZero"
                    arail-expanded="false"
                    arial-controls="collapseZero"
                  >
                    <i class="fa fa-plus-circle" aria-hidden="true"> </i>&nbsp; &nbsp;Account opening
                  </button>
                </h2>
                <div
                  id="collapseZero"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingZero"
                  data-bs-parent="#supportAccordion"
                >
                  <div className="accordion-body">
                    <ul style={{ lineHeight: "2.5" }}>
                      <a href="" style={{ textDecoration: "none" }}>
                        <li>Resident individual</li>
                      </a>
                      <a href="" style={{ textDecoration: "none" }}>
                        <li>Minor</li>
                      </a>
                      <a href="" style={{ textDecoration: "none" }}>
                        <li>Non Resident Indian (NRI)</li>
                      </a>
                      <a href="" style={{ textDecoration: "none" }}>
                        <li>Company, partnership, HUF and LLP</li>
                      </a>
                      <a href="" style={{ textDecoration: "none" }}>
                        <li>Glossary</li>
                      </a>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headerOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    arail-expanded="true"
                    arial-controls="collapseOne"
                  >
                    <i class="fa-solid fa-user"></i> &nbsp; &nbsp;Your Zerodha Account
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#supportAccordion"
                >
                  <div className="accordion-body">
                    <ul style={{ lineHeight: "2.5" }}>
                      <a href="" style={{ textDecoration: "none" }}>
                        <li>Your Profile</li>
                      </a>
                      <a href="" style={{ textDecoration: "none" }}>
                        <li>Account modification</li>
                      </a>
                      <a href="" style={{ textDecoration: "none" }}>
                        <li>
                          Client Master Report (CMR) and Depository Participant
                          (DP)
                        </li>
                      </a>
                      <a href="" style={{ textDecoration: "none" }}>
                        <li>Nomination</li>
                      </a>
                      <a href="" style={{ textDecoration: "none" }}>
                        <li>Transfer and conversion of securities</li>
                      </a>
                      <a href="" style={{ textDecoration: "none" }}>
                        <li>Your Profile</li>
                      </a>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headerTwo">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    arail-expanded="false"
                    arial-controls="collapseTwo"
                  >
                    <i class="fa-solid fa-drum"></i> &nbsp; &nbsp;Kite
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#supportAccordion"
                >
                  <div className="accordion-body">
                    <ul style={{ lineHeight: "2.5" }}>
                      <a href="" style={{ textDecoration: "none" }}>
                        <li>IPO</li>
                      </a>
                      <a href="" style={{ textDecoration: "none" }}>
                        <li>Trading FAQs</li>
                      </a>
                      <a href="" style={{ textDecoration: "none" }}>
                        <li>Margin Trading facility (MTF) and margins</li>
                      </a>
                      <a href="" style={{ textDecoration: "none" }}>
                        <li>Charts and orders</li>
                      </a>
                      <a href="" style={{ textDecoration: "none" }}>
                        <li>Alters and Nudges</li>
                      </a>
                      <a href="" style={{ textDecoration: "none" }}>
                        <li>General</li>
                      </a>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headerThree">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    arail-expanded="false"
                    arial-controls="collapseTwo"
                  >
                    <i class="fa-solid fa-indian-rupee-sign"></i> Funds
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#supportAccordion"
                >
                  <div className="accordion-body">
                    <ul style={{ lineHeight: "2.5" }}>
                      <a href="" style={{ textDecoration: "none" }}>
                        <li>Add money</li>
                      </a>
                      <a href="" style={{ textDecoration: "none" }}>
                        <li>Withdraw money</li>
                      </a>
                      <a href="" style={{ textDecoration: "none" }}>
                        <li>Add nank accounts</li>
                      </a>
                      <a href="" style={{ textDecoration: "none" }}>
                        <li>eMandates</li>
                      </a>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headerFour">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    arail-expanded="false"
                    arial-controls="collapseTwo"
                  >
                    <i class="fa-solid fa-gamepad"></i> &nbsp; &nbsp;Console
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#supportAccordion"
                >
                  <div className="accordion-body">
                    <ul style={{ lineHeight: "2.5" }}>
                      <a href="" style={{ textDecoration: "none" }}>
                        <li>Portfolio</li>
                      </a>
                      <a href="" style={{ textDecoration: "none" }}>
                        <li>Corporate actions</li>
                      </a>
                      <a href="" style={{ textDecoration: "none" }}>
                        <li>Funds statement</li>
                      </a>
                      <a href="" style={{ textDecoration: "none" }}>
                        <li>Reports</li>
                      </a>
                      <a href="" style={{ textDecoration: "none" }}>
                        <li>Profile</li>
                      </a>
                      <a href="" style={{ textDecoration: "none" }}>
                        <li>Segments</li>
                      </a>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headerFive">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    arail-expanded="false"
                    arial-controls="collapseTwo"
                  >
                    <i class="fa-solid fa-coins"></i>&nbsp; &nbsp; Coin
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingFive"
                  data-bs-parent="#supportAccordion"
                >
                  <div className="accordion-body">
                    <ul style={{ lineHeight: "2.5" }}>
                      <a href="" style={{ textDecoration: "none" }}>
                        <li>Mutual funds</li>
                      </a>
                      <a href="" style={{ textDecoration: "none" }}>
                        <li>National pension Scheme (NSP)</li>
                      </a>
                      <a href="" style={{ textDecoration: "none" }}>
                        <li>Fixed Deposit (FD)</li>
                      </a>
                      <a href="" style={{ textDecoration: "none" }}>
                        <li>Features on Coin</li>
                      </a>
                      <a href="" style={{ textDecoration: "none" }}>
                        <li>Payments and Orders</li>
                      </a>
                      <a href="" style={{ textDecoration: "none" }}>
                        <li>General</li>
                      </a>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right Part */}
          <div className="col-4">
            <div className="p-3 mb-4 border rounder bg-light">
              <ul>
                <a href="" className="d-block mb-2 text-primary fw-bold">
                  <li>Latest Intraday leverages and Square-off timings</li>
                </a>
                <a href="" className="d-block mb-2 text-primary fw-bold">
                  <li>Current Takeovers and Delisting – April 2026</li>
                </a>
              </ul>
            </div>
            <div className="border rounder bg-light">
              <h5 className="mb-3 ps-4 mt-3">Quick links</h5>
              <ol className="list-group list-group-numbered">
                <li className="list-group-item">
                  <a href="#" className="text-decoration-none">
                    Track account opening
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="#" className="text-decoration-none">
                    Track segment activation
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="#" className="text-decoration-none">
                    Intraday margins
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="#" className="text-decoration-none">
                    Kite user manual
                  </a>
                </li>
                <li className="list-group-item">
                  <a href="#" className="text-decoration-none">
                    Learn how to create a ticket
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
     );
}

export default CreateTicket;