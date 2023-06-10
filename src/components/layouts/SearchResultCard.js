import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Card = styled.div`
  width: 100%;
  height: auto;
  box-shadow: 2px 2px 30px #d2d9d6;
  border-radius: 5px;
  display: flex;
  padding: 1rem;
  margin-bottom: 2rem;


  @media (max-width: 800px) {
  flex-direction: column;
  align-items: flex-start;
  height: auto;
  }
`;

const CardHeader = styled.h4`
  font-family: "Oswald", sans-serif;
  font-family: "Rajdhani", sans-serif;
  letter-spacing: 1px;
`;
const CardBody = styled.div`
box-sizing: border-box;
overflow: hidden;
  width: 350px;
  height: 240px;
  @media (max-width: 1400px) {

  height: auto;
  }
  @media (max-width: 990px) {

  height: auto;
  }
  @media (max-width: 426px) {
   width: 100%;
  height: auto;
  }
`;
const CardImg = styled.img`
box-sizing: border-box;
 transition: all .3s ease-out;
 
  object-fit: contain;
  width: 100%;
  height: 100%;
`;
const CardFooter = styled.div`
  font-family: "Oswald", sans-serif;
  font-family: "Rajdhani", sans-serif;
  text-align: center;
`;
const Desc = styled.p`
  font-family: "Oswald", sans-serif;
  font-family: "Rajdhani", sans-serif;
  font-style: italic;
  margin: 0.5rem 0;
`;

const PriceLabel = styled.p`
  font-family: "Oswald", sans-serif;
  font-family: "Rajdhani", sans-serif;
  font-style: italic;
  font-weight: bold;
`;
const ColumLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 2rem;
`;
const CloumRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export default function SearchResultCard({ item }) {
  return (
    <>
      <Card>
        <ColumLeft>
          <Link to={"/course/" + item._id}>
            <CardBody>
              <CardImg src={item.image} alt="image" />
            </CardBody>
          </Link>
        </ColumLeft>
        <CloumRight>
          <CardHeader>{item.title}</CardHeader>
          <Desc>{item.desc}</Desc>
          <Desc>{item.duration}</Desc>
          <PriceLabel>{item.price} $</PriceLabel>
          <CardFooter></CardFooter>
        </CloumRight>
      </Card>
    </>
  );
}
