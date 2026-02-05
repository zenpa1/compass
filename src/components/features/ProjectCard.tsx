// A "dumb" reusable UI component wherein it handles no logic, just takes data and displays it
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Define the props (The inputs for this component)
interface ProjectCardProps {
  name: string;
  client: string;
  deadline: string;
  status: "ACTIVE" | "ARCHIVED";
}

// Destructure props ({name, client... }) to use them directly
export function ProjectCard({
  name,
  client,
  deadline,
  status,
}: ProjectCardProps) {
  return (
    <Card className="hover:shadow-md transition-all">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-semibold">{name}</CardTitle>
        <Badge variant={status === "ACTIVE" ? "default" : "secondary"}>
          {/* If status is ACTIVE, use default badge, else use secondary */}
          {status}
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="space-y-1 text-sm text-slate-600">
          <p>
            🏢 Client: <span className="font-medium">{client}</span>
          </p>
          <p>
            ⏳ Due: <span className="font-medium">{deadline}</span>
          </p>
        </div>
        <div className="mt-4 flex gap-2">
          <Button size="sm" variant="outline" className="w-full">
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
