import React,{useState} from 'react'
import { register } from '../axios/user.axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('')
    const [address, setAddress] = useState('')
    const navigate=useNavigate();
    const handleSubmit=async(e)=>{
        
        e.preventDefault();
        console.log("Okay");
        await register(username,email,mobile,address).then((res)=>{
            setUsername("");
            setAddress("");
            setEmail("");
            setMobile("");
            console.log("Hey");
            navigate(`/home`)
        })
        .catch((err)=>{
            console.log(err);
        })
    }

  return (
    <section className="formclass" onSubmit={handleSubmit}>
    <form id='form' className='form' >
        <h1 className='Heading'>Students registration form</h1>
        <div className="input">
            <label htmlFor="username">Username</label>
            <input type="text" id='username' className='username' onChange={(e)=>setUsername(e.target.value)}/>
        </div>
        <div className="input">
            <label htmlFor="email">Email</label>
            <input type="email" id='email' className='username' onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className="input">
            <label htmlFor="number">Mobile Number</label>
            <input type="text" id='number' className='username' onChange={(e)=>setMobile(e.target.value)}/>
        </div>
        <div className="input">
            <label htmlFor="address">Address</label>
            <input type="text" id='address' className='username' onChange={(e)=>setAddress(e.target.value)}/>
        </div>
        <button type="submit">Submit</button>
    </form>
</section>

  )
}

export default Register