import React, {Component} from "react";
import { Card, Container, CardDeck, Jumbotron } from "react-bootstrap";
import { Doughnut } from "react-chartjs-2";
import { SocialIcon } from 'react-social-icons';

const DoughnutComp = () => {
  return (
    <Container>
      <Jumbotron>
        <h1>How much is spent on housing vs the police?</h1>
      </Jumbotron>

      <Container>
        <Card>
          <Card.Body>
            <Doughnut />

          </Card.Body>
        </Card>
      </Container>
    </Container>
  )
}



export default DoughnutComp;
