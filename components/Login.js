import React from 'react';
// import { withRouter } from 'react-router-dom';

function Login() {

  return(
    <section>
      <div class="container-fluid">
        <h1 class="mt-5">Login Options</h1>
          <a href="login/signin" class="btn btn-primary btn-lg" role="button">Sign In</a>
          <a href="login/signup" class="btn btn-primary btn-lg" role="button">Sign Up</a>
      </div>
    </section>
  );
} 
  
function Signin(){ 

  return(
    <section>
        
        <div class="container-fluid">
            <h1 class="mt-3">Sign In (Existing User)</h1>
            <form method="POST" action="/api/auth/signin">
                <div class="input-group justify-content-center">
                    <div class="input-group-prepend">
                      <h1 class="mt-1">Username</h1>
                        <input type="text" name="username" class="form-control" />
                      <h1 class="mt-1">Password</h1>
                        <input type="text" name="password" class="form-control" />
                      <input type="submit" value="Sign In" class="btn btn-primary mb-2" />
                    </div>
                </div>
            </form>
        </div>
    </section>

);
  
}

function Signup(){ 

  return(
    <section>
        
        <div class="container-fluid">
            <h1 class="mt-3">Sign Up (New User)</h1>
            <form method="POST" action="/api/auth/signup">
                <div class="input-group justify-content-center">
                    <div class="input-group-prepend">
                      <h1 class="mt-1">Username</h1>
                        <input type="text" name="username" class="form-control" />
                      <h1 class="mt-1">Email</h1>
                        <input type="text" name="email" class="form-control" />
                      <h1 class="mt-1">Password</h1>
                        <input type="text" name="password" class="form-control" />
                      <input type="submit" value="Send" class="btn btn-primary mb-2" />
                    </div>
                </div>
            </form>
        </div>
    </section>

);

}

const exportObj = {
  Login,
  Signin,
  Signup,
};

export default exportObj;