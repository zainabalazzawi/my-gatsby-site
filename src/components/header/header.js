import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const menuData = [
  { title: "Home", link: "/home" },
  { title: "Our cake", link: "/our cake" },
  { title: "Your order", link: "/your order" },
];
export default function Header() {
  return (
    <Wrapper>
      <Title>
        candy <span>&</span> cake
      </Title>
      <MenuWrapper>
        {menuData.map((item, index) => (
          <Link to={item.link} key={index}>
            <MenuItem title={item.title}>{item.title}</MenuItem>
          </Link>
        ))}
      </MenuWrapper>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  position: fixed;
  padding: 70px;
  width: 100%;
  display: grid;
  background: #704313;
`;

const MenuWrapper = styled.div`
  position: absolute;
  top: 200px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, auto auto auto);
  background: #f2b472;
`;

const MenuItem = styled.div`
  top: 100px;
  color: #704313;
  font-size: 17px;
  padding: 10px;
  text-align: center;
  transition: 0.5s ease-out;

  :hover {
    color: rgba(255, 255, 255, 0.7);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
    background: #bd7120;
  }
`;
const Title = styled.h1`
  font-size: 80px;
  color: #f2b472;
  span {
    color: #bd7120;
  }
`;
