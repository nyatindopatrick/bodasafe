import React from "react";

const Login = ({ handleSignIn }) => {
  return (
    <div>
      <div className="split left"></div>
      <div>
        <div
          className="split right "
          title="Login"
          align="center"
          description=""
        >
          <h1 className="loginHead">Fika Safe</h1>
          <button
            className="btn btn-primary btn-lg"
            id="signin-button"
            onClick={handleSignIn}
          >
            Sign In with Securely with Blockstack
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
