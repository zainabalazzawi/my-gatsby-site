import styled from "styled-components";
import React from "react";
import Header from "../header/header";
import Celebration from "../cake/celebration";
import Mini from "../cake/mini";

function Home() {
  return (
    <Wrapper>
      <Header />
      <Celebration />
      <Mini />
    </Wrapper>
  );
}

export default Home;

const Wrapper = styled.div``;
