import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import axios from "axios";
import Spinner from "../layouts/Spinner";
import SearchResultCard from "../layouts/SearchResultCard";
import ErrorMessage from "../layouts/ErrorMessage";
import { Link } from "react-router-dom";
const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Title = styled.h1`
  font-family: "Oswald", sans-serif;
  font-family: "Rajdhani", sans-serif;
  margin-bottom: 2rem;
  text-transform: uppercase;
  letter-spacing: 1.4px;
  @media (max-width: 1400px) {
    font-size: 22px;
  }
  @media (max-width: 990px) {
    font-size: 22px;
  }
  @media (max-width: 769px) {
  font-size: 20px;
  }
  @media (max-width: 500px) {
    font-size: 16px;
  }
`;

const SearchContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 4rem;
  @media (max-width: 1400px) {
    width: 100%;
    padding: 2rem;
  }
  @media (max-width: 990px) {
    width: 100%;
    padding: 2rem;
  }
  @media (max-width: 769px) {
    width: 100%;
    padding: 2rem;
  }
  @media (max-width: 500px) {
    width: 100%;
    padding: 2rem;
  }
`;

const Form = styled.form`
  width: 100%;
  height: 100%;
`;

const InputContainer = styled.div`
  width: 100%;
  border: 1px solid lightgray;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ::placeholder {
    text-transform: uppercase;
    font-family: "Oswald", sans-serif;
    font-family: "Rajdhani", sans-serif;
    letter-spacing: 1.2px;
  }
`;
const IconDiv = styled.div`
  background-color: #069c5d;
  :hover{
    background-color: #0a5c32;
  }
`;
const SearchButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 1rem;
  svg {
    color: #fff;
  }
  cursor: pointer;
 
`;
const SearchInput = styled.input`
  width: 100%;
  outline: none;
  border: none;
  padding: 1rem;
`;

const SearchResultContainer = styled.div`
  margin-top: 3rem;
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
const SearchResult = styled.p``;
export default function SearchPage() {
  const [curriculums, setCurriculums] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
  const getCurriculumsApi = async (search) => {
    try {
      setLoading(true);
      const res = await axios
        .get("https://mern-course-app-client.onrender.com/api/curriculums?search=" + search)
        .catch((err) => {
          setError(err.response && err.response.data.message);
        });
      setCurriculums(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  // submit handler
  const submitHandler = (e) => {
    e.preventDefault();
    getCurriculumsApi(search);
    setSearch("");
    setError(null);
  };

  return (
    <Container>
      <SearchContainer>
        <Title>Looking for something?</Title>
        <Form onSubmit={submitHandler}>
          <InputContainer>
            <SearchInput
              type="text"
              placeholder="search"
              required
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <IconDiv>
              <SearchButton>
                <BsSearch />
              </SearchButton>
            </IconDiv>
          </InputContainer>
        </Form>

        <SearchResultContainer>
          <SearchResult>
            {error ? (
              <ErrorMessage>{error}</ErrorMessage>
            ) : loading ? (
              <Spinner />
            ) : curriculums && curriculums.length ? (
              curriculums.map((item, id) => (
                <SearchResultCard item={item} key={id} />
              ))
            ) : null}
          </SearchResult>
          <Link to="/">
              <ButtonLink>Go back </ButtonLink>
            </Link>
        </SearchResultContainer>
      </SearchContainer>
    </Container>
  );
}
