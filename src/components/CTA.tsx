import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const CTA = () => {
  const { t, ready } = useTranslation();
  if (!ready) return "loading translations...";

  return (
    <section className="cta">
      <p className="cta-text">
        {t("components.CTA.introduction")}
        <br className="sm:block hidden" /> {t("components.CTA.finalization")}
      </p>
      <Link to="/contact" className="btn">
        {t("components.CTA.contact")}
      </Link>
    </section>
  );
};

export default CTA;
