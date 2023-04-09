import React, { useState, useEffect } from "react";
import {register} from '../axios/user.axios';
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate=useNavigate();
    const [name, setName] = useState("");
    const [pass, setPass] = useState("");

    const HandleSubmit =async(e) => { 
      e.preventDefault()
      console.log(name,pass);
      await register(name,pass).then((res)=>{
        
        setName(" ");
        setPass(" ");
        navigate(`/${res.data}`,{state:{...res.data}});
      })
      .catch((err)=>{
        console.log("Okay");
      })
    };


    return (
      <div className="flex items-center justify-center relative h-[100vh] w-[100vw]">
        <form
          id="form"
          className="flex flex-col items-center justify-center relative bg-black h-[70vh] w-[30vw]"
          onSubmit={HandleSubmit}
        >
        <h1 className="text-5xl text-white font-bold m-6">Register</h1>
  
          <span>
            <label htmlFor="username" className="text-xl text-white ">UserName</label>
            <input
              className="border-2 border-black m-3 h-8 rounded-md"
              type="text"
              id="username"
              placeholder="Username"
              onChange={(e) => setName(e.target.value)}
            />
          </span>
  
          <span>
            <label htmlFor="password" className="text-xl text-white ">Password</label>
            <input
             className="border-2 border-black m-4 h-8 rounded-md"
              type="password"
              id="password"
              placeholder="password"
              onChange={(e) => setPass(e.target.value)}
            />
          </span>
          <button type="submit" className="text-xl text-black border-2 border-white bg-white rounded-md px-4 py-2">Submit</button>
        </form>
      </div>
    )
}

export default Register
