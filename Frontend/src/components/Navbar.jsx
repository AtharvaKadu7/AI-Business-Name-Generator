import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { user, logOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSignOut = async () => {
    try {
      await logOut();
      navigate("/login");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  // Move conditional return after hooks
  if (location.pathname === '/login') {
    return null;
  }

  return (
    <Container scrolled={scrolled}>
      <Left>
        <Link to="/">LogoMaker AI</Link>
      </Left>
      <Right>
        {user && (
          <UserSection>
            <UserProfile>
              <img src={user.photoURL} alt="Profile" />
              <span>{user.displayName}</span>
            </UserProfile>
            <SignOutButton onClick={handleSignOut}>Sign Out</SignOutButton>
          </UserSection>
        )}
      </Right>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 999;
  position: fixed;
  padding: 10px 50px;
  background-color: ${(props) => (props.scrolled ? "#505ABC" : "transparent")};
  transition: all 0.5s ease;
`;

const Left = styled.div`
  a {
    color: #fff;
    font-size: 30px;
    font-weight: 600;
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
`;

const UserSection = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  
  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 2px solid #fff;
  }
  
  span {
    color: #fff;
    font-size: 14px;
  }
`;

const SignInButton = styled.button`
  background-color: #fff;
  color: #505ABC;
  border: none;
  padding: 8px 16px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background-color: #e6e6e6;
  }
`;

const SignOutButton = styled(SignInButton)`
  background-color: transparent;
  border: 1px solid #fff;
  color: #fff;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export default Navbar;