import { useState } from "react";
import { PullRequest } from "@/types";
import { PullRequestList } from "@/components/PullRequestList";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

// Temporary mock data - replace with actual API calls
const mockPRs: PullRequest[] = [
  {
    id: "1",
    title: "Add new feature XYZ",
    description: "This PR implements the new XYZ feature with...",
    requesterId: "user1",
    requester: {
      id: "user1",
      username: "john_doe",
      email: "john@example.com",
      roles: ["developer"],
    },
    approvers: [],
    status: "open",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  // Add more mock PRs as needed
];

export default function Index() {
  const [pullRequests] = useState<PullRequest[]>(mockPRs);

  const handleSelectPR = (pr: PullRequest) => {
    console.log("Selected PR:", pr);
    // TODO: Implement navigation to PR detail view
  };

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Pull Requests</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> New Pull Request
        </Button>
      </div>
      
      <PullRequestList 
        pullRequests={pullRequests} 
        onSelectPR={handleSelectPR} 
      />
    </div>
  );
}