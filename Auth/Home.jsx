/* eslint-disable no-unused-vars */
// import { Link } from 'react-router-dom'
import React from 'react'
import Left from '../components/leftside/Left'
import Right from '../components/rightside/Right'
const Home = () => {
  return (
    <div className='flex'>
        <Left/>
        <Right/>
      {/* <li className='list-none'><Link to='/register'>Register</Link></li>
      <li className='list-none'><Link to='/login'>Login</Link></li> */}
    </div>
  )
}

export default Home
