import React, { useEffect, useState } from "react";
import { MdOutlineEuro } from "react-icons/md";
import axios from "axios";
import Spinner from "../layouts/Spinner";
import { Link, useParams } from "react-router-dom";
import { styled } from "styled-components";
import ErrorMessage from "../layouts/ErrorMessage";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 3rem;
`;
const ContainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;
const ImageContainerWrapper = styled.div`
  flex: 1;
`;
const CourseImageContainer = styled.div`
  width: 400px;
  height: 380px;
`;
const CourseImg = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;
const DescContainer = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  font-family: "Oswald", sans-serif;
  font-family: "Rajdhani", sans-serif;
  margin-bottom: 3rem;
  font-weight: bold;
  font-size: 4rem;
  text-transform: uppercase;
`;
const Desc = styled.p`
  font-family: "Oswald", sans-serif;
  font-family: "Rajdhani", sans-serif;
  margin-bottom: 3rem;
`;
const DescDuration = styled.h3`
  font-family: "Oswald", sans-serif;
  font-family: "Rajdhani", sans-serif;
  margin-bottom: 3rem;
  font-weight: bold;
`;
const Price = styled.h3`
  font-family: "Oswald", sans-serif;
  font-family: "Rajdhani", sans-serif;
  letter-spacing: 1.2;
  display: flex;
  align-items: center;
  svg {
    margin-left: 0.3rem;
  }
`;
const ButtonLink = styled.button`
  cursor: pointer;
  border: none;
  width: 100px;
  color: #fff;
  height: auto;
  background-color: #101112;
  margin-top: 1rem;
  text-align: center;
  padding: 0.5rem;
  text-transform: uppercase;
`;
const TimeLine = styled.small`
  margin-top: 1rem;
  font-family: "Oswald", sans-serif;
  font-family: "Rajdhani", sans-serif;
  font-weight: bold;
  letter-spacing: 1px;
`;
export default function ProgramDetailsPage() {
  let params = useParams();
  const curriculumId = params.id;
  const [curriculum, setCurriculum] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const getCurriculumById = async (curriculumId) => {
    try {
      setLoading(true);
      const res = await axios
        .get("https://mern-course-app-client.onrender.com/api/curriculums/" + curriculumId)
        .catch((err) => {
          setError(err.response && err.response.data.message);
        });
      setCurriculum(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCurriculumById(curriculumId);
  }, [curriculumId]);

  return (
    <Container>
      {error ? (
        <ErrorMessage>{error}</ErrorMessage>
      ) : loading ? (
        <Spinner />
      ) : curriculum ? (
        <ContainContainer>
          <ImageContainerWrapper>
            <CourseImageContainer>
              <CourseImg src={curriculum.image} alt="course image" />
              <Desc>Course-ID: {curriculum._id}</Desc>
              <TimeLine>
                Latest update: {curriculum._id && curriculum.updatedAt.substring(0, 10)}
              </TimeLine>
            </CourseImageContainer>
          </ImageContainerWrapper>

          <DescContainer>
            <Title>{curriculum.title}</Title>
            <DescDuration>{curriculum.duration}</DescDuration>
            <Desc>{curriculum.desc}</Desc>
            <Price>
              {curriculum.price}
              <MdOutlineEuro />
            </Price>

            <Link to="/">
              <ButtonLink>Go back </ButtonLink>
            </Link>
          </DescContainer>
        </ContainContainer>
      ) : null}
    </Container>
  );
}
