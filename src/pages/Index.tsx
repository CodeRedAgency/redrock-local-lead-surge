import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const Index = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirect to South Florida as default
    navigate("/home-south-florida");
  }, [navigate]);
  
  return (
    <>
      <Helmet>
        <title>Red Rock Cleaning - Premium Multi-Location Cleaning Services</title>
        <meta name="description" content="Professional cleaning services across South Florida, Las Vegas, Hawaii, Columbus Ohio, and Dallas. Book your premium cleaning service today." />
      </Helmet>
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary">Redirecting...</h1>
        </div>
      </div>
    </>
  );
};

export default Index;
