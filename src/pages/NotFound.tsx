import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-32 text-center">
      <h1 className="font-heading text-6xl font-bold text-primary">404</h1>
      <p className="mt-4 text-xl text-muted-foreground">The page you are looking for does not exist.</p>
      <div className="mt-8">
        <Button variant="default" asChild>
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
}
