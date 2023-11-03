import { createRef, useEffect, useRef, useState } from "react";
import Home from "./Home/Home";
import { Link } from "react-router-dom";

 const LoginPage=()=>{
   const email=useRef()
   const password=useRef()
const localSignup=localStorage.getItem("signin")
const [show,setShow] = useState(false)
   useEffect(()=>{

    if(localSignup)
    {
setShow(true)
    }
   },[])
    function handleSignin(){

if(email.current.value&&password.current.value){
    console.log(email.current.value,password.current.value)
    localStorage.setItem("email",email.current.value)
    localStorage.setItem("password",password.current.value)
    localStorage.setItem("signin",email.current.value)
    alert("successfully Login")
    window.location.reload();
}
    }
    return(
        <div>
            {show ?<Home/>:
           (<div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <form className="my-5">
                            <h2>Welcome to Your <br/>Professional Community</h2>
                            <br/>
                            
                            <label className="" >Email or Phone</label><br/>
                            <input type="email" style={{width:"350px"}}  ref={email}/>
                            <br/>
                            <br/>
                            <label className="" >Password</label><br/>
                            <input type="password" style={{width:"350px"}} ref={password}/>
                            <br/>
                            <br/>
                          <Link to="/home"> <button className="btn btn-primary rounded-pill w-60" style={{width:"55%"}} onClick={handleSignin}>Sign in</button></Link> 
                        </form>
                    </div>
                    <div></div>
                </div>
            </div>)}
        </div>
    )
}
export default LoginPage;