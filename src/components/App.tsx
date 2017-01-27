import * as React from 'react';
import styled from 'styled-components';

export const DIV = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 60vh;
`;

export const BUTTON = styled.button`
  width: 50px;
  height: 50px;
  outline: none;
  border: none;
  &:hover {
    background: #A4C175;
    color: $fff;
  };
`;

export const WRAPPER = styled.div`
  display: flex; 
  justify-content: space-around;
  flex-direction: row;
  width: 300px;
`;

export const COUNTER = styled.div`
  font-size: 45px;
  text-align: center;
  width: 50px;
`;

export class App extends React.Component<void, any> {
  private counter: number;
  constructor() {
    super();

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.state = { counter: 0};
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  decrement() {
    this.setState({
      counter: this.state.counter - 1
    });
  }

  render() {
    return (
      <DIV>
        <WRAPPER>
          <BUTTON onClick={this.decrement}>
          -
          </BUTTON>
          <COUNTER>{this.state.counter}</COUNTER>
          <BUTTON onClick={this.increment}>+</BUTTON>
        </WRAPPER>
      </DIV>  
    );
  }
}
