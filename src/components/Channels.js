import React from "react";
import styled from "styled-components";

function Channels() {
  return (
    <Container>
      <Wrap>
        <img src="/images/channels-disney.png" alt=""></img>
      </Wrap>
      <Wrap>
        <img src="/images/channels-disney.png" alt=""></img>
      </Wrap>
      <Wrap>
        <img src="/images/channels-disney.png" alt=""></img>
      </Wrap>
      <Wrap>
        <img src="/images/channels-disney.png" alt=""></img>
      </Wrap>
      <Wrap>
        <img src="/images/channels-disney.png" alt=""></img>
      </Wrap>
    </Container>
  );
}

export default Channels;

const Container = styled.div`
  margin-top: 32px;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
`;

const Wrap = styled.div`
  border: s3px olid rgba(249, 249, 249, 0.1);
  img {
      width: 100%;
      height: 100%
      object-fit: cover;
  }
`;
