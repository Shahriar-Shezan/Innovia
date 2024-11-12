import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function AppContact() {
  return (
    <section id="contact" className="block contact-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Contact us</h2>
          <div className="subtitle">get connected with us</div>
        </div>
        <Form className='contact-form'>
          <Row>
            <Col sm={4}>
              <Form.Control type="text" placeholder="Enter your full name" required />
            </Col>
            <Col sm={4}>
              <Form.Control type="email" placeholder="Enter your email address" required />
            </Col>
            <Col sm={4}>
              <Form.Control type="tel" placeholder="Enter your contact number" required />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Form.Control as="textarea" placeholder="Enter your contact message" required />
            </Col>
          </Row>
          <div className='btn-holder'>
            <Button type="submit">Submit</Button>
          </div>
        </Form>
      </Container>
      <div className='google-map'>
        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3690.5452227738033!2d91.8102809!3d22.3330329!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd8c9d35510bf%3A0x8aaee68428ef976a!2sComputer%20City%20%26%20Technologies!5e0!3m2!1sen!2sbd!4v1731161664585!5m2!1sen!2sbd"></iframe>
      </div>
      <Container fluid>
        <div className='contact-info'>
          <ul>
            <li>
              <i className="fas fa-envelope"></i>
              help@innovia.com
            </li>
            <li>
              <i className="fas fa-phone"></i>
              +8801812048556
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              Chittagong computer city, Chittagong
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default AppContact;