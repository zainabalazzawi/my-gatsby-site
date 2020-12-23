import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const MiniData = [
  {
    title: "Mini Cakes",
    img: "/images/mini/mini-1.png",
    price: "price: $20",
    link: "/mini-cakes",
  },
  {
    title: "Chocolate Peanut Butter",
    img: "/images/mini/mini-1.png",
    price: "price: $20",
    link: "/chocolate-peanut",
  },
  {
    title: "Caramel Party",
    img: "/images/mini/mini-2.png",
    price: "price: $20",
    link: "/caramel-party",
  },
  {
    title: "Mocha Espresso Square",
    img: "/images/mini/mini-3.png",
    price: "price: $20",
    link: "/mocha-espresso",
  },
];

export default function Mini() {
  return (
    <Wrapper>
      <MiniWrapper>
        {MiniData.map((item, index) => (
          <Link to={item.link} key={index}>
            <MiniItem title={item.title}>
              <img src={item.img} alt={item.title} />

              {item.title}
              <PriceWrapper>{item.price}</PriceWrapper>
            </MiniItem>
          </Link>
        ))}
      </MiniWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  top: 500px;
  width: 100%;
  img {
    width: 200px;
    height: 150px;
  }
`;
const MiniWrapper = styled.div`
  position: absolute;
  right: 100px;
  top: 200px;
  display: grid;
  grid-template-columns: repeat(4, auto);
  gap: 15px;
`;
const MiniItem = styled.div`
  width: 250px;
  height: 250px;
  /* color: rgba(255, 255, 255, 0.7); */
  font-size: 17px;
  display: grid;
  /* grid-template-columns: auto; */
  align-items: center;
  padding: 15px;
  transition: 0.5s ease-out;
  color: #741b47;
  /* background: #741b47; */

  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  :hover {
    background: rgba(255, 255, 255);
    opacity: 5;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
    transform: translateY(-3px);

    /* scale(1.2); */
  }
`;
const PriceWrapper = styled.p``;
