import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import AboutUs from "../AboutUs";

export default function Page() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t("pageTitles.about", { defaultValue: "About Red Rock Cleans | Professional Cleaning Services" })}</title>
        <meta name="description" content={t("pageDescriptions.about", { defaultValue: "Learn about Red Rock Cleaning's commitment to excellence in residential and commercial cleaning services across multiple locations." })} />
      </Helmet>
      <AboutUs />
    </>
  );
}
