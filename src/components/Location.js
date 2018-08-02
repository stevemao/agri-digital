import React from "react";
import { lifecycle, compose } from "recompose";
import styled from "styled-components";

const Wrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const Left = styled.section`
  width: 100%;

  @media (min-width: 768px) {
    width: 70%;
  }
`;

export const Right = styled.section`
  width: 100%;

  @media (min-width: 768px) {
    width: 30%;
  }
`;

const Title = styled.h3`
  margin: 18px;
  font-size: 1em;
`;

export function Location({ locations }) {
  return (
    <Wrapper>
      {locations.map(location => (
        <li key={location.woeid}>
          <Title>{location.title}</Title>
          <Left>{location.latt_long}</Left>
        </li>
      ))}
    </Wrapper>
  );
}

export const spec = {
  state: {
    locations: []
  },
  getLocationDetails() {
    const AbortController = window.AbortController;
    this.controller = new AbortController();
    const signal = this.controller.signal;
    fetch(
      `https://www.metaweather.com/api/location/search/?query=${
        this.props.match.params.location
      }`,
      { signal }
    )
      .then(response => response.json())
      .then(locations => {
        this.setState({ locations });
      });
  },
  componentDidMount() {
    this.getLocationDetails();
  },
  componentWillUnmount() {
    this.controller.abort();
  }
};

export default compose(lifecycle(spec))(Location);
