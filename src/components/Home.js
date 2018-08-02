import React from "react";
import styled from "styled-components";
import { withStateHandlers, compose } from "recompose";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const H1 = styled.h1`
  text-align: center;
  margin: 0 0 20px 0;
`;

const Label = styled.label`
  text-align: center;
  color: grey;
  display: block;
  margin: 0 0 20px 0;
`;

const Button = styled(Link)`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  text-align: left;
  color: blue;
`;

function Home({ location, changeLocation }) {
  return (
    <Wrapper>
      <Label>
        <H1>Input your location</H1>
        <input value={location} onChange={changeLocation} />
      </Label>
      <Button to={"/location/" + location}>submit</Button>
    </Wrapper>
  );
}

export const initialState = () => ({
  location: ""
});

export const stateUpdaters = {
  changeLocation: event => event => {
    return {
      location: event.target.value
    };
  }
};

export default compose(withStateHandlers(initialState, stateUpdaters))(Home);
