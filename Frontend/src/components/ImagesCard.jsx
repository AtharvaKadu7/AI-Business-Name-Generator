import React from "react";
import styled from "styled-components";

const ImagesCard = ({ img }) => {
  return (
    <>
      <Card>
        <img src={img} alt="logo" />
        <BuyButton href="https://buy.stripe.com/test_9AQ02E9zFe641AAaEF" target="_blank" onClick={(e) => e.stopPropagation()}>
          Buy Now
        </BuyButton>
      </Card>
    </>
  );
};

const Card = styled.div`
  width: 300px;
  height: 250px; /* Increased height to accommodate the button */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background: #fff;
  transition: all 0.2s ease;
  margin-top: 20px;
  cursor: pointer;
  margin-bottom: 30px;
  overflow: hidden;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 15px 15px 0 0; /* Only top corners rounded */
  }
`;

const BuyButton = styled.a`
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  border-radius: 0 0 15px 15px; /* Rounded bottom corners */
  width: 100%;
  display: inline-block;
  text-align: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }
`;

export default ImagesCard;
