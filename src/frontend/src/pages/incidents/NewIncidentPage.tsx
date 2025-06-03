import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Container, 
  Row, 
  Col, 
  Card, 
  Form, 
  Button, 
  Alert,
  Spinner
} from 'react-bootstrap';
import { ArrowLeft, Save } from 'react-feather';

const NewIncidentPage: React.FC = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    status: 'investigating',
    priority: 'medium',
    assignedTo: '',
    impact: 'medium',
    components: [] as string[],
    dueDate: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      // Replace with actual API call
      console.log('Submitting incident:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Redirect to incidents list on success
      navigate('/incidents');
    } catch (err) {
      setError('Failed to create incident. Please try again.');
      console.error('Error creating incident:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container fluid className="py-4">
      <Button 
        variant="link" 
        className="mb-3 p-0 d-flex align-items-center"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft size={18} className="me-2" />
        Back to Incidents
      </Button>
      
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h3 mb-0">Create New Incident</h1>
      </div>

      <Row>
        <Col lg={8}>
          <Card className="mb-4">
            <Card.Body>
              {error && <Alert variant="danger">{error}</Alert>}
              
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Title <span className="text-danger">*</span></Form.Label>
                  <Form.Control
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    placeholder="Briefly describe the incident"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Description <span className="text-danger">*</span></Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    placeholder="Provide detailed information about the incident"
                  />
                </Form.Group>

                <Row className="g-3">
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Status</Form.Label>
                      <Form.Select
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                      >
                        <option value="investigating">Investigating</option>
                        <option value="identified">Identified</option>
                        <option value="monitoring">Monitoring</option>
                        <option value="resolved">Resolved</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Priority</Form.Label>
                      <Form.Select
                        name="priority"
                        value={formData.priority}
                        onChange={handleChange}
                      >
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                        <option value="critical">Critical</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="g-3">
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Assigned To</Form.Label>
                      <Form.Select
                        name="assignedTo"
                        value={formData.assignedTo}
                        onChange={handleChange}
                      >
                        <option value="">Unassigned</option>
                        <option value="John Doe">John Doe</option>
                        <option value="Jane Smith">Jane Smith</option>
                        <option value="Mike Johnson">Mike Johnson</option>
                        <option value="Sarah Williams">Sarah Williams</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Impact</Form.Label>
                      <Form.Select
                        name="impact"
                        value={formData.impact}
                        onChange={handleChange}
                      >
                        <option value="low">Low (Minimal Impact)</option>
                        <option value="medium">Medium (Partial Outage)</option>
                        <option value="high">High (Major Outage)</option>
                        <option value="critical">Critical (Service Down)</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-4">
                  <Form.Label>Due Date</Form.Label>
                  <Form.Control
                    type="datetime-local"
                    name="dueDate"
                    value={formData.dueDate}
                    onChange={handleChange}
                  />
                </Form.Group>

                <div className="d-flex justify-content-end">
                  <Button 
                    variant="outline-secondary" 
                    className="me-2"
                    onClick={() => navigate('/incidents')}
                    disabled={isSubmitting}
                  >
                    Cancel
                  </Button>
                  <Button 
                    variant="primary" 
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Spinner
                          as="span"
                          animation="border"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                          className="me-2"
                        />
                        Creating...
                      </>
                    ) : (
                      <>
                        <Save size={18} className="me-2" />
                        Create Incident
                      </>
                    )}
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4}>
          <Card className="mb-4">
            <Card.Header>
              <h6 className="mb-0">Incident Details</h6>
            </Card.Header>
            <Card.Body>
              <p className="text-muted small mb-0">
                Provide clear and concise information about the incident. Include any error messages, 
                timestamps, and steps to reproduce if applicable.
              </p>
            </Card.Body>
          </Card>
          
          <Card>
            <Card.Header>
              <h6 className="mb-0">Quick Actions</h6>
            </Card.Header>
            <Card.Body>
              <Button variant="outline-secondary" className="w-100 mb-2">
                Attach Files
              </Button>
              <Button variant="outline-secondary" className="w-100 mb-2">
                Link Related Incidents
              </Button>
              <Button variant="outline-secondary" className="w-100">
                Add to Report
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default NewIncidentPage;
