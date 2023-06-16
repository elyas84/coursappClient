import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Overlay = styled.div`
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #069c5d;
  visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  
`;
const OverlayTitle = styled.h3`
  color: #fff;
  font-family: "Oswald", sans-serif;
  font-family: "Rajdhani", sans-serif;
  letter-spacing: 1.2px;
`;
const Card = styled.div`
  width: 100%;
  height: 250px;
  box-shadow: 2px 2px 30px 2px lightgray;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  &:hover {
    ${Overlay} {
     
      visibility: visible;
      opacity: 0.9;
    }
  }

`;

const Price = styled.p`
  position: absolute;
  font-family: "Oswald", sans-serif;
  font-family: "Rajdhani", sans-serif;
  left: 0;
  top: 0;
  width: 100px;
  color: #000;
  font-weight: bold;
  font-size: 1.4rem;
  background-color: #069c5d;
  color: #fff;
  @media (max-width: 1400px) {
    font-size: 22px;
  }
  @media (max-width: 990px) {
    font-size: 22px;
  }
  @media (max-width: 769px) {
  font-size: 20px;
  }
  @media (max-width: 426px) {
    font-size: 16px;
  }
`;
const CardHeader = styled.h1`
  font-size: 2rem;
  font-family: "Oswald", sans-serif;
  font-family: "Rajdhani", sans-serif;
  margin-bottom: 2rem;
  text-transform: uppercase;
  @media (max-width: 1400px) {
    font-size: 25px;
  }
  @media (max-width: 990px) {
    font-size: 25px;
  }
  @media (max-width: 769px) {
  font-size: 22px;
  }
  @media (max-width: 426px) {
    font-size: 16px;
  }
`;
const CardBody = styled.div`
  width: 140px;
  height: 80px;
  @media (max-width: 426px) {
    width: 200px;
  height: 100px;
  }
`;
const CardImg = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  @media (max-width: 426px) {
    object-fit: cover;
  }
`;
const CardFooter = styled.div`
  font-size: 1rem;
  font-family: "Oswald", sans-serif;
  font-family: "Rajdhani", sans-serif;
  text-align: center;
  margin-top: 2rem;
`;
export default function ProgeamListCard({ item }) {
  return (
    <Link to={"/course/" + item._id}>
      <Card>
        <Overlay>
          <OverlayTitle>{item.duration}</OverlayTitle>
        </Overlay>
        <CardHeader>{item.title}</CardHeader>
        <CardBody>
          <CardImg src={item.image} alt="image" loading="lazy"/>
        </CardBody>
        <CardFooter>
          <Price>{item.price} €</Price>
        </CardFooter>
      </Card>
    </Link>
  );
}
