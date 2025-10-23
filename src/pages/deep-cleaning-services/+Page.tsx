import { Helmet } from "react-helmet";
import DeepCleaning from "../DeepCleaning";

export default function Page() {
  return (
    <>
      <Helmet>
        <title>Deep Cleaning Services - Red Rock Cleaning</title>
        <meta name="description" content="Expert deep cleaning services for homes and businesses. Thorough top-to-bottom cleaning that reaches every corner. Transform your space completely today!" />
      </Helmet>
      <DeepCleaning />
    </>
  );
}
