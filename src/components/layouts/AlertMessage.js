import React from "react";
import styled from "styled-components";
const Container = styled.div`
  width: 100%;
  height: 100%;
`;
const ErrorContainer = styled.div`
  width: 100%;
  background-color: #244c91;
  font-family: "Oswald", sans-serif;
  font-family: "Rajdhani", sans-serif;
  padding: 0.2rem;
  color: #fff;
  font-weight: bold;
  letter-spacing: 1px;
  border-radius: 3px;
  text-align: center;
`;
export default function AlertMessage({ children }) {
  return (
    <Container>
      <ErrorContainer>{children}</ErrorContainer>
    </Container>
  );
}
