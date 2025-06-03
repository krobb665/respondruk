import React from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { 
  ClockFill, 
  ExclamationTriangleFill, 
  CheckCircleFill,
  PeopleFill,
  GraphUp,
  CalendarEventFill,
  PlusCircleFill
} from 'react-bootstrap-icons';

const DashboardPage: React.FC = () => {
  // These would normally come from your API/state
  const stats = [
    { title: 'Active Incidents', value: '12', icon: <ClockFill className="text-warning" size={24} />, trend: '2 new today' },
    { title: 'High Priority', value: '5', icon: <ExclamationTriangleFill className="text-danger" size={24} />, trend: '1 new' },
    { title: 'Resolved Today', value: '8', icon: <CheckCircleFill className="text-success" size={24} />, trend: '+2 from yesterday' },
    { title: 'Team Members', value: '24', icon: <PeopleFill className="text-primary" size={24} />, trend: 'All active' },
  ];

  const recentIncidents = [
    { id: 1, title: 'Server Outage', status: 'investigating', priority: 'high', time: '10 min ago' },
    { id: 2, title: 'Network Latency', status: 'monitoring', priority: 'medium', time: '2 hours ago' },
    { id: 3, title: 'Database Backup', status: 'resolved', priority: 'low', time: '5 hours ago' },
  ];

  const upcomingTasks = [
    { id: 1, title: 'Team Meeting', time: 'Today, 2:00 PM', priority: 'high' },
    { id: 2, title: 'System Update', time: 'Tomorrow, 10:00 PM', priority: 'medium' },
  ];

  return (
    <Container fluid className="py-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Dashboard</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <Button variant="outline-secondary" className="me-2">
            <CalendarEventFill className="me-2" />
            Calendar
          </Button>
          <Button variant="primary">
            <PlusCircleFill className="me-2" />
            New Incident
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <Row className="mb-4">
        {stats.map((stat, index) => (
          <Col key={index} xs={12} sm={6} lg={3} className="mb-4">
            <Card className="h-100">
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="bg-light p-2 rounded">
                    {stat.icon}
                  </div>
                  <div className="text-end">
                    <h3 className="mb-0">{stat.value}</h3>
                    <small className="text-muted">{stat.trend}</small>
                  </div>
                </div>
                <h6 className="text-muted mb-0">{stat.title}</h6>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Row>
        {/* Incidents */}
        <Col lg={8} className="mb-4">
          <Card className="h-100">
            <Card.Header>
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="mb-0">Recent Incidents</h5>
                <Button variant="link" size="sm">View All</Button>
              </div>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Incident</th>
                      <th>Status</th>
                      <th>Priority</th>
                      <th>Time</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentIncidents.map((incident) => (
                      <tr key={incident.id}>
                        <td>{incident.title}</td>
                        <td>
                          <Badge bg={incident.status === 'resolved' ? 'success' : 'warning'} className="text-capitalize">
                            {incident.status}
                          </Badge>
                        </td>
                        <td>
                          <Badge 
                            bg={
                              incident.priority === 'high' ? 'danger' : 
                              incident.priority === 'medium' ? 'warning' : 'secondary'
                            }
                            className="text-capitalize"
                          >
                            {incident.priority}
                          </Badge>
                        </td>
                        <td>{incident.time}</td>
                        <td className="text-end">
                          <Button variant="link" size="sm">Details</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Tasks & Activity */}
        <Col lg={4}>
          <Card className="mb-4">
            <Card.Header>
              <h5 className="mb-0">Upcoming Tasks</h5>
            </Card.Header>
            <Card.Body>
              {upcomingTasks.map((task) => (
                <div key={task.id} className="d-flex justify-content-between align-items-center mb-3">
                  <div>
                    <h6 className="mb-0">{task.title}</h6>
                    <small className="text-muted">{task.time}</small>
                  </div>
                  <Badge bg={task.priority === 'high' ? 'danger' : 'warning'}>
                    {task.priority}
                  </Badge>
                </div>
              ))}
              <Button variant="outline-primary" size="sm" className="w-100 mt-2">
                Add New Task
              </Button>
            </Card.Body>
          </Card>

          <Card>
            <Card.Header>
              <h5 className="mb-0">System Status</h5>
            </Card.Header>
            <Card.Body>
              <div className="d-flex align-items-center mb-3">
                <div className="bg-success bg-opacity-10 p-2 rounded me-3">
                  <CheckCircleFill className="text-success" />
                </div>
                <div>
                  <h6 className="mb-0">All Systems Operational</h6>
                  <small className="text-muted">Last checked 5 minutes ago</small>
                </div>
              </div>
              <div className="progress mb-3" style={{ height: '6px' }}>
                <div 
                  className="progress-bar bg-success" 
                  role="progressbar" 
                  style={{ width: '98%' }}
                  aria-valuenow={98} 
                  aria-valuemin={0} 
                  aria-valuemax={100}
                ></div>
              </div>
              <Button variant="outline-secondary" size="sm" className="w-100">
                View Status Page
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardPage;
