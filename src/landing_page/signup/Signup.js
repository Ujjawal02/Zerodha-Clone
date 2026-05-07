import React, { useState } from "react";
import axios from "axios";
function Signup() {
  const [formData, setFormData] = useState({
    username:"",
    email:"",
    password:"",
  });

  const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

  const handleSubmit = async () => {
    console.log("Button clicked"); 
    try{
        const res = await axios.post("http://localhost:8080/signup", {
            ...formData,
            createdAt: new Date(),
        },
        {withCredentials: true}
        );
        console.log(res.data);
        
        if(res.data.success){
            window.location.href = "http://localhost:3001";
        }
    }
    catch(err){
        console.log(err);
    }
  };
  return (
    <div className="container mt-5">
      <div className="row text-center mt-5 mb-5 p-5">
        <h3 className="mb-4">Open a free demat and trading account online</h3>
        <h5 className="text-muted">
          Start investing brokerage free and join a community of 1.6+ crore
          investors and traders
        </h5>
      </div>
      <div className="row mt-5 ms-5">
        <div className="col">
          <img src="media/images/signup.png" alt="signupImage" />
        </div>
        <div className="col">
          <h3 className="text-muted">Signup Now</h3>
          <p className="text-muted" style={{ fontSize: "1.1rem" }}>
            Or track your existing application
          </p>
          <input
            name="username"
            placeholder=" Enter your username"
            style={{ width: "70%", height: "10%", borderRadius: "16px" }}
            onChange={handleChange}
            className="mt-2"
          />
          <input
            name="email"
            placeholder=" Enter your email"
            style={{ width: "70%", height: "10%", borderRadius: "16px" }}
            onChange={handleChange}
            className="mt-2"
          />
          <input
            name="password"
            placeholder=" Set Your password"
            style={{ width: "70%", height: "10%", borderRadius: "16px" }}
            onChange={handleChange}
            className="mt-2"
          />
          <br/>
            <button onClick={handleSubmit} className="btn btn-primary mt-3 ms-3">
            Continue
            </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
