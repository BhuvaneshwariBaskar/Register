import React, { useEffect, useState } from 'react'
import { getUser } from '../axios/user.axios'
import { useParams } from 'react-router-dom'

const Display = () => {
  const [data, setData] = useState("")
  const {id}=useParams()
  useEffect(() => {
    getUser(id).then((res)=>{
    // console.log(res.data);

        setData(res.data[0])
    })
    // console.log(data);
   
  }, [])
  
  return (
    <section className="displaydetails">
        <div className="data">
            <h1 className="headdata">
                Students Details
            </h1>
            <span className="dataname">
                <h1 className="name1">FirstName</h1>
                <p className='name1'>{data.fname}</p>
            </span>
            <span className="dataname">
                <h1 className="name1">LastName</h1>
                <p className='name1'>{data.lname}</p>
            </span>
            <span className="dataname">
                <h1 className="name1">Email</h1>
                <p className='name1'>{data.email}</p>
            </span>
            <span className="dataname">
                <h1 className="name1">Mobile Number</h1>
                <p className='name1'>{data.mobile}</p>
            </span>
            <span className="dataname">
                <h1 className="name1">Address</h1>
                <p className='name1'>{data.address}</p>
            </span>
            <span className="dataname">
                <h1 className="name1">City</h1>
                <p className='name1'>{data.city}</p>
            </span>
            <span className="dataname">
                <h1 className="name1">State</h1>
                <p className='name1'>{data.mobile}</p>
            </span>
            <span className="dataname">
                <h1 className="name1">Pincode</h1>
                <p className='name1'>{data.pincode}</p>
            </span>
        </div>
    </section>
  )
}

export default Display