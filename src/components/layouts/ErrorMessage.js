import React from "react";
import styled from "styled-components";
const Container = styled.div`
  width: 100%;
  height: 100%;
`;
const ErrorContainer = styled.div`
  width: 100%;
  background-color: #dc3545;
  font-family: "Oswald", sans-serif;
  font-family: "Rajdhani", sans-serif;
  padding: 0.5rem;
  color: #fff;
  font-weight: bold;
  letter-spacing: 1px;
  border-radius: 3px;
  text-align: center;
  text-transform: uppercase;
`;

export default function ErrorMessage({ children }) {
  return (
    <Container>
      <ErrorContainer>{children}</ErrorContainer>
    </Container>
  );
}
