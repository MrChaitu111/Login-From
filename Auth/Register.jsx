/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import '../App.css';


const Register = () => {

 const [data,setData] = useState({
    username : " ",
    email : " ",
    password : " ",
    confirmpassword:" "
})

const navigate = useNavigate();

const changeHandler = e =>{
    setData({...data,[e.target.name]:e.target.value})
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    console.log(data);
    try{
      //Server Side rendering Url http://localhost:port no/login, you only change port number what do you want 
      // inside fetch function
      const res =  await fetch (`http://localhost:6660/register`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify(data)
      });
      if(res.ok){
        setData({
          username : " ",email : " ", password : " ",confirmpassword:" "});
          navigate('/login')
          toast.success("Register Sucessfully..!")// Toast added u you don't change  and install package name toast
          console.log("Register Sucessfully")
      }
      console.log(res);
    }catch(error){
      console.log("error",error)
    }

  }

  
 
  return (
    <div className=' w-[60vw] h-[60vh] justify-between  p-2 items-center mt-6 rounded-md' >
        <div className='bg-white  max-w-md shadow-xl  rounded overflow-hidden p-6 mx-auto'>
          <h3 className='text-center font-bold text-2xl text-red-600'>User Register</h3>
          <form className='grid gap-4 mt-5' onSubmit={handleSubmit} autoComplete='off'>
              <div className='flex flex-col gap-1'>
                <label htmlFor='name' className='text-black'>User Name :</label>
                <input onChange={changeHandler}type='text'name='username' placeholder='Enter your name' 
                  className='bg-slate-100 px-2 py-1 text-black focus:outline-primary  hover:invalid:outline-red-700 hover:valid:outline-green-400'
                  required
                />
              </div>
              <div className='flex flex-col gap-1'>
                <label htmlFor='email' className='text-black'>Email :</label>
                <input onChange={changeHandler} type='email' name='email' placeholder='Enter your email' 
                  className='bg-slate-100 px-2 py-1 focus:outline-primary text-black  hover:invalid:outline-red-700 hover:valid:outline-green-400'
                  required
                />
              </div>
              <div className='flex flex-col gap-1'>
                <label htmlFor='password' className='text-black'>Password :</label>
                <input onChange={changeHandler} type='password' name='password' placeholder='Enter password' 
                  className='bg-slate-100 px-2 py-1 focus:outline-primary text-black  hover:invalid:outline-red-700 hover:valid:outline-green-400'
                  required
                />
              </div>
              <div className='flex flex-col gap-1'>
                <label htmlFor='password' className='text-black' >Confirm Password :</label>
                <input onChange={changeHandler} type='password' name='confirmpassword' placeholder='Confirm password' 
                  className='bg-slate-100 px-2 py-1 focus:outline-primary text-black  hover:invalid:outline-red-700 hover:valid:outline-green-400'
                  required
                />
              </div>
              <button type='submit' className="bg-red-500 h-10 justify-center text-white  active:bg-green-500  focus:outline-none focus:ring focus:ring-violet-300 rounded-lg">
                Register
                {/*  hover:bg-blue-600  */}
             </button> 
          </form>

          <p className='my-3 text-center text-black'>Already have account ? <Link to="/login" className=' hover:text-blue-600 pl-1  text-red-500 font-bold'>Login</Link></p>
        </div>
    </div>
  )
}

export default Register