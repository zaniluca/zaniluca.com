import CurriculumSectionHeading from "../CurriculumSectionHeading";
import { motion, type Variants } from "motion/react";
import KampaayLogo from "../../company-logos/KampaayLogo";
import CiaoElsaLogo from "../../company-logos/CiaoElsaLogo";

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
    <div className="my-8 print:my-0">
      <CurriculumSectionHeading name="work experience" />
      <div className="mt-8 grid gap-8 sm:mt-4">
        <motion.div
          // variants={wrapper}
          // initial="offscreen"
          // whileInView="onscreen"
          className="grid gap-2"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.span
            // variants={text}
            className="text-sm font-normal leading-5 text-gray-500"
          >
            Apr 2025 ― Present
          </motion.span>
          <motion.h4
            // variants={text}
            className="text-lg font-medium leading-6 text-gray-900"
          >
            Software Engineer @
            <a
              target="_blank"
              href="https://www.ciaoelsa.com/"
              className="group underline decoration-gray-400 decoration-dotted underline-offset-4 transition-colors hover:text-gray-500"
            >
              <CiaoElsaLogo className="mx-1 inline h-4 w-4 text-[#154CDC] transition-transform group-hover:-rotate-12 " />
              CiaoElsa
            </a>
          </motion.h4>
          <motion.p
            // variants={text}
            className="max-w-lg text-base font-normal leading-6 text-gray-500"
          >
            Building the first pension-tech platform in Italy, helping thousands
            of people navigate pension funds, TFR decisions, and supplementary
            pensions through transparent comparison tools and personalized
            consultancy services.
          </motion.p>
        </motion.div>
        <motion.div
          // variants={wrapper}
          // initial="offscreen"
          // whileInView="onscreen"
          className="grid gap-2"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.span
            // variants={text}
            className="text-sm font-normal leading-5 text-gray-500"
          >
            Mar 2022 ― Apr 2023
          </motion.span>
          <motion.h4
            // variants={text}
            className="text-lg font-medium leading-6 text-gray-900"
          >
            Software Engineer @
            <a
              target="_blank"
              href="https://www.kampaay.com/"
              className="group underline decoration-gray-400 decoration-dotted underline-offset-4 transition-colors hover:text-gray-500"
            >
              <KampaayLogo className="inline h-6 w-6 text-[#f97b62] transition-transform group-hover:-rotate-12 " />
              Kampaay
            </a>
          </motion.h4>
          <motion.p
            // variants={text}
            className="max-w-lg text-base font-normal leading-6 text-gray-500"
          >
            Contributed to a fast-growing startup by developing customer-facing
            features with Vue, React, and TypeScript in a SCRUM environment.
            Played a key role in the frontend migration from Nuxt 2 to 3 and
            Vuex to Pinia, improving maintainability and performance across core
            user flows.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default CurriculumWorkExperience;
