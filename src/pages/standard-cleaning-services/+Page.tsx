import { Helmet } from "react-helmet";
import StandardCleaning from "../StandardCleaning";

export default function Page() {
  return (
    <>
      <Helmet>
        <title>Standard Cleaning Services - Red Rock Cleaning</title>
        <meta name="description" content="Professional standard cleaning services for your home. Regular maintenance cleaning to keep your space spotless." />
      </Helmet>
      <StandardCleaning />
    </>
  );
}
