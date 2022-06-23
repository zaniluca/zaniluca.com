import { useTranslation } from "react-i18next";
import EducationCard from "../EducationCard";
import CurriculumSectionHeading from "../CurriculumSectionHeading";

const CurriculumEducationSection = () => {
  const { t } = useTranslation("curriculum", { keyPrefix: "education" });

  return (
    <div className="mt-8">
      <CurriculumSectionHeading name={t("headline")} />
      <div className="mt-8 grid gap-8 sm:mt-4">
        <EducationCard
          datespan={t("polimi.datespan")}
          name={t("polimi.name")}
          description={t("polimi.description")}
        />
        <EducationCard
          datespan={t("itis.datespan")}
          name={t("itis.name")}
          description={t("itis.description")}
        />
        <EducationCard
          datespan={t("cisco.datespan")}
          name={t("cisco.name")}
          description={t("cisco.description")}
          certificationHref="/certificates/CCNA1.pdf"
        />
      </div>
    </div>
  );
};

export default CurriculumEducationSection;
