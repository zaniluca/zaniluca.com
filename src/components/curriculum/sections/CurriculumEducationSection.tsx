import EducationCard from "../EducationCard";
import CurriculumSectionHeading from "../CurriculumSectionHeading";

const CurriculumEducationSection = () => {
  return (
    <div className="my-8">
      <CurriculumSectionHeading name="education" />
      <div className="mt-8 grid gap-8 sm:mt-4">
        <EducationCard
          datespan="2024 ― Present"
          name="Master's Degree in Computer Engineering"
          description="Currently pursuing a Master's degree in “Computer Engineering” at the Politecnico di Milano"
        />
        <EducationCard
          datespan="2021 ― 2024"
          name="Bachelor's Degree in Computer Engineering"
          description="Obtained a Bachelor's degree in “Computer Engineering” at the Politecnico di Milano"
        />
      </div>
    </div>
  );
};

export default CurriculumEducationSection;
