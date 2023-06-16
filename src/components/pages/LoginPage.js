import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginToApp } from "../../redux/actions/userAction";
import styled from "styled-components";
import ErrorMessage from "../layouts/ErrorMessage";
import Spinner from "../layouts/Spinner";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
const Container = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  background-color: #f2f5f4;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const FormContainer = styled.div`
  border-radius: 5px;
  width: 300px;
  height: auto;
  box-shadow: 2px 2px 30px 2px #d2d9d6;
`;
const InputForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
`;
const FormTitle = styled.div`
  font-weight: bolder;
  font-family: "Oswald", sans-serif;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

const InputContainer = styled.div`
  border: 1px solid lightgray;
  border-radius: 5px;
  margin: 0.5rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  svg {
    margin-right: 1rem;
    cursor: pointer;
    font-size: 1.5rem;
  }
    ::placeholder{

    font-family: "Oswald", sans-serif;
    font-family: "Rajdhani", sans-serif;
    letter-spacing: 1.2px;
  }
`;
const FormInput = styled.input`
  border: none;
  padding: 0.5rem;
  width: 100%;
  background: transparent;
  outline: none;
`;
const FormPassword = styled.input`
  border: none;
  padding: 0.5rem;
  width: 100%;
  background: transparent;
  outline: none;
  svg {
    color: lightgray;
  }
`;
const ButtonContainer = styled.div`
  border-radius: 5px;
  width: 100px;
  border: 1px solid lightgray;
  text-align: center;
  margin-top: 1rem;
  :hover {
    background-color: gray;
    color: #101112;
  }
`;
const Button = styled.button`
  border-radius: 5px;
  background: transparent;
  border: none;
  width: 100%;
  cursor: pointer;
  background-color: #101112;
  font-weight: bolder;
  font-family: "Oswald", sans-serif;
  color: lightgray;
  letter-spacing: 1.5px;
  padding: 0.3rem;
`;

const Small = styled.small`
  font-family: "Oswald", sans-serif;
  margin-top: 1rem;
  letter-spacing: 1px;
`;

export default function LoginPage() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, userInfo, error, loginSuccess } = userLogin;

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [cilcked, setClicked] = useState(false);
  const gotClicked = () => {
    setClicked(!cilcked);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(loginToApp(email, pass));
    setPass("");
  };

  useEffect(() => {
    if (userInfo && userInfo.email) {
      navigate("/profile");
    }
  }, [userInfo, navigate]);

  return (
    <Container>
      <FormContainer>
        <InputForm onSubmit={submitHandler}>
          {error ? (
            <ErrorMessage>{error}</ErrorMessage>
          ) : loading ? (
            <Spinner />
          ) : (
            <FormTitle>Login</FormTitle>
          )}

          <InputContainer>
            <FormInput
              placeholder="email"
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </InputContainer>
          <InputContainer>
            <FormPassword
              placeholder="password"
              type={cilcked ? "text" : "password"}
              value={pass}
              onChange={(e) => {
                setPass(e.target.value);
              }}
            />

            {cilcked ? (
              <VscEyeClosed
                onClick={() => {
                  gotClicked();
                }}
              />
            ) : (
              <VscEye
                onClick={() => {
                  gotClicked();
                }}
              />
            )}
          </InputContainer>
          <ButtonContainer>
            <Button>Login</Button>
          </ButtonContainer>
          <Small>No accoun? please contact us</Small>
        </InputForm>
      </FormContainer>
    </Container>
  );
}
