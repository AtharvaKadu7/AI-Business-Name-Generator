// src/pages/Login.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { googleSignIn } = useAuth();
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      await googleSignIn();
      navigate("/");
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  return (
    <Container>
      <LoginCard>
        <Logo>LogoMaker AI</Logo>
        <Title>Welcome to LogoMaker AI</Title>
        <Description>
          Please sign in with Google to access our business name generator
        </Description>
        <SignInButton onClick={handleSignIn}>
          <img src="https://image.similarpng.com/very-thumbnail/2020/06/Logo-google-icon-PNG.png" alt="Google" />
          Sign in with Google
        </SignInButton>
      </LoginCard>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #505abc;
  background-image: url("/assets/background.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const LoginCard = styled.div`
  background-color: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 400px;
  width: 90%;
`;

const Logo = styled.h1`
  color: #505abc;
  font-size: 32px;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  color: #333;
  font-size: 24px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  color: #666;
  margin-bottom: 30px;
`;

const SignInButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: #fff;
  color: #333;
  border: 1px solid #ddd;
  padding: 12px 24px;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  margin: 0 auto;

  img {
    width: 20px;
    height: 20px;
  }

  &:hover {
    background-color: #f5f5f5;
    border-color: #ccc;
  }
`;

export default Login;