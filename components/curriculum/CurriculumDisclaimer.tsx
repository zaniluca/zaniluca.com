import classNames from "classnames";
import { useTranslation } from "react-i18next";
import type { WithClassname } from "../../lib/types";

const CurriculumDisclaimer: React.FC<WithClassname> = ({ className }) => {
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
