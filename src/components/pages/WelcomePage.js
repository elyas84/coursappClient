import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { welcomePageBg } from "../../utilData";
import ProgeamListCard from "../layouts/ProgeamListCard";

import axios from "axios";
import Spinner from "../layouts/Spinner";
import TestimonialCard from "../layouts/TestimonialCard";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
const Banner = styled.div`
  width: 100%;
  height: 800px;
  position: relative;
  @media (max-width: 1200px) {
    height: 700px;;
  }
  @media (max-width: 990px) {
    height: 500px;;
  }
  @media (max-width: 769px) {
    height: 450px;
  }
  @media (max-width: 426px) {
    height: 340px;
  }
`;
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  opacity: 0.5;
`;
const OverlayTitle = styled.h1`
  color: #000;
  text-transform: uppercase;
  letter-spacing: 2px;
  background-color: #fff;
  opacity: 0.5;
  padding: 3rem;
  font-size: 7rem;
  border-radius: 5px;
  box-shadow: 2px 2px 30px 2px lightgray;
  @media (max-width: 1200px) {
    font-size: 2.5rem;
  }
  @media (max-width: 990px) {
    font-size: 2rem;
  }
  @media (max-width: 769px) {
  font-size: 1.5rem;
  }
  @media (max-width: 426px) {
  font-size: 1rem;
  }
`;
const IMG = styled.img`
  object-fit: fill;
  background-position: center;
  width: 100%;
  height: 100%;
`;
const Section = styled.div`
  width: 100%;
  height: auto;
`;
const SectionContainer = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  text-align: center;
  padding: 4rem 0;
`;
const SectionTitle = styled.h1`
  font-family: "Oswald", sans-serif;
  font-family: "Rajdhani", sans-serif;
  margin-bottom: 4rem;
  font-size: 3rem;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 1.5px;
  @media (max-width: 990px) {
    font-size: 2rem;
  }
  @media (max-width: 769px) {
  font-size: 25px;
  }
  @media (max-width: 426px) {
  font-size: 20px;
  }
`;
const SectionParagraph = styled.p`
  font-family: "Oswald", sans-serif;
  font-family: "Rajdhani", sans-serif;
  line-height: 2;
  font-size: 1.5rem;
  color: gray;
  @media (max-width: 990px) {
    font-size: 20px;
  }
  @media (max-width: 769px) {
  font-size: 16px;
  }
  @media (max-width: 426px) {
  font-size: 1rem;
  }
`;
const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3rem;
  @media (max-width: 1400px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 712px) {
    grid-template-columns: repeat(1, 1fr);
  }
 
`;
const SectionTestmonial = styled.div`
  width: 100%;
  height: auto;
  background-color: #edf5f3;
`;

const SectionTestimonialContainer = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  text-align: center;
  padding: 4rem 0;
`;
export default function WelcomePage() {
  const [curriculums, setCurriculums] = useState([]);
  const [Testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(false);

  const getCurriculumsApi = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:5000/api/curriculums");
      setCurriculums(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const getTestimonialsApi = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:5000/api/testimonials");
      setTestimonials(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCurriculumsApi();
    getTestimonialsApi();
  }, []);

  return (
    <Container>
      <Banner>
        <Overlay>
          <OverlayTitle>fake school-100</OverlayTitle>
        </Overlay>
        <IMG src={welcomePageBg.image} alt="backround image" />
      </Banner>
      <Section>
        <SectionContainer>
          <SectionTitle>learn with us</SectionTitle>
          <SectionParagraph>
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the
            release of Letraset sheets containing Lorem Ipsum passages, and more
            recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the
            release of Letraset sheets containing Lorem Ipsum passages, and more
            recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum
          </SectionParagraph>
        </SectionContainer>
      </Section>
      <Section>
        <SectionContainer>
        <SectionTitle>our cources</SectionTitle>
        <Row>
          {loading ? (
            <Spinner />
          ) : curriculums && curriculums.length ? (
            curriculums.map((item, id) => (
              <ProgeamListCard item={item} key={id} />
            ))
          ) : null}
        </Row>
        </SectionContainer>
       
      </Section>
      <SectionTestmonial>
            <SectionTestimonialContainer>
        <SectionTitle>Testimonials</SectionTitle>
        <Row>
          {loading ? (
            <Spinner />
          ) : Testimonials && Testimonials.length ? (
            Testimonials.map((item, id) => (
              <TestimonialCard item={item} key={id} />
            ))
          ) : null}
        </Row>
      </SectionTestimonialContainer>
      </SectionTestmonial>
  
    </Container>
  );
}
