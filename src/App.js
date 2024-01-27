import './App.css';
import React from 'react';
import {Card,Navbar,Carousel,Button,NavDropdown,Nav,Container, Row,Col,Form} from 'react-bootstrap'


function App() {
  return (
    <div className="App">
        <Navbar expand="lg" className="black-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Architecture interieur</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="my-home">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About us</Nav.Link>
            <NavDropdown title="Category" id="basic-nav-dropdown">
              <NavDropdown.Item href="#Renovation/3.1">Renovation</NavDropdown.Item>
              <NavDropdown.Item href="#Renovation/3.2">
                Horror
              </NavDropdown.Item>
              <NavDropdown.Item href="#Renovation/3.3">Design</NavDropdown.Item>
              <NavDropdown.Item href="#Renovation/3.4">
                Humor
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <br></br><br></br><br></br><br></br>
      {/* Slides pour exposer notre travaille */}
    
 <Carousel data-bs-theme="red">
      <Carousel.Item className='carousel'>
        <img
          className="d-block w-100"
          src="https://www.createursdinterieur.com/static/15e5b1239be008e6b8e04bac8d164455/120e7/prestation-architecte-interieur.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Design</h5>
          <p>Rénovation et extension luxe d'un Mas provençal haut de gamme .</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.createursdinterieur.com/static/272a61b58c36682bb002297ea6ed17a3/cac11/appartement-art-deco-275m2-avant-apres.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Architecture</h5>
          <p>Avant-Après : découvrez nos réalisations.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://unaarchitecture.com/wp-content/uploads/2019/01/architecte-lyonnais-projet-travaux-r%C3%A9novation-appartement-am%C3%A9nagement-interieur-montagne-alpes-courchevel-2.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Architecture interieur</h5>
          <p>
          Rénovation dune maison et extension moderne à Biot
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
    <br></br><br></br><br></br><br></br>
{/* Cards for renovation faite*/}

<Container style={{marginRight:'10px'}}>
  <Row>
    <Col md={4}>
    <Card style={{ width: '13rem' }}>
      <Card.Img variant="top" src="https://www.createursdinterieur.com/static/15e5b1239be008e6b8e04bac8d164455/120e7/prestation-architecte-interieur.jpg" />
      <Card.Body>
        <Card.Title>Architecture</Card.Title>
        <Card.Text>
        Ensemble, l'architecture d'intérieur, la rénovation et la décoration créent des espaces qui vont au-delà de leur fonction première. Ils racontent des histoires, évoquent des émotions et transforment des lieux ordinaires en expériences extraordinaires 
        </Card.Text>
        <Button variant="primary">Renover</Button>
      </Card.Body>
    </Card>
    </Col>

    <Col md={4}>
    <Card style={{ width: '13rem' }}>
      <Card.Img variant="top" src="https://www.createursdinterieur.com/static/272a61b58c36682bb002297ea6ed17a3/cac11/appartement-art-deco-275m2-avant-apres.jpg" />
      <Card.Body>
        <Card.Title>Renovation</Card.Title>
        <Card.Text>
        La décoration est la touche finale qui donne du caractère à un espace. Les designers d'intérieur jouent avec les textures, les motifs et les accessoires pour créer une ambiance unique
        </Card.Text>
        <Button variant="primary">Renover</Button>
      </Card.Body>
    </Card>
    </Col>

    <Col md={4}>
    <Card style={{ width: '13rem' }}>
      <Card.Img variant="top" src="https://unaarchitecture.com/wp-content/uploads/2019/01/architecte-lyonnais-projet-travaux-r%C3%A9novation-appartement-am%C3%A9nagement-interieur-montagne-alpes-courchevel-2.jpg" />
      <Card.Body>
        <Card.Title>Design</Card.Title>
        <Card.Text>
        La rénovation est le processus de restauration et de modernisation d'un espace existant. Que ce soit pour redonner vie à une vieille demeure ou pour adapter un lieu à des besoins contemporains, la rénovation implique souvent des travaux structurels et esthétiques
        </Card.Text>
        <Button variant="primary">Renover</Button>
      </Card.Body>
    </Card>
    </Col>
  </Row>
</Container>


<Form style={{width: '20em', marginLeft: '33em', marginTop: '5em', marginBottom: '5em'}}>
  <h3>Contact us</h3>
  <br></br>

  {/* Bootstrap Contact us form  */}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Write us</Form.Label>
        <Form.Control type="text"  style={{width:'20em', height:'10em'}} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>


    </div>
  );
}

export default App;
