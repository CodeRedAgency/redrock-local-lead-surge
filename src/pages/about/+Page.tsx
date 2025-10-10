import { Helmet } from "react-helmet";
import AboutUs from "../AboutUs";

export default function Page() {
  return (
    <>
      <Helmet>
        <title>About Us - Red Rock Cleaning</title>
        <meta name="description" content="Learn about Red Rock Cleaning's commitment to providing exceptional cleaning services across multiple locations." />
      </Helmet>
      <AboutUs />
    </>
  );
}
