import classNames from "classnames";
import { useTranslation } from "react-i18next";

type DisclaimerProps = {
  className?: string;
};

const Disclaimer: React.FC<DisclaimerProps> = ({ className }) => {
  const { t } = useTranslation();

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

export default Disclaimer;
