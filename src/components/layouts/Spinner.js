import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 20px;
  height: 20px;
`;
const IMG = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;

export default function Spinner() {
  return (
    <Container>
      <IMG src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca_w200.gif" />
    </Container>
  );
}
