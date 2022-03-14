import React, { useState } from 'react';
import './Login.css';
import logo from './logo192.png'
const Login = () => {

    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
      };
    return (
        <div className='loginPage'>
            <div className="login">
             <div className="logoLogin">
                 <img src={logo} className="loginLogoImg" alt="" />
             </div>

             <form action="" className='inputGroup'>
            <div className="user">
                <p><i className="fas fa-user"></i></p> 
                <input type="text" name="" className='userName' placeholder='User Name' id=""  />
            </div>
            <div className="pass">
                <p><i className="fas fa-lock"></i></p>
                <input type={passwordShown ? "text" : "password"} className="password" placeholder='Password'/>
                <button onClick={togglePassword}><i className="fas fa-eye"></i></button>
            </div>
            <input type="submit" value="Log In" />
            </form>
            </div>
        </div>
    );
};

export default Login;