import React from "react";
import styled from "styled-components";

const Label = styled.label`
  display: block;
  padding-bottom: 0.5em;
`;

const Input = styled.input`
  margin-left: 0.5em;
`;

function InputField(props) {
  const { fieldName, inputType, inputId, placeholder, onChange, onBlur } = props;
  return (
    <Label>
      {fieldName}:
      <Input type={inputType} name={fieldName} id={inputId} placeholder={placeholder} onChange={onChange} onBlur={onBlur} />
    </Label>
  );
}

export default InputField;