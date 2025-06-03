import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { IncidentDetail } from '../../components/incidents/IncidentDetail';
import { Incident, IncidentStatus, Comment } from '../../types/incident';

// Mock data for the incident
const mockIncident: Incident = {
  id: 'INC-001',
  title: 'Database Connection Issues',
  description: 'Users are experiencing intermittent database connection errors when trying to access their dashboard. The issue seems to be related to the connection pool exhaustion during peak hours.',
  status: 'investigating',
  priority: 'high',
  impact: 'high',
  assignedTo: 'John Doe',
  reporter: 'Jane Smith',
  createdAt: '2023-06-15T10:30:00Z',
  updatedAt: '2023-06-15T14:45:00Z',
  dueDate: '2023-06-20T23:59:59Z',
  components: ['API', 'Database', 'Backend'],
  tags: ['database', 'performance', 'critical'],
  comments: [
    {
      id: '1',
      author: 'John Doe',
      avatar: 'https://ui-avatars.com/api/?name=John+Doe',
      content: 'I\'ve identified the issue with the connection pool. The max connections parameter is set too low for our current user load.',
      createdAt: '2023-06-15T11:15:00Z',
      isUpdate: true
    },
    {
      id: '2',
      author: 'Jane Smith',
      avatar: 'https://ui-avatars.com/api/?name=Jane+Smith',
      content: 'Thanks for the update, John. Let me know if you need any help with the fix.',
      createdAt: '2023-06-15T11:30:00Z',
      isUpdate: false
    }
  ],
  activityLogs: [
    {
      id: '1',
      action: 'Incident created',
      user: 'Jane Smith',
      timestamp: '2023-06-15T10:30:00Z'
    },
    {
      id: '2',
      action: 'Status changed',
      user: 'John Doe',
      timestamp: '2023-06-15T10:45:00Z',
      details: 'Status changed from reported to investigating'
    },
    {
      id: '3',
      action: 'Assigned to',
      user: 'Jane Smith',
      timestamp: '2023-06-15T10:46:00Z',
      details: 'Assigned to John Doe'
    },
    {
      id: '4',
      action: 'Priority updated',
      user: 'John Doe',
      timestamp: '2023-06-15T11:00:00Z',
      details: 'Priority changed from medium to high'
    }
  ]
};

export const IncidentDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [incident, setIncident] = useState<Incident | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate API call to fetch incident by ID
    const fetchIncident = async () => {
      try {
        setLoading(true);
        // In a real app, you would make an API call here
        // const response = await fetch(`/api/incidents/${id}`);
        // const data = await response.json();
        
        // For demo purposes, we'll use the mock data
        await new Promise(resolve => setTimeout(resolve, 800)); // Simulate network delay
        
        // In a real app, you would handle 404 if incident not found
        setIncident(mockIncident);
        setError(null);
      } catch (err) {
        console.error('Error fetching incident:', err);
        setError('Failed to load incident. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchIncident();
  }, [id]);

  const handleStatusChange = async (newStatus: IncidentStatus) => {
    if (!incident) return;
    
    try {
      // In a real app, you would make an API call to update the status
      // await fetch(`/api/incidents/${id}/status`, {
      //   method: 'PUT',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ status: newStatus })
      // });
      
      // For demo purposes, we'll update the local state
      const updatedIncident = {
        ...incident,
        status: newStatus,
        updatedAt: new Date().toISOString(),
        activityLogs: [
          ...incident.activityLogs,
          {
            id: `log-${Date.now()}`,
            action: 'Status changed',
            user: 'Current User', // In a real app, this would be the logged-in user
            timestamp: new Date().toISOString(),
            details: `Status changed from ${incident.status} to ${newStatus}`
          }
        ]
      };
      
      setIncident(updatedIncident);
    } catch (err) {
      console.error('Error updating status:', err);
      // In a real app, you would show an error message to the user
    }
  };

  const handleCommentSubmit = async (content: string) => {
    if (!incident) return;
    
    try {
      // In a real app, you would make an API call to add a comment
      // const response = await fetch(`/api/incidents/${id}/comments`, {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ content })
      // });
      // const newComment = await response.json();
      
      // For demo purposes, we'll create a mock comment
      const newComment: Comment = {
        id: `comment-${Date.now()}`,
        author: 'Current User', // In a real app, this would be the logged-in user
        avatar: 'https://ui-avatars.com/api/?name=Current+User',
        content,
        createdAt: new Date().toISOString(),
        isUpdate: false
      };
      
      const updatedIncident = {
        ...incident,
        comments: [...incident.comments, newComment],
        updatedAt: new Date().toISOString(),
        activityLogs: [
          ...incident.activityLogs,
          {
            id: `log-${Date.now()}`,
            action: 'Comment added',
            user: 'Current User',
            timestamp: new Date().toISOString()
          }
        ]
      };
      
      setIncident(updatedIncident);
    } catch (err) {
      console.error('Error adding comment:', err);
      // In a real app, you would show an error message to the user
    }
  };

  const handleEdit = () => {
    // In a real app, you would navigate to an edit page or open an edit modal
    navigate(`/incidents/${id}/edit`);
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this incident? This action cannot be undone.')) {
      try {
        // In a real app, you would make an API call to delete the incident
        // await fetch(`/api/incidents/${id}`, { method: 'DELETE' });
        
        // For demo purposes, we'll just navigate back to the incidents list
        navigate('/incidents');
      } catch (err) {
        console.error('Error deleting incident:', err);
        // In a real app, you would show an error message to the user
      }
    }
  };

  const handleBack = () => {
    navigate('/incidents');
  };

  return (
    <Container className="py-4">
      <h2 className="mb-4">Incident Details</h2>
      
      <IncidentDetail
        incident={incident}
        loading={loading}
        error={error}
        onStatusChange={handleStatusChange}
        onCommentSubmit={handleCommentSubmit}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onBack={handleBack}
      />
    </Container>
  );
};

export default IncidentDetailPage;
