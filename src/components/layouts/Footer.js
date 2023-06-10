import React from "react";
import styled from "styled-components";
import { RiCopyrightLine } from "react-icons/ri";
const Container = styled.div`
  width: 100%;
  height: 150px;
  background-color: #101112;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FooterTitle = styled.div`
  color: #fff;
  letter-spacing: 1.5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const FooterTitlePraghraph = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bolder;
  font-family: "Oswald", sans-serif;
`;
const FooterYear = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bolder;
  font-family: "Oswald", sans-serif;
  margin-left: 0.5rem;
  svg {
    margin: 0 0.4rem;
  }
`;
const Small = styled.small`
  font-weight: bolder;
  font-family: "Oswald", sans-serif;
  color: #c7b40c;
`;
export default function Footer() {
  const currentYr = new Date().getFullYear();
  return (
    <Container>
      <FooterTitle>
        <FooterTitlePraghraph> FAKE SCHOOL-100 </FooterTitlePraghraph>
        <FooterYear>
          {currentYr}
          <RiCopyrightLine /> <Small>made by ELYAS</Small>
        </FooterYear>
      </FooterTitle>
    </Container>
  );
}
