import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const servicesData = [
  {
    id: 1,
    icon: 'fas fa-headset',
    title: 'Customer Support',
    description: 'Need help? At Innovia Our dedicated support team is here to assist you with any questions or concerns. Reach out anytime for expert advice!'
  },
  {
    id: 2,
    icon: 'fas  fa-user-shield',
    title: 'Warranty',
    description: 'Shop with confidence—our warranty guarantees peace of mind. We cover defects and assist with replacements to keep your build running smoothly.'
  },
  {
    id: 3,
    icon: 'fas fa-circle-question',
    title: 'FAQs',
    description: 'Got questions? Check out our FAQs for quick answers on product compatibility, building tips, and more!'
  },
  {
    id: 4,
    icon: 'fas fa-screwdriver-wrench',
    title: 'Troubleshooting',
    description: 'Encountering issues? Our troubleshooting guide and support team are ready to help resolve any problem and get your PC up and running.'
  },
  {
    id: 5,
    icon: 'fas fa-plug-circle-check',
    title: 'Cable Management ',
    description: 'Neat and tidy! Explore our cable management tips and accessories to keep your build looking clean and organized for optimal airflow.'
  },
  {
    id: 6,
    icon: 'fas fa-gears',
    title: 'Installation Services',
    description: 'Prefer hands-free setup? Our professional installation service ensures every component is installed perfectly, leaving you ready to power on'
  }
]

function AppServices() {
  return (
    <section id="services" className="block services-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Our services</h2>
          <div className="subtitle">services we provide</div>
        </div>
        <Row>
          {
            servicesData.map(services => {
              return (
                <Col sm={4} className='holder' key={services.id}>
                  <div className="icon">
                    <i className={services.icon}></i>
                  </div>
                  <h3>{services.title}</h3>
                  <p>{services.description}</p>
                </Col>
              );
            })
          }
        </Row>
      </Container>
    </section>
  );
}

export default AppServices;