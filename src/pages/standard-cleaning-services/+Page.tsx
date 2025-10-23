import { Helmet } from "react-helmet";
import StandardCleaning from "../StandardCleaning";

export default function Page() {
  return (
    <>
      <Helmet>
        <title>Standard Cleaning Services - Red Rock Cleaning</title>
        <meta name="description" content="Professional standard cleaning services. Regular maintenance to keep your home or office consistently fresh and clean. Book today!" />
      </Helmet>
      <StandardCleaning />
    </>
  );
}
