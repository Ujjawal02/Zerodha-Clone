import React from 'react';

function Awards() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='media/images/largestBroker.svg'/>
                </div>
                <div className='col-6 p-5 mt-3'>
                    <h3>Largest stock broker in India</h3>
                    <p className='mb-2'>
                        2+ million Zerodha clients contribute to over 15% of India’s daily retail trading volume. 
                        With cutting-edge technology, transparent pricing, and a focus on empowering investors, 
                        Zerodha has grown to become the country’s largest stock broker. 
                    </p>
                    <div className='row'>
                        <div className='col-6'>
                            <ul>
                                <li><p>Futures and Options</p></li>
                                <li><p>Commodity derivatives</p></li>
                                <li><p>Currency derivatives</p></li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li><p>Stocks & IPOs</p></li>
                                <li><p>Direct mutual funds</p></li>
                                <li><p>Bonds and Gov. Securities</p></li>
                            </ul>
                        </div>
                    </div>
                    <img src='media/images/presslogos.png' alt='pressLogos' style={{width:"90%"}}/> 
                </div>
            </div>
        </div>
     );
}

export default Awards;