import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import {db,auth} from "../Config/Firebase";
import { doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword ,createUserWithEmailAndPassword,sendEmailVerification} from "firebase/auth";


export const Signup = () => {
  const [email,setEmail]=useState("")
  const [pass,setPassword]=useState("")
  const [Fname,setFirstname]=useState("")
  const [Lname,setLastname]=useState("")
  const [dept,setDept]=useState("")
  
  const handleSignup = async () => {
    try{
      console.log("work")
      const userresponse = await(createUserWithEmailAndPassword(auth,email,pass))
      const user =auth.currentUser
      if(user){
          await setDoc(doc(db,"users",user.uid),{
              email:user.email,
              fname:Fname,
              lname:Lname,
              dept:dept
          })
      }
      console.log("sucessfully created")

      await toast.success("sucessfully registered",{position:"top-center"})
      window.location.href="/"
  // if(userresponse.user){
  //    const data= await (sendEmailVerification(userresponse.user))
  //    console.log(data,"data")
  // }
  // console.log(userresponse,"resp")
  // console.log("hello",email,pass)
  
      
  }
  catch(error){
      console.log("this is error",error)   
      toast.error(error.message,{position:"bottom-center"})  
  }
  //   try {
  //     const response = await SignUppage(email,pass,username)
  //     Storedata(email,pass,username)
  //     // console.log(response)
  //     console.log("priiiint",email,pass,username)
  //   } catch (error) {
  //     console.log("error in login",error);
  //   }
  };
  return (
    <main className='bg-gray-300 w-full h-screen flex justify-center items-center'>
        <div className='bg-white w-2/6 px-5 py-5 space-y-5'>
        <h1 className='text-3xl text-blue-800 flex justify-center font-extrabold'>SignUp</h1>
        <div className='space-y-5'>
            <h1>Firstname:
            <input type='text' className='h-8 w-full border-2 border-black' placeholder='create a username' onChange={(e)=>setFirstname(e.target.value)}/>
            </h1>
            <h1>Lastname:
            <input type='text' className='h-8 w-full border-2 border-black' placeholder='create a username' onChange={(e)=>setLastname(e.target.value)}/>
            </h1>
            <h1>Department:
            <input type='text' className='h-8 w-full border-2 border-black' placeholder='create a username' onChange={(e)=>setDept(e.target.value)}/>
            </h1>
            <h1>Email:
            <input type='email' autoComplete='off' className='h-8 w-full border-2 border-black' placeholder='enter your email' onChange={(e)=>setEmail(e.target.value)}/>
            </h1>
            <h1>Password:
            <input type='password' className='h-8 w-full border-2 border-black' placeholder='create a password'onChange={(e)=>setPassword(e.target.value)}/>
            </h1>   
            <button className='bg-blue-600 w-full h-8 rounded-full text-white hover:bg-blue-400' onClick={handleSignup}>SignUp</button>
        </div>
        <h1>Have an account.<Link to="/" className='text-blue-800 hover:text-blue-500'>Login</Link></h1>
        </div>
    </main>
  )
}
