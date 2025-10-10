import { Helmet } from "react-helmet";
import Contact from "../Contact";

export default function Page() {
  return (
    <>
      <Helmet>
        <title>Contact Us - Red Rock Cleaning</title>
        <meta name="description" content="Get in touch with Red Rock Cleaning for professional cleaning services. Contact us today for a free quote." />
      </Helmet>
      <Contact />
    </>
  );
}
