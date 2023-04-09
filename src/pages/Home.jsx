import React from 'react'
// import { useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Home = () => {
    // const params=useParams()
    const {state}=useLocation();
    console.log(state);
  return (
    <div>Home</div>
  )
}

export default Home