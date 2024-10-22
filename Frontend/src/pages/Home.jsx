import React, { useState } from "react";
import styled from "styled-components";
import axios from "../axios";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

// A sample dictionary for suggestions (you can replace this with an API or a larger list)
const dictionary = [
  "ability", "absence", "academy", "account", "accuracy", "achievement", "action",
  "activity", "adventure", "agency", "agreement", "analysis", "application", "appointment",
  "argument", "attitude", "business", "capacity", "challenge", "choice", "climate",
  "company", "competition", "concept", "condition", "creativity", "development", "direction",
  "discovery", "education", "enterprise", "environment", "experience", "expression",
  "imagination", "impact", "influence", "innovation", "intelligence", "knowledge",
  "leadership", "management", "opportunity", "organization", "participation", "performance",
  "philosophy", "planning", "potential", "problem", "progress", "project", "quality",
  "reality", "recognition", "relationship", "responsibility", "solution", "strategy", "success",
  "technology", "theory", "understanding", "vision" , "cake" , "car" , "business" , "product" , "dairy" , "shop" , "pet",
  "dog" , "cat" , "bank"
];

const Home = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const input = e.target.value;
    setSearchText(input);

    // Filter dictionary-based suggestions based on input
    if (input.length > 0) {
      const filtered = dictionary.filter((word) =>
        word.toLowerCase().startsWith(input.toLowerCase())
      );
      setFilteredSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setFilteredSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchText(suggestion);
    setShowSuggestions(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post("/predict", { word: searchText });
      setLoading(false);
      navigate("/search", { state: data });
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  return (
    <>
      {loading && <Loader />}
      <Container>
        <Main>
          <h1>Business Name Generator</h1>
          <h3>Generate a short, brandable business name using artificial intelligence</h3>

          <InputField>
            <input
              type="text"
              placeholder="Enter your business name or keyword"
              value={searchText}
              onChange={handleInputChange}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
              onFocus={() => searchText && setShowSuggestions(true)}
            />
            <Button onClick={handleSubmit}>Generate</Button>
          </InputField>

          {/* Suggestion Dropdown */}
          {showSuggestions && filteredSuggestions.length > 0 && (
            <SuggestionDropdown>
              {filteredSuggestions.map((suggestion, index) => (
                <li
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </li>
              ))}
            </SuggestionDropdown>
          )}
        </Main>
      </Container>

      <About>
        <Description>
          <h1>Why a branded name?</h1>
          <p>For new businesses, naming options can seem quite limited...</p>
          <p>In 2023 many startups are choosing a short, branded name...</p>
        </Description>
      </About>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("/assets/background.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: #505abc;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = styled.div`
  color: #fff;
  text-align: center;
  h1 {
    font-size: 45px;
  }
  h3 {
    color: #bbd3f9;
    font-size: 20px;
  }
`;

const InputField = styled.div`
  margin: 0 auto;
  margin-top: 25px;
  padding: 10px;

  input {
    border: none;
    width: 400px;
    padding: 15px 20px;
    border-radius: 10px;
    outline: none;
    border: 1px solid #000;
    font-size: 18px;
    color: rgba(0, 0, 0, 0.5);

    &::placeholder {
      font-size: 18px;
    }
  }
`;

const Button = styled.button`
  background-color: #363a8e;
  outline: none;
  border: none;
  color: #fff;
  padding: 15px 20px;
  border-radius: 10px;
  margin-left: 10px;
  width: 130px;
  transition: all 0.3s ease;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 1px;

  &:active {
    scale: 1.05;
  }
`;

const SuggestionDropdown = styled.ul`
  margin-top: 5px;
  list-style: none;
  padding: 10px;
  width: 400px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: left;
  color: #000;

  li {
    padding: 10px;
    cursor: pointer;

    &:hover {
      background-color: #f1f1f1;
    }
  }
`;

const About = styled.div`
  width: 100%;
  background-image: url("/assets/background2.svg");
  height: 400px;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #d1e1ed;
  background-size: cover;
`;

const Description = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 50px;
  max-width: 400px;
  margin: 0 auto;

  h1 {
    color: #5874db;
    font-size: 40px;
  }
  p {
    color: #687689;
    font-size: 18px;
  }
`;

export default Home;
