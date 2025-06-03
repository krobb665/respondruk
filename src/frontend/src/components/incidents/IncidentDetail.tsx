import React from 'react';
import { Card, Badge, Button, Form, Row, Col, Tab, Nav, ListGroup } from 'react-bootstrap';
import { Clock, AlertCircle, User, MessageSquare, Activity, Edit2, Trash2, MoreVertical, ArrowLeft } from 'react-feather';
import { Incident, IncidentStatus, PriorityLevel, Comment, ActivityLog } from '../../types/incident';

interface IncidentDetailProps {
  incident: Incident | null;
  loading: boolean;
  error: string | null;
  onStatusChange: (status: IncidentStatus) => void;
  onCommentSubmit: (content: string) => void;
  onEdit: () => void;
  onDelete: () => void;
  onBack: () => void;
}

const statusVariant = (status: IncidentStatus): string => {
  switch (status) {
    case 'investigating': return 'warning';
    case 'identified': return 'info';
    case 'monitoring': return 'primary';
    case 'resolved': return 'success';
    default: return 'secondary';
  }
};

const priorityVariant = (priority: PriorityLevel): string => {
  switch (priority) {
    case 'low': return 'info';
    case 'medium': return 'primary';
    case 'high': return 'warning';
    case 'critical': return 'danger';
    default: return 'secondary';
  }
};

export const IncidentDetail: React.FC<IncidentDetailProps> = ({
  incident,
  loading,
  error,
  onStatusChange,
  onCommentSubmit,
  onEdit,
  onDelete,
  onBack
}) => {
  const [comment, setComment] = React.useState('');
  const [activeTab, setActiveTab] = React.useState('details');

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim()) {
      onCommentSubmit(comment);
      setComment('');
    }
  };

  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-2">Loading incident details...</p>
      </div>
    );
  }


  if (error) {
    return (
      <div className="alert alert-danger" role="alert">
        <AlertCircle className="me-2" />
        {error}
      </div>
    );
  }


  if (!incident) {
    return (
      <div className="alert alert-warning" role="alert">
        <AlertCircle className="me-2" />
        Incident not found
      </div>
    );
  }

  return (
    <div className="incident-detail">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <Button variant="outline-secondary" onClick={onBack} className="d-flex align-items-center">
          <ArrowLeft size={18} className="me-1" /> Back to Incidents
        </Button>
        <div className="d-flex">
          <Button variant="outline-primary" className="me-2" onClick={onEdit}>
            <Edit2 size={16} className="me-1" /> Edit
          </Button>
          <Button variant="outline-danger" onClick={onDelete}>
            <Trash2 size={16} className="me-1" /> Delete
          </Button>
        </div>
      </div>

      <Card className="mb-4">
        <Card.Header className="bg-light d-flex justify-content-between align-items-center">
          <div>
            <h5 className="mb-0">{incident.title}</h5>
            <div className="text-muted small mt-1">
              <span className="me-3">#{incident.id}</span>
              <span className="me-3">
                <Clock size={14} className="me-1" />
                Created {new Date(incident.createdAt).toLocaleDateString()}
              </span>
              <span>
                <User size={14} className="me-1" />
                {incident.reporter}
              </span>
            </div>
          </div>
          <div className="d-flex">
            <div className="me-3">
              <span className="me-2">Status:</span>
              <Badge bg={statusVariant(incident.status)} className="text-capitalize">
                {incident.status}
              </Badge>
            </div>
            <div>
              <span className="me-2">Priority:</span>
              <Badge bg={priorityVariant(incident.priority)} className="text-capitalize">
                {incident.priority}
              </Badge>
            </div>
          </div>
        </Card.Header>
        <Card.Body>
          <Tab.Container activeKey={activeTab} onSelect={(k) => setActiveTab(k || 'details')}>
            <Nav variant="tabs" className="mb-4">
              <Nav.Item>
                <Nav.Link eventKey="details">Details</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="activity">Activity</Nav.Link>
              </Nav.Item>
            </Nav>

            <Tab.Content>
              <Tab.Pane eventKey="details">
                <Row>
                  <Col md={8}>
                    <Card className="mb-4">
                      <Card.Header>Description</Card.Header>
                      <Card.Body>
                        <Card.Text>{incident.description}</Card.Text>
                      </Card.Body>
                    </Card>

                    <Card className="mb-4">
                      <Card.Header>Comments</Card.Header>
                      <ListGroup variant="flush">
                        {incident.comments.length > 0 ? (
                          incident.comments.map((comment) => (
                            <ListGroup.Item key={comment.id}>
                              <div className="d-flex">
                                <div className="flex-shrink-0 me-3">
                                  <img
                                    src={comment.avatar}
                                    alt={comment.author}
                                    className="rounded-circle"
                                    width="40"
                                    height="40"
                                  />
                                </div>
                                <div className="flex-grow-1">
                                  <div className="d-flex justify-content-between align-items-center mb-1">
                                    <h6 className="mb-0">{comment.author}</h6>
                                    <small className="text-muted">
                                      {new Date(comment.createdAt).toLocaleString()}
                                    </small>
                                  </div>
                                  <p className="mb-0">{comment.content}</p>
                                </div>
                              </div>
                            </ListGroup.Item>
                          ))
                        ) : (
                          <ListGroup.Item className="text-muted text-center py-4">
                            No comments yet
                          </ListGroup.Item>
                        )}
                      </ListGroup>
                      <Card.Footer>
                        <Form onSubmit={handleCommentSubmit}>
                          <div className="d-flex">
                            <Form.Control
                              as="textarea"
                              rows={2}
                              placeholder="Add a comment..."
                              value={comment}
                              onChange={(e) => setComment(e.target.value)}
                              className="me-2"
                            />
                            <Button type="submit" variant="primary">
                              <MessageSquare size={16} className="me-1" /> Comment
                            </Button>
                          </div>
                        </Form>
                      </Card.Footer>
                    </Card>
                  </Col>
                  <Col md={4}>
                    <Card className="mb-4">
                      <Card.Header>Details</Card.Header>
                      <ListGroup variant="flush">
                        <ListGroup.Item>
                          <div className="d-flex justify-content-between">
                            <span>Status</span>
                            <div className="dropdown d-inline-block">
                              <Badge
                                bg={statusVariant(incident.status)}
                                className="text-capitalize dropdown-toggle cursor-pointer"
                                role="button"
                                id="statusDropdown"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                {incident.status}
                              </Badge>
                              <ul className="dropdown-menu" aria-labelledby="statusDropdown">
                                {(['investigating', 'identified', 'monitoring', 'resolved'] as IncidentStatus[]).map((status) => (
                                  <li key={status}>
                                    <button
                                      className={`dropdown-item ${incident.status === status ? 'active' : ''}`}
                                      onClick={() => onStatusChange(status)}
                                    >
                                      {status.charAt(0).toUpperCase() + status.slice(1)}
                                    </button>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <div className="d-flex justify-content-between">
                            <span>Priority</span>
                            <Badge bg={priorityVariant(incident.priority)} className="text-capitalize">
                              {incident.priority}
                            </Badge>
                          </div>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <div className="d-flex justify-content-between">
                            <span>Impact</span>
                            <Badge bg={priorityVariant(incident.impact)} className="text-capitalize">
                              {incident.impact}
                            </Badge>
                          </div>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <div className="d-flex justify-content-between">
                            <span>Assigned To</span>
                            <span>{incident.assignedTo || 'Unassigned'}</span>
                          </div>
                        </ListGroup.Item>
                        {incident.dueDate && (
                          <ListGroup.Item>
                            <div className="d-flex justify-content-between">
                              <span>Due Date</span>
                              <span>{new Date(incident.dueDate).toLocaleDateString()}</span>
                            </div>
                          </ListGroup.Item>
                        )}
                        {incident.components && incident.components.length > 0 && (
                          <ListGroup.Item>
                            <div>
                              <div className="mb-1">Components</div>
                              <div>
                                {incident.components.map((component) => (
                                  <Badge key={component} bg="light" text="dark" className="me-1 mb-1">
                                    {component}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </ListGroup.Item>
                        )}
                        {incident.tags && incident.tags.length > 0 && (
                          <ListGroup.Item>
                            <div>
                              <div className="mb-1">Tags</div>
                              <div>
                                {incident.tags.map((tag) => (
                                  <Badge key={tag} bg="secondary" className="me-1 mb-1">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </ListGroup.Item>
                        )}
                      </ListGroup>
                    </Card>
                  </Col>
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="activity">
                <Card>
                  <Card.Header>Activity Log</Card.Header>
                  <ListGroup variant="flush">
                    {incident.activityLogs.length > 0 ? (
                      incident.activityLogs.map((log) => (
                        <ListGroup.Item key={log.id}>
                          <div className="d-flex">
                            <div className="flex-shrink-0 me-3">
                              <div className="bg-light rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                                <Activity size={18} />
                              </div>
                            </div>
                            <div className="flex-grow-1">
                              <div className="d-flex justify-content-between align-items-center">
                                <h6 className="mb-0">{log.action}</h6>
                                <small className="text-muted">
                                  {new Date(log.timestamp).toLocaleString()}
                                </small>
                              </div>
                              <p className="mb-0">
                                {log.user} {log.details ? `- ${log.details}` : ''}
                              </p>
                            </div>
                          </div>
                        </ListGroup.Item>
                      ))
                    ) : (
                      <ListGroup.Item className="text-muted text-center py-4">
                        No activity yet
                      </ListGroup.Item>
                    )}
                  </ListGroup>
                </Card>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Card.Body>
      </Card>
    </div>
  );
};
