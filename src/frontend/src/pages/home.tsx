import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Navbar, Nav, Badge } from 'react-bootstrap';
import { 
  BellFill, 
  PeopleFill, 
  GraphUp, 
  GeoAltFill, 
  ShieldLockFill, 
  ClockFill,
  CheckCircleFill,
  Speedometer2,
  ShieldCheck,
  ChatDotsFill,
  CalendarCheckFill,
  Headset,
  EnvelopeFill,
  TelephoneFill,
  GeoAlt,
  Facebook,
  Twitter,
  Linkedin,
  Github
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
              <Badge bg="light" text="primary" className="mb-3 d-inline-flex align-items-center">
                <Speedometer2 className="me-1" /> VERSION 2.0
              </Badge>
              <h1 className="display-4 fw-bold mb-4">
                Incident Management <span className="text-warning">Made Simple</span>
              </h1>
              <p className="lead mb-4">
                Streamline your emergency response operations with our comprehensive incident management platform.
                From real-time alerts to resource tracking, we've got you covered.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <Button as={Link} to="/register" variant="light" size="lg" className="px-4 d-flex align-items-center">
                  <ShieldCheck className="me-2" /> Get Started
                </Button>
                <Button as={Link} to="/about" variant="outline-light" size="lg" className="px-4 d-flex align-items-center">
                  <ChatDotsFill className="me-2" /> Learn More
                </Button>
              </div>
              
              <div className="mt-4 d-flex flex-wrap gap-3">
                <div className="d-flex align-items-center text-white-50">
                  <CheckCircleFill className="text-success me-2" /> 24/7 Support
                </div>
                <div className="d-flex align-items-center text-white-50">
                  <CheckCircleFill className="text-success me-2" /> 99.9% Uptime
                </div>
                <div className="d-flex align-items-center text-white-50">
                  <CheckCircleFill className="text-success me-2" /> Secure & Compliant
                </div>
              </div>
            </Col>
            <Col lg={6} className="text-center">
              <div className="p-4 p-lg-5 bg-white bg-opacity-10 rounded-3 shadow-lg">
                <div className="d-flex justify-content-center mb-4">
                  <div className="bg-white bg-opacity-20 p-4 rounded-circle d-inline-flex">
                    <ShieldCheck size={60} className="text-white" />
                  </div>
                </div>
                <h3 className="h4 mb-3">Secure Incident Management</h3>
                <p className="text-white-75 mb-4">
                  Our platform provides enterprise-grade security and compliance for all your emergency response needs.
                </p>
                <div className="d-flex justify-content-center gap-3">
                  <div className="text-center">
                    <div className="bg-white bg-opacity-20 p-3 rounded-circle d-inline-flex mb-2">
                      <BellFill size={24} />
                    </div>
                    <div className="small">Alerts</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-white bg-opacity-20 p-3 rounded-circle d-inline-flex mb-2">
                      <PeopleFill size={24} />
                    </div>
                    <div className="small">Team</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-white bg-opacity-20 p-3 rounded-circle d-inline-flex mb-2">
                      <GraphUp size={24} />
                    </div>
                    <div className="small">Analytics</div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-5 bg-light">
        <Container className="py-5">
          <Row className="text-center mb-5">
            <Col lg={8} className="mx-auto">
              <Badge bg="primary" className="px-3 py-2 mb-3 d-inline-flex align-items-center">
                <i className="bi bi-lightning-charge-fill me-2"></i> Faster Response
              </Badge>
              <h2 className="display-5 fw-bold mb-3">
                Everything you need to manage <span className="text-primary">incidents effectively</span>
              </h2>
              <p className="lead text-muted mb-5">
                Our platform provides all the tools and features you need to coordinate emergency responses,
                track resources, and ensure optimal outcomes across your organization.
              </p>
            </Col>
          </Row>
          <Row className="g-4">
            {features.map((feature, index) => (
              <Col key={index} md={6} lg={4}>
                <div className="h-100 p-4 bg-white rounded-3 shadow-sm border-0 transition-all">
                  <div className={`d-inline-flex p-3 rounded-3 mb-4 bg-${index % 2 === 0 ? 'primary' : 'success'}-subtle`}>
                    <feature.icon className={`text-${index % 2 === 0 ? 'primary' : 'success'}`} size={24} />
                  </div>
                  <h3 className="h5 mb-3">{feature.name}</h3>
                  <p className="text-muted mb-4">{feature.description}</p>
                  <a href="#" className="text-decoration-none d-flex align-items-center">
                    Learn more <i className="bi bi-arrow-right ms-2"></i>
                  </a>
                </div>
              </Col>
            ))}
          </Row>
          
          {/* Stats */}
          <Row className="mt-5 pt-5 border-top">
            <Col md={4} className="text-center mb-4 mb-md-0">
              <h2 className="display-4 fw-bold text-primary">24/7</h2>
              <p className="text-muted mb-0">Support Available</p>
            </Col>
            <Col md={4} className="text-center mb-4 mb-md-0">
              <h2 className="display-4 fw-bold text-primary">99.9%</h2>
              <p className="text-muted mb-0">Uptime Guarantee</p>
            </Col>
            <Col md={4} className="text-center">
              <h2 className="display-4 fw-bold text-primary">1M+</h2>
              <p className="text-muted mb-0">Incidents Managed</p>
            </Col>
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
      <section className="py-5 bg-dark text-white">
        <Container className="py-5">
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <div className="bg-primary bg-opacity-10 p-4 p-lg-5 rounded-4">
                <div className="icon-lg bg-primary bg-opacity-25 text-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-4">
                  <Headset size={32} />
                </div>
                <h2 className="display-5 fw-bold mb-4">Need help getting started?</h2>
                <p className="lead mb-5">
                  Our team of experts is here to help you implement Respondr UK and optimize your emergency response workflow.
                </p>
                <div className="d-flex flex-column flex-md-row gap-3 justify-content-center">
                  <Button as={Link} to="/register" variant="primary" size="lg" className="px-4 d-flex align-items-center justify-content-center">
                    <CalendarCheckFill className="me-2" /> Schedule a Demo
                  </Button>
                  <div className="d-flex align-items-center justify-content-center mt-3 mt-md-0">
                    <div className="d-flex align-items-center me-3">
                      <div className="bg-white bg-opacity-10 p-2 rounded-circle me-2">
                        <EnvelopeFill size={16} />
                      </div>
                      <a href="mailto:support@respondruk.com" className="text-white text-decoration-none">support@respondruk.com</a>
                    </div>
                    <div className="vr text-white-50 d-none d-md-block"></div>
                    <div className="d-flex align-items-center ms-3">
                      <div className="bg-white bg-opacity-10 p-2 rounded-circle me-2">
                        <TelephoneFill size={16} />
                      </div>
                      <a href="tel:+441234567890" className="text-white text-decoration-none">+44 1234 567890</a>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-5 mt-auto">
        <Container>
          <Row className="g-4">
            <Col lg={4} md={6}>
              <div className="d-flex align-items-center mb-3">
                <div className="bg-primary bg-opacity-10 p-2 rounded me-2">
                  <ShieldCheck size={24} className="text-primary" />
                </div>
                <h4 className="mb-0">Respondr UK</h4>
              </div>
              <p className="text-muted mb-4">
                Empowering emergency response teams with cutting-edge incident management solutions.
              </p>
              <div className="d-flex gap-3 mb-4">
                <a href="#" className="text-white text-decoration-none">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-white text-decoration-none">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-white text-decoration-none">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-white text-decoration-none">
                  <Github size={20} />
                </a>
              </div>
            </Col>
            <Col md={2}>
              <h5 className="h6 text-uppercase text-muted mb-3">Product</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link to="/features" className="text-muted text-decoration-none d-flex align-items-center">
                    <span className="bullet bg-primary rounded-circle me-2"></span> Features
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/pricing" className="text-muted text-decoration-none d-flex align-items-center">
                    <span className="bullet bg-primary rounded-circle me-2"></span> Pricing
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/integrations" className="text-muted text-decoration-none d-flex align-items-center">
                    <span className="bullet bg-primary rounded-circle me-2"></span> Integrations
                  </Link>
                </li>
              </ul>
            </Col>
            <Col md={2}>
              <h5 className="h6 text-uppercase text-muted mb-3">Company</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link to="/about" className="text-muted text-decoration-none d-flex align-items-center">
                    <span className="bullet bg-primary rounded-circle me-2"></span> About Us
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/careers" className="text-muted text-decoration-none d-flex align-items-center">
                    <span className="bullet bg-primary rounded-circle me-2"></span> Careers
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/blog" className="text-muted text-decoration-none d-flex align-items-center">
                    <span className="bullet bg-primary rounded-circle me-2"></span> Blog
                  </Link>
                </li>
              </ul>
            </Col>
            <Col md={2}>
              <h5 className="h6 text-uppercase text-muted mb-3">Support</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link to="/help" className="text-muted text-decoration-none d-flex align-items-center">
                    <span className="bullet bg-primary rounded-circle me-2"></span> Help Center
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/contact" className="text-muted text-decoration-none d-flex align-items-center">
                    <span className="bullet bg-primary rounded-circle me-2"></span> Contact Us
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/privacy" className="text-muted text-decoration-none d-flex align-items-center">
                    <span className="bullet bg-primary rounded-circle me-2"></span> Privacy Policy
                  </Link>
                </li>
              </ul>
            </Col>
          </Row>
          <hr className="my-4 border-secondary" />
          <div className="d-md-flex justify-content-between align-items-center">
            <div className="text-center text-md-start mb-3 mb-md-0">
              <small className="text-muted">© {new Date().getFullYear()} Respondr UK. All rights reserved.</small>
            </div>
            <div className="d-flex justify-content-center">
              <Link to="/terms" className="text-muted text-decoration-none me-3 small">Terms of Service</Link>
              <Link to="/privacy" className="text-muted text-decoration-none small">Privacy Policy</Link>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default HomePage;
