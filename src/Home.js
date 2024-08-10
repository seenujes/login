import React, { useEffect, useState } from 'react'
import { db,auth } from './Config/Firebase';
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { getDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { Link } from 'react-router-dom';

function Home  () {
  const [userDetails,setUserDetails] = useState(null)
  const fetchUserData = async() =>{
    auth.onAuthStateChanged(async(user)=>{
      console.log(user)
      const docRef = doc(db,"users",user.uid)
      const docSnap = await(getDoc(docRef))
      if(docSnap.exists()){
        setUserDetails(docSnap.data())
        console.log(docSnap.data())
      }
      else{
        console.log("user is not logged in...")
      }
    })
  }
  useEffect(()=>{
    fetchUserData()
  },[])
  return (
    <main className='bg-blue-400 w-full h-screen flex justify-center items-center'>
        <div className='bg-red-100 w-2/6 h-2/6 flex justify-center items-center'>
          {userDetails ?(
            <div className='space-y-5'>
            <h1 className='font-extrabold text-3xl'>Welocome</h1>
            <h1 className='font-extrabold'>Name : {userDetails.fname}{userDetails.lname}</h1>
            <h1 className='font-extrabold'>Email : {userDetails.email}</h1>
            <h1 className='font-extrabold'>Department : {userDetails.dept}</h1>
            <button className='bg-red-700 text-white float-right px-1 py-1 rounded-lg hover:bg-red-500'><Link to="/">Logout</Link></button>
            </div>
          ):
          (
            <p>Loading....</p>
          )
          }
        </div>
    </main>
  )
}

export default Home