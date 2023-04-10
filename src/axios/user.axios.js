import axios from 'axios';

export const register=async(username,email,mobile,address)=>
    axios.post("http://localhost:8080/api/register",{
        username,
        email,
        mobile,
        address
    });
