import React, { useState } from 'react'
import SocialLogin from "./SocialLogin";
import InputField from "./InputField";
import { auth, googleProvider } from "../config/firebase";
import { createUserWithEmailAndPassword,signInWithPopup } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = async (e) => {
    e.preventDefault(); 
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("User Created");
    } catch (error) {
      console.error("Signup Error:", error.message);
      alert(error.message); 
    }
  };

  const signInWithGoogle = async (e) => {
    e.preventDefault(); 
    try {
      await signInWithPopup(auth, googleProvider);
      console.log("User Created");
    } catch (error) {
      console.error("Signup Error:", error.message);
      alert(error.message); 
    }
  };

  return (
    <>
      <div className="login-container">
        <h2 className="form-title">SignUp with</h2>
        <SocialLogin />
        <p className="separator"><span>or</span></p>

        <form action="#" className="login-form">
          <InputField
            type="email"
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="button" className="login-button" onClick={signIn}>
            SignUp
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
