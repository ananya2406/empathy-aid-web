
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AlertCircle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-red-100 p-3 rounded-full">
            <AlertCircle size={48} className="text-red-500" />
          </div>
        </div>
        <h1 className="text-5xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Oops! We couldn't find the page you're looking for.</p>
        <p className="text-gray-500 mb-8">
          The page may have been moved, deleted, or maybe the URL was mistyped.
        </p>
        <Link to="/">
          <Button className="bg-relief-blue hover:bg-relief-blue-dark">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
