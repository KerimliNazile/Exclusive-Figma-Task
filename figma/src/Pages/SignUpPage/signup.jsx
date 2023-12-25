import React from 'react'
import './signup.scss'
// import GoogleIcon from '../../images/GoogelIcon.png'
import { Link } from "react-router-dom";

function SignUpPage() {
  return (
    <section id='signUpPage'>
      <div className="signUpLeftBox">
        <img src="https://s3-alpha-sig.figma.com/img/75f3/94c0/a1c7dc5b68a42239311e510f54d8cd59?Expires=1704672000&Signature=puJ2THPnlosmoWI5Do6clGIYMQPI7dej~6igkyjZ~Rpoirl8O~XvX-z55SO8KvNDuIAu5T5eIQIo6A61U~lKONo2zBKsrO47WEFRSaKNhMt8v1SY7a4xHA5kTtGghMJSOBUuTHd4FFaB2TD8HWED5mlOg2aSs2xN~k5erIMfJyVEld0REQR~3rWzdwxEp2sojCrAIQBtLdh4IoM8vmdyEgR1XFhN4Esbx-tyR~oO57DgThSHTGjZ1i~uvklB7I8nLbUjdh5bkGzwpmY0pd2szB~REf7Fi6M6z5wx01PfHX3lioYMPF97N5MMLkCJd1lcWy~trq2qzO22rjwvL1IS1A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
      </div>
      <div className="signUpRightBox">
        <div className="logUpBox">
          <h1>Create an account</h1>
          <p>Enter your details below</p>
          <form action="" style={{ display: "flex", flexDirection: 'column' }}>
            <input type="text" placeholder='Name' />
            <input type="email" placeholder='Email or Phone Number' />
            <input type="password" placeholder='Password' />
          </form>
          <div className="crateAccountBtn" style={{cursor:"pointer"}}>
          Create Account
          </div>
          <div className="signUpGoogle">
            {/* <img src={GoogleIcon} alt="" /> */}
            <Link style={{textDecoration:"none", color:"black"}}>Sign up with Google</Link>
          </div>
          <div className="logInBox">
            Already have account?
            <Link to="/logIn"><span>Log in</span></Link>
          </div>
        </div>
      </div>

    </section>
  )
}

export default SignUpPage