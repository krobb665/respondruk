export type IncidentStatus = 'investigating' | 'identified' | 'monitoring' | 'resolved';
export type PriorityLevel = 'low' | 'medium' | 'high' | 'critical';

export interface Comment {
  id: string;
  author: string;
  avatar: string;
  content: string;
  createdAt: string;
  isUpdate: boolean;
}

export interface ActivityLog {
  id: string;
  action: string;
  user: string;
  timestamp: string;
  details?: string;
}

export interface Incident {
  id: string;
  title: string;
  description: string;
  status: IncidentStatus;
  priority: PriorityLevel;
  impact: PriorityLevel;
  assignedTo: string;
  reporter: string;
  createdAt: string;
  updatedAt: string;
  dueDate?: string;
  components: string[];
  tags: string[];
  comments: Comment[];
  activityLogs: ActivityLog[];
}
