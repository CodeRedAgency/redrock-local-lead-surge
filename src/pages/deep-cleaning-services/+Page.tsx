import { Helmet } from "react-helmet";
import DeepCleaning from "../DeepCleaning";

export default function Page() {
  return (
    <>
      <Helmet>
        <title>Deep Cleaning Services - Red Rock Cleaning</title>
        <meta name="description" content="Expert deep cleaning services. Thorough top-to-bottom cleaning for homes and businesses. Transform your space today!" />
      </Helmet>
      <DeepCleaning />
    </>
  );
}
