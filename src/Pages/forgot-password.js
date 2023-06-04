import React from "react";

function ForgotPassword(){
    return(
        <div className="Forget">

           <div className="Forget-page">
            <h3>Forgot Your Password ?</h3>
            <p>We get it, stuff happens. Just enter your email address below and we'll send you a link to reset your password!</p>
            <div>
                <input type="text" className="mail" placeholder="Enter email address"/>
            </div>
            <div>
            <button className="btn5" id="lightblue">
          Reset Password
        </button>
        <div className="footer">
        <p>Create an Account!</p>
        <p>Already have an account? Login!</p>
      </div>
            </div>
        </div>
 
  </div>
    )
}

export default ForgotPassword;

