import LinkButton from "./LinkButton";
import { SVGProps } from "react";
import { motion, Variants } from "framer-motion";
import { useTranslation } from "react-i18next";

const wrapper: Variants = {
  offscreen: {
    opacity: 0,
    y: 10,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

type LanguageScoreProps = {
  name: string;
  rating: number;
  certificationHref?: string;
};

const LanguageScore: React.FC<LanguageScoreProps> = ({
  name,
  rating,
  certificationHref,
}) => {
  const { t } = useTranslation();

  return (
    <motion.div variants={wrapper} className="grid grid-rows-3 gap-2">
      <h4 className="text-base font-medium leading-6 text-gray-900 sm:text-sm sm:leading-5">
        {name}
      </h4>
      <div>
        <div className="grid grid-flow-col justify-start">
          {[...Array(rating)].map((_, index: number) => {
            return (
              <StarIcon
                key={index}
                className="h-6 w-6 text-yellow-300 sm:h-4 sm:w-4"
              />
            );
          })}
          {[...Array(5 - rating)].map((_, index: number) => {
            return (
              <StarIcon
                key={index}
                className="h-6 w-6 text-gray-300 sm:h-4 sm:w-4"
              />
            );
          })}
        </div>
      </div>
      {certificationHref && (
        <LinkButton
          className="mt-2"
          text={t("language.button_text")}
          href={certificationHref}
        />
      )}
    </motion.div>
  );
};

const StarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 20 20" fill="currentColor" {...props}>
    <path
      d="M9.1 1.75a1 1 0 0 1 1.8 0l1.87 3.67a1 1 0 0 0 .73.53l4.08.65a1 1 0 0 1 .55 1.7l-2.92 2.92a1 1 0 0 0-.28.86l.64 4.07a1 1 0 0 1-1.44 1.05l-3.68-1.87a1 1 0 0 0-.9 0L5.87 17.2a1 1 0 0 1-1.44-1.05l.64-4.07a1 1 0 0 0-.28-.86L1.87 8.3a1 1 0 0 1 .55-1.7l4.08-.65a1 1 0 0 0 .73-.53l1.88-3.67Z"
      fill="currentColor"
    />
  </svg>
);

export default LanguageScore;
