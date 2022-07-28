import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import boatImage from '../assets/boatImage.jpg';

const Styles = styled.div`
  .jumbo {
    background: url(${boatImage}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 200px;
    position: relative;
    z-index: -2;
  }

  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

const Jumbo = styled.div`

.container-fluid .jumbotron, .container .jumbotron {
  border-radius: 6px;
  padding-left: 15px;
  padding-right: 15px;
}

@media screen and (min-width: 768px)
{
.container-fluid .jumbotron, .container .jumbotron {
    padding-left: 60px;
    padding-right: 60px;
}
}

@media screen and (min-width: 768px)
{
.jumbotron {
    padding-bottom: 48px;
    padding-top: 48px;
}
}

.jumbotron {
  background-color: #eee;
  padding-left: 60px;
  padding-right: 60px;
  margin-bottom: 30px;
  padding-bottom: 30px;
  padding-top: 30px;
}
`

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
        <h1>Welcome</h1>
        <p>Learn to code from my YouTube videos</p>
      </Container>
    </Jumbo>
  </Styles>
)
