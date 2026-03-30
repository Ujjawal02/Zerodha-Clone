import React from 'react';
function Team() {
    return ( 
     <div className='container'>
        <div className="row mt-5 mb-5">
            <div className="col text-center">
                <img src="media\images\nithinKamath.jpg" alt="peopleImage" className="m-5 p-5 pb-0 mb-3" style={{borderRadius:"100%", width:"50%"}}/>
                <h6>Nithin Kamath</h6>
                <br/>
                <p>Founder, CEO</p>
            </div>
            <div className="col">
                <h3 className="mb-5 ps-3">People</h3>
                <p className='mt-5 pt-3'>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                <p className=''>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                <p className=''>Playing basketball is his zen.

</p>
                <p className='mt-4'>Connect on <a href=''>Homepage</a> / <a href=''>TradingQnA</a> / <a href=''>Twitter</a></p>
            </div>
        </div>   
      </div>
     );
}

export default Team;