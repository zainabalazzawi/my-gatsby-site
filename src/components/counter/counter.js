import React from "react";
import styled from "styled-components";

export default class Counter extends React.Component {
  state = {
    count: 0,
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return (
      <Wrapper>
        <QuantityWrapper>quantity</QuantityWrapper>
        <button onClick={this.decrement}>-</button>
        <div> {this.state.count}</div>
        <button onClick={this.increment}>+</button>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  position: absolute;
  right: 100px;
  top: 290px;
  grid-template-columns: repeat(3, auto);
  display: grid;
  background: #e1b472;

  /* border: 1px solid #946013; */

  button {
    width: 50px;
    height: 36px;
    background: #e1b472;

    /* border-color: #472f09; */
  }

  div {
    text-align: center;
    width: 400px;
    height: 36px;
  }
`;
const QuantityWrapper = styled.h1`
  position: absolute;
  top: -40px;
  right: 415px;
  font-size: 20px;
  font-weight: 20px;
  color: #946013;
  padding: 10px;
`;
