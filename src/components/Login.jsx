import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

// const Login = () => {
//   return (
//     <>
//       <Navbar/>
//       <div>
//       <h1>Login</h1>
//       </div>
//       <Footer/>
//     </>
//   )
// }

// export default Login

import SocialLogin from "./SocialLogin";
import InputField from "./InputField";

const Login = () => {
  return (
    <>
      <Navbar/>
      <div className="login-container">
        <h2 className="form-title">SignUp with</h2>
        <SocialLogin />
        <p className="separator"><span>or</span></p>
        <form action="#" className="login-form">
          <InputField type="email" placeholder="Email address"/>
          <InputField type="password" placeholder="Password"/>
          {/* <a href="#" className="forgot-password-link">Forgot password?</a> */}
          <button type="submit" className="login-button">SignUp</button>
        </form>
        {/* <p className="signup-prompt">
          Don&apos;t have an account? <a href="#" className="signup-link">Sign up</a>
        </p> */}
      </div>
      <Footer/>
    </>
  )
}
export default Login;