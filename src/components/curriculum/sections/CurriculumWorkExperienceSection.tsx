import EducationCard from "../EducationCard";
import CurriculumSectionHeading from "../CurriculumSectionHeading";

const CurriculumWorkExperience = () => {
  return (
    <div className="my-8">
      <CurriculumSectionHeading name="work experience" />
      <div className="mt-8 grid gap-8 sm:mt-4">
        <EducationCard
          datespan="Mar 2022 ― Apr 2023"
          name="Frontend Developer @ Kampaay"
          description="Worked in a rapidly growing startup environment with SCRUM Agile methodologies. Built customer facing features in Vue, React and Typescript. Helped migrating to new technologies (Nuxt 2 to 3, Vuex to Pinia, ...)"
        />
      </div>
    </div>
  );
};

export default CurriculumWorkExperience;
