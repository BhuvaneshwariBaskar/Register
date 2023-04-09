import axios from "axios";

export const register=(name,pass)=>
    axios.post("http://localhost:8080/api/register",{
        name,pass
});

