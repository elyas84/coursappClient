import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import styled from "styled-components";
const Container = styled.div`
margin-top: 1rem;
`
const Span = styled.span`
 transition: all .4s ease;
svg {
    color: #069c5d;
    margin-right: 5px;
}
`

export default function Rating({ value }) {
  return (
    <Container>
      <Span>
        {value >= 1 ? <BsStarFill /> : value >= 0.5 ? <BsStarHalf /> : <BsStar />}
      </Span>
      <Span>
        {value >= 2 ? <BsStarFill /> : value >= 1.5 ? <BsStarHalf /> : <BsStar />}
      </Span>
      <Span>
        {value >= 3 ? <BsStarFill /> : value >= 2.5 ? <BsStarHalf /> : <BsStar />}
      </Span>
      <Span>
        {value >= 4 ? <BsStarFill /> : value >= 3.5 ? <BsStarHalf /> : <BsStar />}
      </Span>
      <Span>
        {value >= 5 ? <BsStarFill /> : value >= 4.5 ? <BsStarHalf /> : <BsStar />}
      </Span>
    </Container>
  );
}
