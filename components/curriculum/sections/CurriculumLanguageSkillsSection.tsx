import { motion, Variants } from "framer-motion";
import { useTranslation } from "react-i18next";
import LanguageScore from "../LanguageScore";
import CurriculumSectionHeading from "../CurriculumSectionHeading";

const wrapper: Variants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.44,
    },
  },
};

const CurriculumLanguageSkillsSection = () => {
  const { t } = useTranslation("curriculum", { keyPrefix: "language" });

  return (
    <div className="mt-8">
      <CurriculumSectionHeading name={t("headline")} />
      <motion.div
        variants={wrapper}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-8 grid gap-8 sm:mt-4 sm:grid-flow-col"
      >
        <LanguageScore name={t("english_written")} rating={4} />
        <LanguageScore name={t("english_spoken")} rating={4} />
        <LanguageScore name={t("italian")} rating={5} />
      </motion.div>
    </div>
  );
};

export default CurriculumLanguageSkillsSection;
