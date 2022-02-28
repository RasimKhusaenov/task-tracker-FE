import React from "react";
import Header from "../components/Header";
import AuthorizationForm from "../components/AuthorizationForm";


function Login() {
  return (
    <div className="Login">
      <Header title="Login Page" />
      <AuthorizationForm/>
    </div>
  );
}

export default Login;
