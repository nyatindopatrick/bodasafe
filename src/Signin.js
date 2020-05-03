import React from "react";

const Signin = props => {
  const { handleSignIn } = props;

  return (
    <div className="panel-landing" id="section-1">
      <h1 className="landing-heading">Hello, Blockstack!</h1>
      <p className="lead">
        <button
          className="btn btn-primary btn-lg"
          id="signin-button"
          onClick={handleSignIn}
        >
          Sign In with Blockstack
        </button>
      </p>
    </div>
  );
};

export default Signin;
