import axios from 'axios';

export const register=async(fname,lname,email,mobile,address,city,state,pincode)=>
    await axios.post("http://localhost:8080/api/register",{
        fname,
        lname,
        email,
        mobile,
        address,
        city,
        state,
        pincode
    })

export const getUser=async(id)=>
    await axios.get(`http://localhost:8080/api/${id}`)
