import EducationCard from "../EducationCard";
import CurriculumSectionHeading from "../CurriculumSectionHeading";

const CurriculumEducationSection = () => {
  return (
    <div className="mt-8">
      <CurriculumSectionHeading name="education" />
      <div className="mt-8 grid gap-8 sm:mt-4">
        <EducationCard
          datespan="2021 ― Present"
          name="Bachelore Computer Engineering"
          description="Currently studying “Computer Engineering” in the Cremona branch of the Politecnico di Milano"
        />
        <EducationCard
          datespan="2016 ― 2019"
          name="Computer Expert"
          description="Obtained the qualification of “Computer Expert” at the IIS Janello Torriani in Cremona with a grade of 100 and honors"
        />
        <EducationCard
          datespan="2019 ― 2020"
          name="Cisco CCNA1 Routing and Switching"
          description=""
          certificationHref="/certificates/CCNA1.pdf"
        />
      </div>
    </div>
  );
};

export default CurriculumEducationSection;
