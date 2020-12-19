import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const CelebrationData = [
  {
    title: "Celebration Cakes ",
    img: "/images/celebration/celebration-1.png",
    price: "price: $20",
    link: "/celebration-cakes ",
  },
  {
    title: "Milk Chocolate Caramel Cake",
    img: "/images/celebration/celebration-1.png",
    price: "price: $46.99",
    link: "/chocolate-caramel",
  },
  {
    title: "Chocolate Mousse Cake",
    img: "/images/celebration/celebration-2.png",
    price: "price: $46.99",
    link: "/chocolate-mousse",
  },
  {
    title: "Lemon Mousse Cake",
    img: "/images/celebration/celebration-3.png",
    price: "price: $50.99",
    link: "/lemon-mousse",
  },
];

export default function Celebration() {
  console.log('Hello from Mahmoud!');
  return (
    <Wrapper>
      <CelebrationWrapper>
        {CelebrationData.map((item, index) => (
          <Link to={item.link} key={index}>
            <CelebrationItem title={item.title}>
              <img src={item.img} alt={item.title} />
              {item.title}
              <PriceWrapper>{item.price}</PriceWrapper>
            </CelebrationItem>
          </Link>
        ))}
      </CelebrationWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  top: 200px;

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
  gap: 15px;
`;

const CelebrationItem = styled.div`
  width: 250px;
  height: 250px;
  /* color: rgba(255, 255, 255, 0.7); */
  font-size: 17px;
  display: grid;
  /* grid-template-columns: auto; */
  align-items: center;
  padding: 15px;
  border-radius: 10px;
  transition: 0.5s ease-out;
  color: #741b47;
  /* background: #741b47; */

  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  :hover {
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
    transform: translateY(-3px) scale(1.2);
  }
`;

const PriceWrapper = styled.p``;
