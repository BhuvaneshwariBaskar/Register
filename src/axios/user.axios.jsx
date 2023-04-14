import axios from 'axios';

export const register=async(name,email,mobile,address,city)=>
   await axios.post("http://localhost:8080/api/register",{
        name,
        email,
        mobile,
        address,
        city
    })

export const getUser=async(id)=>
    await axios.get(`http://localhost:8080/api/${id}`)
