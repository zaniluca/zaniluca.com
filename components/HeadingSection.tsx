import { useTranslation } from "react-i18next";
import LinkButton from "./LinkButton";

type HeadingSectionProps = {};

const HeadingSection: React.FC<HeadingSectionProps> = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div>
        {/* Avatar */}
        <span className="relative inline-block">
          <img
            className="h-44 w-44 rounded-full bg-neutral-300"
            src="/images/profile.jpg"
            alt="Picture"
          />
          {/* <span className="absolute bottom-0 right-0 block h-10 w-10 rounded-full bg-green-400 ring-4 ring-white" /> */}
        </span>
      </div>

      <div className="mt-8">
        <h1 className="text-3xl font-medium leading-7 text-neutral-900">
          Luca Zani
        </h1>
        <p className="mt-4 max-w-screen-md text-lg font-normal leading-6 text-neutral-500">
          {t("heading.bio")}
        </p>
        <div className="grid grid-cols-1 gap-4 py-8 sm:grid-cols-3">
          <InfoCell
            name={t("heading.info.gender.name")}
            value={t("heading.info.gender.value")}
          />
          <InfoCell
            name={t("heading.info.birthday.name")}
            value={t("heading.info.birthday.value")}
          />
          <InfoCell
            name={t("heading.info.nationality.name")}
            value={t("heading.info.nationality.value")}
          />
          <InfoCell
            name={t("heading.info.phone.name")}
            value="+39 3383106419"
          />
          <InfoCell
            name={t("heading.info.email.name")}
            value="contact-me@zaniluca.com"
          />
        </div>
        <LinkButton
          className="mt-5 text-base"
          text={t("heading.download_button")}
          href="#"
        />
      </div>
    </div>
  );
};

type InfoCellProps = {
  className?: string;
  name: string;
  value: string;
};

const InfoCell: React.FC<InfoCellProps> = ({ className, name, value }) => {
  return (
    <div className={className}>
      <p className="text-base font-medium uppercase text-neutral-500 sm:text-sm">
        {name}
      </p>
      <p className="text-base font-normal text-neutral-900 sm:text-sm sm:leading-5">
        {value}
      </p>
    </div>
  );
};

export default HeadingSection;
