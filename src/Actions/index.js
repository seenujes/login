import { signInWithEmailAndPassword ,createUserWithEmailAndPassword,sendEmailVerification} from "firebase/auth";
import {db,auth} from "../Config/Firebase";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { getDoc } from "firebase/firestore";
import { toast } from "react-toastify";



export const SignUppage=async (email,pass,username)=>{
    try{
        console.log("work")
        const userresponse = await(createUserWithEmailAndPassword(auth,email,pass))
        const user =auth.currentUser
        if(user){
            await setDoc(doc(db,"users",user.uid),{
                email:user.email,
                username:username
            })
        }
        console.log("sucessfully created")
        // toast.success("sucessfully registered",{position:"top-center"})
    // if(userresponse.user){
    //    const data= await (sendEmailVerification(userresponse.user))
    //    console.log(data,"data")
    // }
    // console.log(userresponse,"resp")
    // console.log("hello",email,pass)
    
        
    }
    catch(error){
        console.log("this is error",error)     
    }
}


export const Loginpage=async (email,pass)=>{
    try{
        console.log("work")
        const userresponse = await(signInWithEmailAndPassword(auth,email,pass))
        window.location.href="/home"
    if(userresponse.user){
       const data= await (sendEmailVerification(userresponse.user))
       console.log(data,"dataaaaaaa")
    }
    
    // console.log(userresponse,"resp")
    // console.log("hello",email,pass)
        
    }
    catch(error){
        console.log("this is error",error)     
    }
}

     export const Storedata = async(email,password,username) =>{
        try{
            const dataa = await addDoc(collection(db,'users'),{
                
                email:email,
                password:password,
                username:username
            })
            
        }
        catch(error){
            console.log(error,"signup error")
        }
    }