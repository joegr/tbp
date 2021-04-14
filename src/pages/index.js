import React, {Component} from "react";
import { Card, Container, CardDeck, Jumbotron } from "react-bootstrap";
import { Doughnut, Line } from "react-chartjs-2";
import { SocialIcon } from 'react-social-icons';
import 'bootstrap';
import { Nav } from './nav.js';

const data = {
  labels: ['Tenant Advocacy', 'Homeless Initiatives', 'Housing Rehabilitation', 'Community Block Grant Development', "Housing Development"],
  datasets: [
    {
      label: 'Budget Breakdown',
      data: [ 327764, 1972702, 145000, 108421, 20000 ]
    }
  ]
};

// markup
const IndexPage = () => {
  console.log(data);
  return (
    <main>
      <Container>
        <Jumbotron>
          <h1>Where is your money going?</h1>
          <Card>
            <Doughnut data={data}/>
              <Card.Body>
                <Card.Title>Police Budget Breakdown</Card.Title>
                <Card.Text>
                  See how your money is spent!
                </Card.Text>
              </Card.Body>
            </Card>
        </Jumbotron>
      </Container>
        <Container style={{ padding: '4rem'}}>
          <CardDeck>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Police Spending vs Housing Spending</Card.Title>
                <Card.Img src="#"/>
                <Card.Subtitle className="mb-2 text-muted">see the difference</Card.Subtitle>
                <Card.Text>
                   the city prioritizes police spending at the expense of tenants and houseless persons
                </Card.Text>
                <SocialIcon url="https://twitter.com/thebudgetproj"/>
                <SocialIcon url="https://instagram.com/thebudgetproj"/>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>

                <SocialIcon url="https://twitter.com/thebudgetproj"/>
                <SocialIcon url="https://instagram.com/thebudgetproj"/>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <SocialIcon url="https://twitter.com/thebudgetproj"/>
                <SocialIcon url="https://instagram.com/thebudgetproj"/>
              </Card.Body>
            </Card>
          </CardDeck>
        </Container>
    </main>
  )
}

export default IndexPage
