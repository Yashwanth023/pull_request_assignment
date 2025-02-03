import { PullRequest } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { formatDistanceToNow } from "date-fns";

interface PullRequestCardProps {
  pr: PullRequest;
  onClick: (pr: PullRequest) => void;
}

const statusColors = {
  open: "bg-blue-500",
  approved: "bg-green-500",
  rejected: "bg-red-500",
};

export function PullRequestCard({ pr, onClick }: PullRequestCardProps) {
  return (
    <Card 
      className="hover:shadow-lg transition-shadow cursor-pointer" 
      onClick={() => onClick(pr)}
    >
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-semibold">{pr.title}</CardTitle>
          <Badge className={statusColors[pr.status]}>
            {pr.status.charAt(0).toUpperCase() + pr.status.slice(1)}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
          {pr.description}
        </p>
        <div className="mt-4 flex justify-between items-center text-sm text-gray-500">
          <span>By {pr.requester?.username || "Unknown"}</span>
          <span>
            {formatDistanceToNow(new Date(pr.createdAt), { addSuffix: true })}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}