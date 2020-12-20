import React from "react";
import styled from "styled-components";
import Counter from "../components/counter/counter";

export default function Celebration() {
  return (
    <Wrapper>
      <TitleWrapper>
        Milk Chocolate Caramel Cake
        <span> price: $46.99</span>
      </TitleWrapper>
      <TextWrapper>
        A refreshing choice. Zesty lemon mousse surrounds layers of light white
        sponge cake. Finished with 35% whipped cream, white chocolate shavings
        and fresh lemon wedges. Keep refrigerated, best served chilled.
      </TextWrapper>
      <img src="/images/celebration/celebration-3.png" alt="celebration" />

      <Counter />

      <p className="information">
        PLEASE WRITE YOUR PERSONALIZED MESSAGE BELOW
      </p>
      <input type="text" className="message" />
      <button type="button" className="order">
        Order
      </button>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  justify-content: space-between;
  display: grid;
  grid-template-columns: 53px auto;
  align-items: center;
  img {
    position: absolute;
    top: 220px;
    right: 700px;
    width: 500px;
  }
  .message {
    position: absolute;
    right: 90px;
    top: 515px;
    width: 530px;
    height: 150px;
    border-color: #e1b472;
    border-radius: 5px;
  }
  .information {
    position: absolute;
    top: 490px;
    right: 220px;
    color: #946013;
  }
  .order {
    position: absolute;
    top: 700px;
    right: 100px;
    width: 500px;
    height: 30px;
    background: #e1b472;
    border-color: #e1b472;
  }
`;
const TextWrapper = styled.p`
  position: absolute;
  top: 330px;
  right: 100px;
  width: 500px;
  line-height: 1.5;
  background: #e1b472;
  align-items: center;
  padding: 20px;
  border-radius: 5px;
  color: #472f09;
`;

const TitleWrapper = styled.h1`
  position: absolute;
  top: 150px;
  right: 720px;
  font-size: 30px;
  font-weight: 10px;
  display: grid;
  gap: 10px;
  color: #946013;
  span {
    font-size: 20px;
  }
`;
