import { motion, type Variants } from "framer-motion";
import LinkButton from "../LinkButton";

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
  datespan: string;
  name: string;
  description: string;
  certificationHref?: string;
};

const EducationCard: React.FC<EducationCardProps> = ({
  certificationHref,
  name,
  description,
  datespan,
}) => {
  return (
    <motion.div
      variants={wrapper}
      initial="offscreen"
      whileInView="onscreen"
      className="grid gap-2"
      viewport={{ once: true, amount: 0.5 }}
    >
      <motion.span
        variants={text}
        className="text-sm font-normal leading-5 text-gray-500"
      >
        {datespan}
      </motion.span>
      <motion.h4
        variants={text}
        className="text-lg font-medium leading-6 text-gray-900"
      >
        {name}
      </motion.h4>
      <motion.p
        variants={text}
        className="max-w-lg text-base font-normal leading-6 text-gray-500"
      >
        {description}
      </motion.p>
      {certificationHref && (
        <motion.div variants={text}>
          <LinkButton
            className="mt-2"
            text="Certification"
            href={certificationHref}
          />
        </motion.div>
      )}
    </motion.div>
  );
};

export default EducationCard;
