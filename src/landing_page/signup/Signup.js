import React from 'react';

function Signup() {
    return ( 
        <div className='container mt-5'>
            <div className='row text-center mt-5 mb-5 p-5'>
                <h3 className='mb-4'>Open a free demat and trading account online</h3>
                <h5 className='text-muted'>Start investing brokerage free and join a community of 1.6+ crore investors and traders</h5>
            </div>
            <div className='row mt-5 ms-5'>
                <div className='col'>
                    <img src='media/images/signup.png' alt='signupImage'/>
                </div>
                <div className='col'>
                    <h3 className='text-muted'>Signup Now</h3>
                    <p className='text-muted' style={{fontSize:"1.1rem"}}>Or track your existing application</p>
                    <input placeholder='Enter your mobile number' style={{width:"70%", height:"14%"}}/>
                </div>
            </div>
        </div>
     );
}

export default Signup;