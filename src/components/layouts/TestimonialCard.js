import React from "react";
import styled from "styled-components";
import Rating from "./Rating";
const Card = styled.div`
  width: 100%;
  height: 280px;
  box-shadow: 2px 2px 30px #d2d9d6;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  @media (max-width: 1400px) {
  flex-direction: column;
  justify-content: center;
  height: auto;
  }
  @media (max-width: 990px) {
  flex-direction: column;
  justify-content: center;
  height: auto;
  }
  @media (max-width: 426px) {
  flex-direction: column;
  justify-content: center;
  height: auto;
  }
 
`;

const CardHeader = styled.h4`
  font-family: "Oswald", sans-serif;
  font-family: "Rajdhani", sans-serif;
  margin-top: 1rem;
  letter-spacing: 1px;
`;
const CardBody = styled.div`
  width: 150px;
  height: 120px;
  @media (max-width: 426px) {
    width: 200px;
  height: 120px;
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
  font-family: "Oswald", sans-serif;
  font-family: "Rajdhani", sans-serif;
  text-align: center;
`;
const Desc = styled.p`
  font-family: "Oswald", sans-serif;
  font-family: "Rajdhani", sans-serif;
  font-style: italic;
  @media (max-width: 426px) {
  font-size: 14px;
  }
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
const TimeLine = styled.small`
  margin-top: 1rem;
`;

export default function TestimonialCard({ item }) {
  return (
    <div>
      <Card>
        <ColumLeft>
          <CardBody>
            <CardImg src={item.image} alt="image" />
          </CardBody>
          <CardHeader>{item.fullname}</CardHeader>
        </ColumLeft>

        <CloumRight>
          <Desc>{item.desc}</Desc>
          <TimeLine>{item.createdAt.substring(0, 10)}</TimeLine>
          <CardFooter>
            <Rating value={item.rate} />
          </CardFooter>
        </CloumRight>
      </Card>
    </div>
  );
}
