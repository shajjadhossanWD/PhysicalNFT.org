import React from 'react';
import logo from './logo192.png';


const ForgotLogin = () => {

    
    return (
        <div className='loginPage'>
            <div className="login">
             <div className="logoLogin">
                 <img src={logo} className="loginLogoImg" alt="" />
                 <h1 className='text-white'>OTP Verification</h1>
             </div>

             <form action="" className='inputGroup'>
            <div className="user">
                <p className='iconBox'><i class="far fa-envelope"></i></p> 
                <input type="email" name="" className='userName' placeholder='Enter OTP' id=""  />
            </div>
           
            <button type="submit" className='loginBtn'><i class="far fa-paper-plane"></i> Send</button>
            </form>
            </div>
        </div>
    );
};

export default ForgotLogin;