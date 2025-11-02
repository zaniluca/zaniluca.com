import { motion } from "motion/react";

type CurriculumSectionHeadingProps = {
  name: string;
};

const CurriculumSectionHeading: React.FC<CurriculumSectionHeadingProps> = ({
  name,
}) => {
  return (
    <motion.h2
      // initial={{ opacity: 0 }}
      // whileInView={{ opacity: 1 }}
      // transition={{ duration: 0.8, delay: 0.2 }}
      // viewport={{ once: true }}
      className="text-base font-medium uppercase tracking-widest text-gray-400"
    >
      {name}
    </motion.h2>
  );
};

export default CurriculumSectionHeading;
