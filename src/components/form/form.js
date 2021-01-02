import React from "react";
import styled from "styled-components";
import { useForm } from "../useForm/useForm";

export default function Form(props) {
  const [values, handleChange] = useForm({ email: "", password: "" });
  // const [valdate, handleSubmit] = useValdate({
  //   emailError: "",
  //   passwordError: "",
  // });

  const { isOpen } = props;
  return (
    <Wrapper isOpen={isOpen} onClick={props.onClick}>
      <label>EmaiL</label>
      <input name="email" value={values.email} onChange={handleChange} />

      <label>Password</label>
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />
      <button type="submit">Log in</button>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  position: absolute;
  right: 100px;
  top: 20px;
  padding: 20px;
  background-color: #f2b472;
  border-radius: 5px;
  height: 220px;
  color: #704313;
  /* opacity: ${(props) => (props.isOpen ? 1 : 0.5)}; */
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};

  label {
    display: block;
    padding: 4px;
    margin-top: 10px;
  }

  input {
    padding: 5px;
    width: 200px;
  }
  button {
    position: absolute;
    top: 160px;
    right: 130px;
    padding: 10px;
    width: 100px;
    border-radius: 5px;
    font-size: 15px;
    font-weight: bold;
    color: #704313;
  }
`;
