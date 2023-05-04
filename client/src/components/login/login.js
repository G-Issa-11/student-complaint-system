import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import styles from './login.module.css';

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
    if(passwordType==="password")
      {
       setPasswordType("text")
       return;
      }
      setPasswordType("password")
  };

  const handlePasswordChange =(evnt)=>{
    setPasswordInput(evnt.target.value);
}

  const handleSubmit = ()=> {
    console.log("hello world")
  }
  return (
    <div className={styles.body}> 
    
    <div className={styles.container}>
    
      <form name="login" className={styles.box} onSubmit={handleSubmit}>
      <img 
    className={styles.logo}
          src={require('../../assets/cropped-AQU-Logo.png')} 
          alt="logo" 
        />
        <div className={styles.input}>
        <input type="text" name="email" placeholder="Email" autoComplete="off" />
        </div>
    <div className={styles.input}>
    <input type={passwordType} onChange={handlePasswordChange} value={passwordInput} name="password" placeholder="Passsword" autoComplete="off" />
        <span onClick={togglePasswordVisibility}>
        {passwordVisible ? <FaEyeSlash /> : <FaEye />}
      </span>
    </div>
    <input type="submit" value="Sign in" className={styles.submitBtn}></input>
        
      </form>

    </div>
    </div>
  );
};

export default Login;
