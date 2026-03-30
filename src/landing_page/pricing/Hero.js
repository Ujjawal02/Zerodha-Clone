import React from "react";

function Hero() {
  return (
    <div className="container mt-5 pricing">
      <div className="row text-center">
        <div className="col">
          <h3 className="mt-5">Charges</h3>
          <h5 className="text-muted">List of all charges and taxes</h5>
        </div>
      </div>
      <div className="row text-center p-4 mt-5">
        <div className="col-lg-4 col-md-12">
          <img
            src="media/images/pricingEquity.svg"
            alt="prizeZero"
            className="ms-auto"
          />
          <h3>Free equity delivery</h3>
          <p>
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-lg-4 col-md-12">
          <img src="media/images/intradayTrades.svg" alt="prizeZero" />
          <h3>Intraday and F&O trades</h3>
          <p>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-lg-4 col-md-12">
          <img src="media/images/pricingMF.svg" alt="prizeZero" />
          <h3>Free direct MF</h3>
          <p>
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
