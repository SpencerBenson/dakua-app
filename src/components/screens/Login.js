import React from "react";

const Login = () => {
  return (
    <>
      <div class="card">
        <h2>Dakua</h2>
        
        <input type="text" placeholder='email'
        />
        <input type="password" placeholder='password'
        />
        <button class="btn waves-effect waves-light">Submit</button>
      </div>
    </>
  );
};

export default Login;
