export type User = {
  id: string;
  username: string;
  email: string;
  roles: string[];
};

export type PullRequest = {
  id: string;
  title: string;
  description: string;
  requesterId: string;
  requester?: User;
  approvers: Array<{
    id: string;
    status: 'pending' | 'approved' | 'rejected';
    comments?: string;
  }>;
  status: 'open' | 'approved' | 'rejected';
  createdAt: string;
  updatedAt: string;
};

export type Comment = {
  id: string;
  pullRequestId: string;
  userId: string;
  content: string;
  createdAt: string;
};