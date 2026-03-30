import React from 'react';

function Hero() {
    return ( 
        <div className='conrainer mb-5 pb-5 border-bottom'>
            <div className='row text-center mt-5 mb-5'>
                <h3 className='mt-5'>Zerodha Products</h3>
                <h4 className='text-muted mt-3'>Sleek, modern, and intuitive trading platforms</h4>
                <p>Check out our <a href="" style={{textDecoration: "none"}}>investement offering <i className="fa-solid fa-arrow-right"></i></a></p>
            </div>
        </div>
     );
}

export default Hero;