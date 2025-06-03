import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { 
  Container, 
  Row, 
  Col, 
  Card, 
  Table, 
  Button, 
  Form, 
  InputGroup,
  Badge,
  Dropdown
} from 'react-bootstrap';
import { 
  Search, 
  Plus, 
  MoreVertical, 
  Edit2 as Edit,
  Trash2
} from 'react-feather';

const IncidentsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  
  // Mock data - replace with API call
  const incidents = [
    {
      id: 'INC-001',
      title: 'Server Outage in US-East',
      status: 'investigating',
      priority: 'high',
      assignedTo: 'John Doe',
      createdAt: '2023-06-01T10:30:00Z'
    },
    {
      id: 'INC-002',
      title: 'Database Connection Issues',
      status: 'identified',
      priority: 'medium',
      assignedTo: 'Jane Smith',
      createdAt: '2023-06-01T09:15:00Z'
    },
    {
      id: 'INC-003',
      title: 'API Latency Spikes',
      status: 'monitoring',
      priority: 'low',
      assignedTo: 'Mike Johnson',
      createdAt: '2023-05-31T14:20:00Z'
    },
    {
      id: 'INC-004',
      title: 'Login Authentication Failure',
      status: 'resolved',
      priority: 'critical',
      assignedTo: 'Sarah Williams',
      createdAt: '2023-05-30T16:10:00Z'
    }
  ];

  const filteredIncidents = incidents.filter(incident => {
    const matchesSearch = incident.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        incident.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || incident.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'investigating':
        return <Badge bg="warning" className="text-capitalize">{status}</Badge>;
      case 'identified':
        return <Badge bg="info" className="text-capitalize">{status}</Badge>;
      case 'monitoring':
        return <Badge bg="primary" className="text-capitalize">{status}</Badge>;
      case 'resolved':
        return <Badge bg="success" className="text-capitalize">{status}</Badge>;
      default:
        return <Badge bg="secondary" className="text-capitalize">{status}</Badge>;
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'critical':
        return <Badge bg="danger">Critical</Badge>;
      case 'high':
        return <Badge bg="danger">High</Badge>;
      case 'medium':
        return <Badge bg="warning" text="dark">Medium</Badge>;
      case 'low':
        return <Badge bg="secondary">Low</Badge>;
      default:
        return <Badge bg="secondary">{priority}</Badge>;
    }
  };

  return (
    <Container fluid className="py-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
        <h1 className="h2">Incident Management</h1>
        <Link to="/app/incidents/new">
          <Button variant="primary">
            <Plus size={16} className="me-2" />
            New Incident
          </Button>
        </Link>
      </div>

      <Card className="mb-4">
        <Card.Header className="bg-white">
          <Row className="align-items-center">
            <Col md={6} className="mb-3 mb-md-0">
              <h5 className="mb-0">All Incidents</h5>
            </Col>
            <Col md={6}>
              <div className="d-flex">
                <Form.Select 
                  className="me-2" 
                  style={{ width: '150px' }}
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  <option value="all">All Status</option>
                  <option value="investigating">Investigating</option>
                  <option value="identified">Identified</option>
                  <option value="monitoring">Monitoring</option>
                  <option value="resolved">Resolved</option>
                </Form.Select>
                <InputGroup>
                  <Form.Control
                    placeholder="Search incidents..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <Button variant="outline-secondary">
                    <Search size={16} />
                  </Button>
                </InputGroup>
              </div>
            </Col>
          </Row>
        </Card.Header>
        <Card.Body className="p-0">
          <div className="table-responsive">
            <Table hover className="mb-0">
              <thead className="table-light">
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Status</th>
                  <th>Priority</th>
                  <th>Assigned To</th>
                  <th>Created</th>
                  <th className="text-end">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredIncidents.map((incident) => (
                  <tr key={incident.id}>
                    <td>
                      <Link to={`/incidents/${incident.id}`} className="fw-bold">
                        {incident.id}
                      </Link>
                    </td>
                    <td>
                      <Link to={`/app/incidents/${incident.id}`} className="text-decoration-none text-dark">
                        {incident.title}
                      </Link>
                    </td>
                    <td>{getStatusBadge(incident.status)}</td>
                    <td>{getPriorityBadge(incident.priority)}</td>
                    <td>{incident.assignedTo}</td>
                    <td>{new Date(incident.createdAt).toLocaleDateString()}</td>
                    <td className="text-end">
                      <Dropdown>
                        <Dropdown.Toggle variant="link" className="text-dark p-0">
                          <MoreVertical size={18} />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <LinkContainer to={`/app/incidents/${incident.id}/edit`}>
                            <Dropdown.Item>
                              <Edit size={16} className="me-2" /> Edit
                            </Dropdown.Item>
                          </LinkContainer>
                          <Dropdown.Item className="text-danger">
                            <Trash2 size={16} className="me-2" /> Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                ))}
                {filteredIncidents.length === 0 && (
                  <tr>
                    <td colSpan={7} className="text-center py-4">
                      No incidents found matching your criteria.
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
          </div>
        </Card.Body>
        {/* Add pagination here if needed */}
      </Card>
    </Container>
  );
};

export default IncidentsPage;
