import { motion, type Variants } from "motion/react";

const wrapper: Variants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.22,
    },
  },
};

const text: Variants = {
  offscreen: {
    opacity: 0,
    x: -10,
  },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.22,
    },
  },
};

type EducationCardProps = {
  description: string;
  name: string;
};

const EducationCard: React.FC<EducationCardProps> = ({ name, description }) => {
  return (
    <motion.div
      // variants={wrapper}
      // initial="offscreen"
      // whileInView="onscreen"
      // viewport={{ once: true, amount: 0.5 }}
      className="grid gap-2"
    >
      <motion.h4
        // variants={text}
        className="text-lg font-medium leading-6 text-gray-900"
      >
        {name}
      </motion.h4>
      <motion.p
        // variants={text}
        className="max-w-lg text-base font-normal leading-6 text-gray-500"
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

export default EducationCard;
