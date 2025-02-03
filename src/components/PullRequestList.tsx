import { PullRequest } from "@/types";
import { PullRequestCard } from "./PullRequestCard";

interface PullRequestListProps {
  pullRequests: PullRequest[];
  onSelectPR: (pr: PullRequest) => void;
}

export function PullRequestList({ pullRequests, onSelectPR }: PullRequestListProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {pullRequests.map((pr) => (
        <PullRequestCard key={pr.id} pr={pr} onClick={onSelectPR} />
      ))}
    </div>
  );
}