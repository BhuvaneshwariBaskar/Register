import React, { useState ,useEffect} from 'react'
import { getUser } from '../axios/user.axios';
import { useParams } from 'react-router-dom';

const Display = () => {
    const {id}=useParams();
    const [data, setData] = useState('');
    console.log(id);
    useEffect(() => {
      getUser(id).then((res)=>{
        console.log(res.data)
        setData(res.data[0])
      })
    }, [])
    console.log(data);
  return (
    <section className="userData">
        <div className="formdata">
            <h1 className="headings">
                Student data
            </h1>
            <div className="display">
                <span className="data">
                    <h1 className="names">Name</h1>
                    <p className="para">{data.name}</p>
                </span>
            </div>
        </div>
    </section>
  )
}

export default Display