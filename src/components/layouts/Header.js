import React from "react";
import styled from "styled-components";
import { navitems } from "../../utilData";
import { Link } from "react-router-dom";
import { BsCodeSlash } from "react-icons/bs";
// CSS will be placed here.
const Container = styled.div`
  width: 100%;
  height: 80px;
  padding: 0 3rem;
  z-index: 999;
  position: sticky;
  top: 0;
  left: 0;
  background-color: #101112;
  @media (max-width: 426px) {
    padding: 0 1rem;
  }
`;
const Navbar = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LOGO = styled.div`
  flex: 1;
  a {
    color: #fff;
  }
  svg {
    font-size: 3.5rem;
    color: #c7b40c;
  }
`;
const UL = styled.ul`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;
const LI = styled.li`
  padding: 0 1rem;
  :focus {
    border-bottom: 2px solid #436db0;
    color: #436db0;
  }
  a {
    text-transform: uppercase;
    color: #fff;
    font-weight: bolder;
    font-family: "Oswald", sans-serif;
    letter-spacing: 1.5px;
  }
  a:hover {
    color: #436db0;
    transition: all ease 0.3s;
  }
  @media (max-width: 990px) {
    font-size: 20px;
    padding: 0 0.5rem;
  }
  @media (max-width: 769px) {
    font-size: 14px;
    padding: 0 0.5rem;
  }
  @media (max-width: 426px) {
    font-size: 12px;
    padding: 0 0.5rem;
  }
`;

export default function Header() {
  return (
    <Container>
      <Navbar>
        <LOGO>
          <Link to="/">{<BsCodeSlash></BsCodeSlash>}</Link>
        </LOGO>

        <UL>
          {navitems.map((item, i) => (
            <LI key={i}>
              <Link to={item.path}>{item.title}</Link>
            </LI>
          ))}
        </UL>
      </Navbar>
    </Container>
  );
}
