import { motion, Variants } from "framer-motion";
import { useTranslation } from "react-i18next";
import LanguageScore from "./LanguageScore";

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

type LanguageSkillsSectionProps = {};

const LanguageSkillsSection: React.FC<LanguageSkillsSectionProps> = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      variants={wrapper}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
      className="mt-8 grid gap-8 sm:mt-4 sm:grid-flow-col"
    >
      <LanguageScore
        name={t("language.english_written")}
        rating={4}
        certificationHref="#"
      />
      <LanguageScore
        name={t("language.english_spoken")}
        rating={4}
        certificationHref="#"
      />
      <LanguageScore name={t("language.italian")} rating={5} />
    </motion.div>
  );
};

export default LanguageSkillsSection;
