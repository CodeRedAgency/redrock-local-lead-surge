import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

export const Hreflang = () => {
  const location = useLocation();
  const origin = typeof window !== "undefined" ? window.location.origin : "https://www.redrockcleans.com";
  const rawPath = location.pathname || "/";
  const pathEn = rawPath.startsWith("/es") ? rawPath.replace(/^\/es(\/|$)/, "/") : rawPath;
  const normalizedPathEn = pathEn === "" ? "/" : pathEn;
  const urlEn = `${origin}${normalizedPathEn}`;
  const urlEs = `${origin}/es${normalizedPathEn === "/" ? "" : normalizedPathEn}`;

  return (
    <Helmet>
      <link rel="alternate" hrefLang="en" href={urlEn} />
      <link rel="alternate" hrefLang="es" href={urlEs} />
      <link rel="alternate" hrefLang="x-default" href={urlEn} />
    </Helmet>
  );
};

export default Hreflang;


