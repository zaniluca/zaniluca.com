import EducationCard from "../EducationCard";
import CurriculumSectionHeading from "../CurriculumSectionHeading";

const CurriculumEducationSection = () => {
  return (
    <div className="my-8 print:my-0">
      <CurriculumSectionHeading name="education" />
      <div className="mt-8 grid gap-8 sm:mt-4">
        <EducationCard
          name="Master's Degree in Computer Engineering"
          description="Currently pursuing a Master's degree in “Computer Engineering” at the Politecnico di Milano"
        />
        <EducationCard
          name="Bachelor's Degree in Computer Engineering"
          description="Obtained a Bachelor's degree in “Computer Engineering” at the Politecnico di Milano"
        />
      </div>
    </div>
  );
};

export default CurriculumEducationSection;
