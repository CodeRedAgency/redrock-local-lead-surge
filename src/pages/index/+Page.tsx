import { Helmet } from "react-helmet";
import Index from "../Index";

export default function Page() {
  return (
    <>
      <Helmet>
        <title>Red Rock Cleaning - Premium Multi-Location Cleaning Services</title>
        <meta name="description" content="Professional cleaning services across South Florida, Las Vegas, Hawaii, Columbus Ohio, and Dallas. Residential, commercial, and vacation rental cleaning." />
      </Helmet>
      <Index />
    </>
  );
}
