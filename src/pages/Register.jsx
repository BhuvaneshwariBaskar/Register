import React, { useState } from "react";
import Input from "../components/Input";
import { register } from "../axios/user.axios";
import {useNavigate} from 'react-router-dom'

 
const Register = () => {
    const navigate=useNavigate();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault()
    console.log("hello");
    await register(fname,lname,email,mobile,address,city,state,pincode).then((res)=>{
      console.log("Hey");
      console.log(res);
        setAddress("");
        setCity("");
        setEmail("");
        setFname("");
        setLname("");
        setMobile("");
        setPincode("");
        setState("");
        // navigate(`/${res.data}`);
        navigate('/home')
    }).catch((error)=>{
        console.log(error);
    })

  };
  return (
    <section className="formsec">
      <form
        id="form"
        className="form"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <h1 className="head">Students Registration Form</h1>
        <div className="inputContent">
          <span className="nameinput">
            <Input
              type="text"
              id="fname"
              label="FirstName"
              placeholder="Enter Your FirstName"
              onChangeValue={(e) => setFname(e.target.value)}
            />
            <Input
              type="text"
              id="lname"
              label="LastName"
              placeholder="Enter Your LastName"
              onChangeValue={(e) => setLname(e.target.value)}
            />
          </span>
          <Input
            type="email"
            id="email"
            label="Email"
            placeholder="Enter Your Email"
            onChangeValue={(e) => setEmail(e.target.value)}
          />
          <Input
            type="text"
            id="mobile"
            label="Mobile Number"
            placeholder="Enter Your Mobile Number"
            onChangeValue={(e) => setMobile(e.target.value)}
          />
           <Input
            type="text"
            id="address"
            label="Address"
            placeholder="Enter Your Address"
            onChangeValue={(e) => setAddress(e.target.value)}
          />
          <Input
            type="text"
            id="city"
            label="City"
            placeholder="Enter Your City"
            onChangeValue={(e) => setCity(e.target.value)}
          />
            <Input
            type="text"
            id="state"
            label="State"
            placeholder="Enter Your State"
            onChangeValue={(e) => setState(e.target.value)}
          />
            <Input
            type="text"
            id="pincode"
            label="Pincode"
            placeholder="Enter Your Pincode"
            onChangeValue={(e) => setPincode(e.target.value)}
          />
        </div>
        <button type="submit" className="btn">Submit</button>
      </form>
    </section>
  );
};

export default Register;
