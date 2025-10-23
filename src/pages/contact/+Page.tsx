import { Helmet } from "react-helmet";
import Contact from "../Contact";

export default function Page() {
  return (
    <>
      <Helmet>
        <title>Contact Us - Red Rock Cleaning</title>
        <meta name="description" content="Contact Red Rock Cleaning. Phone numbers & addresses for all locations including South Florida, Las Vegas, Hawaii, Dallas & Columbus." />
      </Helmet>
      <Contact />
    </>
  );
}
