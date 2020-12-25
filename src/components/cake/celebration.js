import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const CelebrationData = [
  {
    title: "Celebration Cakes ",
    word: "view",
    img: "/images/celebration/celebration-1.png",
    price: "price: $20",
    link: "/celebration-cakes ",
  },
  {
    title: "Chocolate Caramel Cake",
    word: "view",
    img: "/images/celebration/celebration-1.png",
    price: "price: $46.99",
    link: "/chocolate-caramel",
  },
  {
    title: "Chocolate Mousse Cake",
    word: "view",
    img: "/images/celebration/celebration-2.png",
    price: "price: $46.99",
    link: "/chocolate-mousse",
  },
  {
    title: "Lemon Mousse Cake",
    word: "view",
    img: "/images/celebration/celebration-3.png",
    price: "price: $50.99",
    link: "/lemon-mousse",
  },
];

export default function Celebration() {
  return (
    <Wrapper>
      <CelebrationWrapper>
        {CelebrationData.map((item, index) => (
          <Link to={item.link} key={index}>
            <CelebrationItem title={item.title}>
              <img src={item.img} alt={item.title} />
              {item.title}
              <PriceWrapper>{item.price}</PriceWrapper>
              <ViewWrapper>{item.word}</ViewWrapper>
            </CelebrationItem>
          </Link>
        ))}
      </CelebrationWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  top: 90px;
  width: 100%;
  img {
    width: 200px;
    height: 150px;
  }
`;

const CelebrationWrapper = styled.div`
  position: absolute;
  right: 100px;
  top: 200px;
  display: grid;
  grid-template-columns: repeat(4, auto);
  border-bottom: 1px solid #741b47;
  padding-bottom: 10px;
  gap: 15px;
`;

const CelebrationItem = styled.div`
  width: 250px;
  height: 300px;
  /* color: rgba(255, 255, 255, 0.7); */
  font-size: 17px;
  font-weight: bold;
  display: grid;
  grid-template-columns: auto;
  align-items: center;
  padding: 25px;
  /* border-radius: 10px; */
  transition: 0.5s ease-out;
  color: #741b47;
  gap: 10px;
  /* background: #741b47; */

  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  :hover {
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
    transform: translateY(-3px);
    /* scale(1.2) */
  }
`;

const PriceWrapper = styled.p`
  font-size: 15px;
`;
const ViewWrapper = styled.div`
  color: #a64d79;
  width: 80px;
  padding: 8px;
  text-align: center;
  background: #d5a6bd;
  font-weight: bold;
  font-size: 20px;
  border-radius: 3px;
`;
