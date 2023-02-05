type CurriculumSectionHeadingProps = {
  name: string;
};

const CurriculumSectionHeading: React.FC<CurriculumSectionHeadingProps> = ({
  name,
}) => {
  return (
    <h2 className="text-base font-medium uppercase tracking-widest text-gray-400">
      {name}
    </h2>
  );
};

export default CurriculumSectionHeading;
