import React, { useState } from 'react'
import './LoginPopUp.css'


const LoginPopUp = ({setShowLogin}) => {


    const [currentState, setCurrentState] = useState("Sign Up")

  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currentState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt=''></img>
        </div>
        <div className="login-popup-inputs">
            {currentState==="Login" ? <></> :  <input type="text" placeholder='Enter Your Name' required /> }
            <input type="email" placeholder='Enter Your Email' required />
            <input type="password" placeholder='Enter Your Password' required />

        </div>
        <button>{currentState==="Sign Up" ? "Create Account" : "Login"}</button>
        <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By continuing, i agree to the terms of use & privacy policy</p>
        </div>
        {currentState==="Login" ? <p>Create a new Account? <span onClick={() => setCurrentState("Sign Up")}>Click Here</span></p> : <p>Already have an account ? <span onClick={() => setCurrentState("Login")}>Login Here</span></p>}

        
    
      </form>
    </div>
  )
}
import './LoginPopUp.css'
import { assets } from '../../assets/assets'


export default LoginPopUp
