import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import img1 from '../assets/images/img1.webp';

function AppAbout() {
  
  return (
    <section id="about" className="block about-block">
      <Container fluid>
        <div className="title-holder">
          <h2>About Us</h2>
          <div className="subtitle">learn more about us</div>
        </div>
        <Row>
          <Col sm={6}>
            <Image src={img1} />
          </Col>
          <Col sm={6}>
            <p>At Innovia, we're passionate about providing you with only the best hardware for your custom PC builds. Whether you're a gamer, content creator, or power user, we source top-quality components to help you build the ultimate rig. From high-performance CPUs and GPUs to cutting-edge storage and cooling solutions, we offer everything you need to create a reliable, high-powered system tailored to your needs.</p>
            <p>We believe that every PC should reflect its builder's vision, and our expert team is here to guide you in choosing the best components for maximum performance, stability, and longevity. When you shop with us, you're not just buying parts—you're investing in quality and expertise.</p>
            <p>
            Start building with Innovia today, and experience the difference that premium hardware can make!
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default AppAbout;