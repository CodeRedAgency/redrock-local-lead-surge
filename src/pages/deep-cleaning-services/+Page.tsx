import { Helmet } from "react-helmet";
import DeepCleaning from "../DeepCleaning";

export default function Page() {
  return (
    <>
      <Helmet>
        <title>Deep Cleaning Services - Red Rock Cleaning</title>
        <meta name="description" content="Comprehensive deep cleaning services for your home. Thorough cleaning that reaches every corner and surface." />
      </Helmet>
      <DeepCleaning />
    </>
  );
}
