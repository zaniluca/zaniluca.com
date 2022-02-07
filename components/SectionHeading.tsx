type SectionHeadingProps = {
  name: string;
};

const SectionHeading: React.FC<SectionHeadingProps> = ({ name }) => {
  return (
    <h2 className="text-base font-medium uppercase tracking-widest text-neutral-400">
      {name}
    </h2>
  );
};

export default SectionHeading;
