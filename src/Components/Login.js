import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import {db,auth} from "../Config/Firebase";
import { signInWithEmailAndPassword } from 'firebase/auth'
import {Loginpage} from '../Actions/index'
import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [email,setEmail]=useState("")
  const [pass,setPassword]=useState("")
  // const navigate = useNavigate(); // Initialize the useNavigate hook
  
  // const [isLogin,setIsLogin]=useState(false)
  
  const handleLogin = async () => {
    try{
      console.log("work")
      await(signInWithEmailAndPassword(auth,email,pass))
      toast.success("Login Successfully", { position: "bottom-center" })
      window.location.href="/home"
  // if(userresponse.user){
  //    const data= await (sendEmailVerification(userresponse.user))
  //    console.log(data,"dataaaaaaa")
  // }
  
  // console.log(userresponse,"resp")
  // console.log("hello",email,pass)
      
  }
  catch(error){
      console.log("this is error",error)    
      toast.error(error.message,{position:"bottom-center"})   
  }
}
    // try {
    //   const response = await Loginpage(email,pass)
    //   console.log(response)
    //   // setIsLogin(true)
    //   // if (isLogin) { // Assuming the response has a success field
    //   //   navigate('/home'); // Navigate to home page on successful login
    //   // } else {
    //   //   console.log("there is an login error")
    //   //   // setLoginError('Invalid credentials'); // Set an error message if login fails
    //   // }
    //   console.log("print",email,pass)
    //   // setIsLogin(true)
    //   // if(isLogin){
    //   //   return <Navigate to="/home"/>
    //   // }
    //   // else{
    //   //   return <div>please login</div>
    //   // }
      
    // } catch (error) {
    //   console.log("error in login",error);
    // }
 

  return (
    <main className='bg-gray-300 w-full h-screen flex justify-center items-center px-5 py-5'>
      <div className='container w-1/4 h-3/5 bg-white items-center px-5 py-5'>
      <h1 className='font-extrabold text-3xl text-blue-800 items-center flex justify-center'>Login</h1>
      <div className='block items-center px-5 py-5 space-y-5'>
        <h1 className='w-full text-lg '>
          Email:
          <br></br>
          <input type='text' autoComplete='off' className='w-full h-8 border-2 border-black' placeholder='enter username' onChange={(e)=>setEmail(e.target.value)}/>
        </h1>
        <br></br>
        <h1 className='text-lg'>
          Password:
          <br></br>
          <input type='password' className='w-full h-8 border-2 border-black' placeholder='enter Password'  onChange={(e)=>setPassword(e.target.value)}/>
        </h1>
        <br></br>
        <button className='flex justify-center bg-blue-600 hover:bg-blue-400  text-white w-full h-8 rounded-full'onClick={handleLogin}>Login</button>
      </div>
      <br>
      </br>
      <h1>Don't have account.<Link to="/signup" className='text-blue-800 hover:text-blue-500'>SignUp</Link></h1>
      </div>

    </main>
  );
}
