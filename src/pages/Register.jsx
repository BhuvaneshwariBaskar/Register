import React, { useState } from "react";
import Input from "../components/Input";
import "./Register.css";
import { register } from "../axios/user.axios";
import {useNavigate} from 'react-router-dom'

const Register = () => {
  const navigate=useNavigate();
  const [name, setName] = useState("");
  // const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("Okay");

    await register(name,email,mobile,address,city).then((res)=>{
      // console.log(res);
        setAddress("");
        setCity("");
        setEmail("");
        setMobile("");
        setName("");
        navigate(`/${res.data}`)
    })
    .catch((err)=>{
      console.log(err);
    })
  };

  return (
    <section className="formbg">
      <form id="form" className="form" onSubmit={(e)=>handleSubmit(e)}>
        <h1 className="heading">Students Registration form</h1>
        <div className="inputtag">
          {/* <span className="singleLine"> */}
            <Input
              id="name"
              label="Name"
              type="text"
              onChangeValue={(e) => setName(e.target.value)}
            />
            {/* <Input
              id="lname"
              label="LastName"
              type="text"
              onChangeValue={(e) => setLname(e.target.value)}
            /> */}
          {/* </span> */}
          <Input
            id="email"
            label="Email"
            type="email"
            onChangeValue={(e) => setEmail(e.target.value)}
          />
          <Input
            id="mobile"
            label="Mobile Number"
            type="text"
            onChangeValue={(e) => setMobile(e.target.value)}
          />
          <Input
            id="address"
            label="Name"
            type="text"
            onChangeValue={(e) => setAddress(e.target.value)}
          />
          <Input
            id="city"
            type="text"
            label="City"
            onChangeValue={(e) => setCity(e.target.value)}
          />
        </div>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Register;
