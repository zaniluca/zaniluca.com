import Image from "next/image";
import { useTranslation } from "react-i18next";
import LinkButton from "../../LinkButton";

const CurriculumHeadingSection = () => {
  const { t } = useTranslation("curriculum", { keyPrefix: "heading" });

  return (
    <div>
      <div>
        <span className="relative inline-block">
          <div className="relative h-44 w-44 rounded-full ring-2 ring-gray-300">
            <Image
              priority
              layout="fill"
              objectFit="cover"
              className="rounded-full"
              src="/images/profile.jpg"
              alt="Picture"
            />
          </div>
        </span>
      </div>

      <div className="mt-8">
        <h1 className="text-3xl font-medium leading-7 text-gray-900">
          Luca Zani
        </h1>
        <p className="mt-4 max-w-screen-lg text-lg font-normal leading-7 text-gray-500">
          {t("bio")}
        </p>
        <div className="grid grid-cols-1 gap-4 py-8 sm:grid-cols-3">
          <InfoCell
            name={t("info.birthday.name")}
            value={t("info.birthday.value")}
          />
          <InfoCell
            name={t("info.gender.name")}
            value={t("info.gender.value")}
          />
          <InfoCell
            name={t("info.nationality.name")}
            value={t("info.nationality.value")}
          />
          <div>
            <p className="text-base font-medium uppercase text-gray-500 sm:text-sm">
              {t("info.phone.name")}
            </p>
            <a
              href="tel:+393383106419"
              className="text-base font-normal text-gray-900 underline decoration-gray-200 decoration-2 hover:text-gray-700 sm:text-sm sm:leading-5"
            >
              +39 3383106419
            </a>
          </div>
          <div>
            <p className="text-base font-medium uppercase text-gray-500 sm:text-sm">
              {t("info.email.name")}
            </p>
            <a
              href="mailto:contact-me@zaniluca.com"
              className="text-base font-normal text-gray-900 underline decoration-gray-200 decoration-2 hover:text-gray-700 sm:text-sm sm:leading-5"
            >
              contact-me@zaniluca.com
            </a>
          </div>
        </div>
        <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div>
            <LinkButton
              className="text-base"
              text={t("download_button")}
              href={t("download_link")}
            />
          </div>
          <div>
            <LinkButton
              className="text-base"
              text="LinkedIn"
              href="https://linkedin.com/in/zaniluca"
            />
            <LinkButton
              className="ml-3 text-base"
              text="GitHub"
              href="https://github.com/zaniluca"
            />
          </div>
        </div>
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
      <p className="text-base font-medium uppercase text-gray-500 sm:text-sm">
        {name}
      </p>
      <p className="text-base font-normal text-gray-900 sm:text-sm sm:leading-5">
        {value}
      </p>
    </div>
  );
};

export default CurriculumHeadingSection;
