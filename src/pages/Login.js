import React from "react";
import Header from "../components/Header";
import AuthorizationForm from "../components/AuthorizationForm";


function Login() {
  return (
    <div className="Login">
      <Header>
        Login Page
      </Header>
      <AuthorizationForm/>
    </div>
  );
}

export default Login;
