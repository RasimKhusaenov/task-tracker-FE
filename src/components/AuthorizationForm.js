import React from "react";
import styled from "styled-components";
import InputField from "./InputField";

const Form = styled.form`
  text-align: -webkit-center;
  padding-bottom: 2em;
`;

function AuthorizationForm(props) {
  const { action, method } = props

  function onChangeField(event) {
    const name = event.target.name ? event.target.name : "noNameField";
    const value = event.target.value;
    console.log(name + " input: " + value);
  }

  function onBlurField(event) {
    event.target.value = event.target.value.trim();
  }

  return (
    <Form action={action} method={method} id="authForm">
      <InputField fieldName="Login" inputType="login" placeholder="intern.internov@flatstack.dev" onChange={onChangeField} onBlur={onBlurField} />
      <InputField fieldName="Password" inputType="password" placeholder="********" onChange={onChangeField} />
      <input type="submit" value="Login" />
    </Form>
  );
}

export default AuthorizationForm;
