import React from 'react';

function Education() {
    return ( 
        <div className='container p-5 mt-5'>
            <div className='row'>
              <div className='col-6'>
                    <img src='media/images/education.svg' alt='educationIMage' style={{width:"75%"}}/>
              </div>
              <div className='col-6'>
                <h3 className='mb-3'>Free and open market education</h3>
                    <p>
                        Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
                    </p>
                    <div>
                        <a href='#' className='pe-3' style={{textDecoration:"none"}}>Varsity <i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                    <p className='mt-5'>
                        TradingQ&A, the most active trading and investment community in India for all your market related queries.
                    </p>
                    <div>
                        <a href='#' className='pe-3' style={{textDecoration:"none"}}>TradingQ&A <i className="fa-solid fa-arrow-right"></i></a>
                    </div>
              </div>
            </div>
        </div>
     );
}

export default Education;