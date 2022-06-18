import classNames from "classnames";
import { useTranslation } from "react-i18next";

type CurriculumDisclaimerProps = {
  className?: string;
};

const CurriculumDisclaimer: React.FC<CurriculumDisclaimerProps> = ({
  className,
}) => {
  const { t } = useTranslation("curriculum");

  return (
    <p
      className={classNames(
        className,
        "max-w-screen-sm text-center text-xs font-normal text-gray-400"
      )}
    >
      {t("disclaimer")}
    </p>
  );
};

export default CurriculumDisclaimer;
