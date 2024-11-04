/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, {  useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {store} from '../App.jsx';
import { toast } from "react-toastify";

const Login = () => {

    const navigate = useNavigate();
    const [token,setToken] = useContext(store); 

    const [data,setData] = useState({
      email : " ",
      password : " "
  })

  const changeHandler = e =>{
    setData({...data,[e.target.name]:e.target.value})
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    console.log(data);
    try{
      //Server Side rendering Url http://localhost:port no/login, you only change port number what do you want 
      // inside fetch function
      const res =  await fetch(`http://localhost:6660/login`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify(data)
      });
      if(res.ok){
        setData({email : " ", password : " "});
        setToken(token)
          navigate("/")
          toast.success("Login Sucessfully") // Toast added u you don't change  and install package name toast
          console.log("Login Sucess")
      }else{
        toast.error("Check the email & password..?")
        console.log("Error")
      }
      console.log(res);
    }catch(error){
      console.log("error",error)
      
    }

  }
 

  return (
    <>
    
    <div className='min-h-4 items-center justify-center flex ml-[35%] mt-5 rounded-md'>
    <div className='bg-white w-full max-w-md shadow-xl  rounded overflow-hidden p-4 mx-auto'>
      <h3 className='text-center font-bold text-2xl text-red-600'>Login</h3>

      <form className='grid gap-4 mt-5' onSubmit={handleSubmit}>
          <div className='flex flex-col gap-1'>
            <label htmlFor='email' className="login-page text-black">Email :</label>
            <input onChange={changeHandler}
              type='email'
              id='email'
              name='email'
              placeholder='Enter your email' 
              className='bg-slate-100 px-2 text-black py-1 focus:outline-primary hover:invalid:outline-red-700 hover:valid:outline-green-400'
              required
            />
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor='password' className="text-black">Password :</label>
            <input onChange={changeHandler}
              type='password'
              id='password'
              name='password'
              placeholder='Enter password' 
              className='bg-slate-100 text-black px-2 py-1 focus:outline-primary  hover:invalid:outline-red-700 hover:valid:outline-green-400'
              required
            />
          </div>
          <button type="submit" className="bg-red-500 h-10 justify-center text-white
          
            active:bg-green-500  focus:outline-none focus:ring focus:ring-violet-300 rounded-lg">
             Login
             {/*  hover:bg-blue-600  */}
         </button> 
      </form>
      <p className='my-3 text-center text-black'>Don't  have an Account ? <Link to="/register" className=' hover:text-blue-600 pl-1 text-red-600 font-bold'>Register</Link></p>
    </div>
</div>

</>
)};

export default Login;
