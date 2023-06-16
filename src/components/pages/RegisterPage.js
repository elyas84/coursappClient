import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/actions/userAction";
import { USER_REG_REST } from "../../redux/constens/userConstens";
import styled from "styled-components";
import ErrorMessage from "../layouts/ErrorMessage";
import AlertMessage from "../layouts/AlertMessage";
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
  width: 450px;
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
  ::placeholder {
    font-family: "Oswald", sans-serif;
    font-family: "Rajdhani", sans-serif;
    letter-spacing: 1.2px;
    text-transform: uppercase;
  }
`;
const FormInput = styled.input`
  border: none;
  padding: 0.5rem;
  width: 100%;
  background: transparent;
  outline: none;

  font-family: "Oswald", sans-serif;
  font-family: "Rajdhani", sans-serif;
  letter-spacing: 1.2px;
  color: green;
`;
const FormPassword = styled.input`
  font-family: "Oswald", sans-serif;
  font-family: "Rajdhani", sans-serif;
  letter-spacing: 1.2px;
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

export default function RegisterPage() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const resgister = useSelector((state) => state.resgister);
  const { loading, userInfo, registerSuccess, error, message } = resgister;
  const { userInfo: loggedInUSer } = userLogin;

  console.log("message: " + message);

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [street, setStreet] = useState("");
  const [postCode, setPostCode] = useState("");
  const [flatNumber, setFlatNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cilcked, setClicked] = useState(false);
  const [msg, setMsg] = useState(null);
  const gotClicked = () => {
    setClicked(!cilcked);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      register({
        firstname,
        lastname,
        phone,
        street,
        postCode,
        flatNumber,
        email,
        password,
      })
    );
  };

  useEffect(() => {
    if (loggedInUSer && loggedInUSer.isAdmin) {
      navigate("/register");
    } else {
      navigate("/login");
    }
  }, [userInfo, navigate]);

  useEffect(() => {
    if (userInfo && registerSuccess) {
      setMsg("New user has been created.");
      dispatch({
        type: USER_REG_REST,
      });
    }
    setFirstname("");
    setLastname("");
    setPhone("");
    setStreet("");
    setPostCode("");
    setFlatNumber("");
    setEmail("");
    setPassword("");
  }, [userInfo, dispatch]);

  return (
    <Container>
      <FormContainer>
        <InputForm onSubmit={submitHandler}>
          {error ? (
            <ErrorMessage>{error}</ErrorMessage>
          ) : msg ? (
            <AlertMessage>{msg}</AlertMessage>
          ) : loading ? (
            <Spinner />
          ) : (
            <FormTitle>new user</FormTitle>
          )}
          <InputContainer>
            <FormInput
              placeholder="first name"
              type="text"
              value={firstname}
              onChange={(e) => {
                setFirstname(e.target.value);
              }}
            />
          </InputContainer>
          <InputContainer>
            <FormInput
              placeholder="last name"
              type="text"
              value={lastname}
              onChange={(e) => {
                setLastname(e.target.value);
              }}
            />
          </InputContainer>
          <InputContainer>
            <FormInput
              placeholder="phone"
              type="text"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </InputContainer>
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
            <FormInput
              placeholder="street name"
              type="text"
              value={street}
              onChange={(e) => {
                setStreet(e.target.value);
              }}
            />
          </InputContainer>
          <InputContainer>
            <FormInput
              placeholder="flatNumber"
              type="text"
              value={flatNumber}
              onChange={(e) => {
                setFlatNumber(e.target.value);
              }}
            />
          </InputContainer>
          <InputContainer>
            <FormInput
              placeholder="post code"
              type="text"
              value={postCode}
              onChange={(e) => {
                setPostCode(e.target.value);
              }}
            />
          </InputContainer>

          <InputContainer>
            <FormPassword
              placeholder="password"
              type={cilcked ? "text" : "password"}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
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
            <Button>Register</Button>
          </ButtonContainer>
        </InputForm>
      </FormContainer>
    </Container>
  );
}
