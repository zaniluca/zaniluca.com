import EducationCard from "../EducationCard";
import CurriculumSectionHeading from "../CurriculumSectionHeading";
import { motion, type Variants } from "framer-motion";

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

const CurriculumWorkExperience = () => {
  return (
    <div className="my-8">
      <CurriculumSectionHeading name="work experience" />
      <div className="mt-8 grid gap-8 sm:mt-4">
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
            Mar 2022 ― Apr 2023
          </motion.span>
          <motion.h4
            variants={text}
            className="text-lg font-medium leading-6 text-gray-900"
          >
            Frontend Developer @{" "}
            <a
              target="_blank"
              href="https://www.kampaay.com/"
              className="underline decoration-gray-400 decoration-dotted underline-offset-4 transition-colors hover:text-gray-500"
            >
              Kampaay
            </a>
          </motion.h4>
          <motion.p
            variants={text}
            className="max-w-lg text-base font-normal leading-6 text-gray-500"
          >
            Worked in a rapidly growing startup environment with SCRUM Agile
            methodologies. Built customer facing features in Vue, React and
            Typescript. Helped migrating to new technologies (Nuxt 2 to 3, Vuex
            to Pinia, ...)
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default CurriculumWorkExperience;
