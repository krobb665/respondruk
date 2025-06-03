import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Navbar, Nav } from 'react-bootstrap';
import { 
  BellFill, 
  PeopleFill, 
  GraphUp, 
  GeoAltFill, 
  ShieldLockFill, 
  ClockFill,
  CheckCircleFill
} from 'react-bootstrap-icons';

const features = [
  {
    name: 'Real-time Alerts',
    description: 'Get instant notifications for critical incidents and emergencies as they happen, ensuring you\'re always in the loop.',
    icon: BellFill,
  },
  {
    name: 'Team Collaboration',
    description: 'Coordinate with your team efficiently with built-in chat, task assignment, and progress tracking.',
    icon: PeopleFill,
  },
  {
    name: 'Comprehensive Reporting',
    description: 'Generate detailed reports and analytics to improve your emergency response strategies.',
    icon: GraphUp,
  },
  {
    name: 'Resource Tracking',
    description: 'Keep track of all your emergency response resources in real-time.',
    icon: GeoAltFill,
  },
  {
    name: 'Secure Platform',
    description: 'Enterprise-grade security to keep your data safe and compliant with industry standards.',
    icon: ShieldLockFill,
  },
  {
    name: '24/7 Support',
    description: 'Round-the-clock support from our team of emergency response experts.',
    icon: ClockFill,
  },
];

const plans = [
  {
    name: 'Basic',
    description: 'Perfect for small teams getting started with incident management.',
    price: 29,
    features: [
      'Up to 10 users',
      'Basic incident reporting',
      'Email support',
      '1GB storage',
    ],
    cta: 'Get started',
    featured: false,
  },
  {
    name: 'Professional',
    description: 'For growing teams that need advanced features and support.',
    price: 99,
    features: [
      'Up to 50 users',
      'Advanced analytics',
      'Priority support',
      '10GB storage',
      'Custom branding',
    ],
    cta: 'Start free trial',
    featured: true,
  },
  {
    name: 'Enterprise',
    description: 'For organizations with complex incident management needs.',
    price: 'Custom',
    features: [
      'Unlimited users',
      'Advanced security',
      '24/7 dedicated support',
      'Custom integrations',
      'Unlimited storage',
    ],
    cta: 'Contact sales',
    featured: false,
  },
];

const HomePage: React.FC = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Navigation */}
      <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand as={Link} to="/">Respondr UK</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/features">Features</Nav.Link>
              <Nav.Link as={Link} to="/pricing">Pricing</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/login" className="me-2">Login</Nav.Link>
              <Button as={Link} to="/register" variant="primary">Get Started</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <section className="py-5 bg-primary text-white">
        <Container className="py-5">
          <Row className="align-items-center">
            <Col lg={6} className="text-center text-lg-start mb-5 mb-lg-0">
              <h1 className="display-4 fw-bold mb-4">
                Incident Management <span className="text-warning">Made Simple</span>
              </h1>
              <p className="lead mb-4">
                Streamline your emergency response operations with our comprehensive incident management platform.
                From real-time alerts to resource tracking, we've got you covered.
              </p>
              <div className="d-flex gap-3">
                <Button as={Link} to="/register" variant="light" size="lg" className="px-4">
                  Get Started
                </Button>
                <Button as={Link} to="/about" variant="outline-light" size="lg" className="px-4">
                  Learn More
                </Button>
              </div>
            </Col>
            <Col lg={6}>
              <img 
                src="https://via.placeholder.com/600x400" 
                alt="Incident Management" 
                className="img-fluid rounded-3 shadow"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-5">
        <Container className="py-5">
          <Row className="text-center mb-5">
            <Col lg={8} className="mx-auto">
              <span className="text-primary fw-bold">Faster Response</span>
              <h2 className="display-5 fw-bold mb-3">
                Everything you need to manage incidents effectively
              </h2>
              <p className="lead text-muted">
                Our platform provides all the tools and features you need to coordinate emergency responses,
                track resources, and ensure optimal outcomes.
              </p>
            </Col>
          </Row>
          <Row className="g-4">
            {features.map((feature, index) => (
              <Col key={index} md={6} lg={4}>
                <Card className="h-100 border-0 shadow-sm">
                  <Card.Body className="p-4">
                    <div className="bg-primary bg-opacity-10 d-inline-flex p-3 rounded-3 mb-3">
                      <feature.icon className="text-primary" size={24} />
                    </div>
                    <h3 className="h5">{feature.name}</h3>
                    <p className="text-muted mb-0">{feature.description}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Pricing Section */}
      <section className="py-5 bg-light">
        <Container className="py-5">
          <Row className="text-center mb-5">
            <Col lg={8} className="mx-auto">
              <span className="text-primary fw-bold">Pricing</span>
              <h2 className="display-5 fw-bold mb-3">Choose the right plan for your team</h2>
              <p className="lead text-muted">
                Flexible pricing options to suit organizations of all sizes. Start with our basic plan
                and upgrade as your needs grow.
              </p>
            </Col>
          </Row>
          <Row className="g-4 justify-content-center">
            {plans.map((plan, index) => (
              <Col key={index} md={6} lg={4}>
                <Card className={`h-100 border-0 ${plan.featured ? 'border-primary border-2' : 'border'} shadow-sm`}>
                  {plan.featured && (
                    <div className="bg-primary text-white text-center py-2 small fw-bold">
                      MOST POPULAR
                    </div>
                  )}
                  <Card.Body className="p-4">
                    <div className="text-center mb-4">
                      <h3 className={`h4 mb-3 ${plan.featured ? 'text-primary' : ''}`}>
                        {plan.name}
                      </h3>
                      <div className="d-flex justify-content-center align-items-baseline mb-2">
                        <span className={`display-5 fw-bold ${plan.featured ? 'text-primary' : ''}`}>
                          ${plan.price}
                        </span>
                        {typeof plan.price === 'number' && (
                          <span className="text-muted ms-2">/month</span>
                        )}
                      </div>
                      <p className="text-muted mb-0">{plan.description}</p>
                    </div>
                    
                    <ul className="list-unstyled mb-4">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="mb-2 d-flex align-items-start">
                          <CheckCircleFill className={`me-2 mt-1 ${plan.featured ? 'text-primary' : 'text-success'}`} />
                          <span className={plan.featured ? 'text-dark' : 'text-muted'}>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button 
                      as={Link} 
                      to={plan.featured ? '/register' : '/contact'}
                      variant={plan.featured ? 'primary' : 'outline-primary'}
                      className="w-100"
                    >
                      {plan.cta}
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-primary text-white">
        <Container className="py-5 text-center">
          <h2 className="display-5 fw-bold mb-4">Ready to get started?</h2>
          <p className="lead mb-5">
            Join the growing network of emergency response teams using Respondr UK to save lives and manage resources effectively.
          </p>
          <div className="d-flex gap-3 justify-content-center">
            <Button as={Link} to="/register" variant="light" size="lg" className="px-4">
              Register Now
            </Button>
            <Button as={Link} to="/contact" variant="outline-light" size="lg" className="px-4">
              Contact Sales
            </Button>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-5 mt-auto">
        <Container>
          <Row>
            <Col md={4} className="mb-4 mb-md-0">
              <h5>Respondr UK</h5>
              <p className="text-muted">
                Empowering emergency response teams with cutting-edge incident management solutions.
              </p>
            </Col>
            <Col md={2} className="mb-4 mb-md-0">
              <h5>Product</h5>
              <ul className="list-unstyled">
                <li><Link to="/features" className="text-muted text-decoration-none">Features</Link></li>
                <li><Link to="/pricing" className="text-muted text-decoration-none">Pricing</Link></li>
                <li><Link to="/integrations" className="text-muted text-decoration-none">Integrations</Link></li>
              </ul>
            </Col>
            <Col md={2} className="mb-4 mb-md-0">
              <h5>Company</h5>
              <ul className="list-unstyled">
                <li><Link to="/about" className="text-muted text-decoration-none">About Us</Link></li>
                <li><Link to="/careers" className="text-muted text-decoration-none">Careers</Link></li>
                <li><Link to="/blog" className="text-muted text-decoration-none">Blog</Link></li>
              </ul>
            </Col>
            <Col md={2}>
              <h5>Support</h5>
              <ul className="list-unstyled">
                <li><Link to="/help" className="text-muted text-decoration-none">Help Center</Link></li>
                <li><Link to="/contact" className="text-muted text-decoration-none">Contact Us</Link></li>
                <li><Link to="/privacy" className="text-muted text-decoration-none">Privacy Policy</Link></li>
              </ul>
            </Col>
          </Row>
          <hr className="my-4" />
          <div className="text-center text-muted">
            <small>© {new Date().getFullYear()} Respondr UK. All rights reserved.</small>
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default HomePage;
