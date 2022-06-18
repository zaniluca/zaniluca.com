import { useTranslation } from "react-i18next";
import PersonalWorkCard from "../PersonalWorkCard";
import CurriculumSectionHeading from "../CurriculumSectionHeading";

const CurriculumPersonalWorkSection = () => {
  const { t } = useTranslation("curriculum", { keyPrefix: "personal_work" });

  return (
    <div className="mt-8">
      <CurriculumSectionHeading name={t("headline")} />
      <div className="mt-4 grid gap-8">
        <PersonalWorkCard
          datespan={t("ping4gitlab.datespan")}
          name={t("ping4gitlab.name")}
          description={t("ping4gitlab.description")}
          links={[
            {
              text: "App Store",
              href: "https://apps.apple.com/it/app/ping-for-gitlab/id1620904531",
            },
            {
              text: "Play Store",
              href: "https://play.google.com/store/apps/details?id=com.zaniluca.ping4gitlab",
            },
            {
              text: "GitHub",
              href: "https://github.com/zaniluca/ping-4-gitlab",
            },
          ]}
          tags={["React Native", "Expo", "Push Notifications", "Typescript"]}
        >
          <a href="https://github.com/zaniluca/ping-4-gitlab">
            <div className="group relative inline-flex h-52 w-full items-end justify-center overflow-hidden rounded-2xl bg-gray-100 hover:bg-gray-50 sm:w-52">
              <img
                className="absolute mr-16 w-32 transition-transform group-hover:z-20 group-hover:scale-110 sm:w-28"
                src="/images/ping4gitlab-1.png"
              />
              <img
                className="absolute z-10 ml-16 w-32 transition-transform group-hover:scale-105 group-hover:opacity-60 sm:w-28"
                src="/images/ping4gitlab-2.png"
              />
            </div>
          </a>
        </PersonalWorkCard>
        <PersonalWorkCard
          datespan={t("iregistro_website.datespan")}
          name={t("iregistro_website.name")}
          description={t("iregistro_website.description")}
          links={[
            {
              text: t("cta"),
              href: "https://iregistro.it",
            },
          ]}
          tags={["React", "NextJs", "Github", "Figma"]}
        >
          <a href="https://iregistro.it">
            <div className="group relative inline-flex h-52 w-full items-center justify-end overflow-hidden rounded-2xl bg-gray-100 hover:bg-gray-50 sm:w-52">
              <img
                className="absolute w-56 transition-transform group-hover:scale-110 sm:w-48"
                src="/images/iregistro-macbook.png"
              />
            </div>
          </a>
        </PersonalWorkCard>
        <PersonalWorkCard
          datespan={t("iregistro.datespan")}
          name={t("iregistro.name")}
          description={t("iregistro.description")}
          links={[
            {
              text: t("cta"),
              href: "https://apps.apple.com/it/app/iregistro-diario-scuola/id1546399019",
            },
          ]}
          tags={["Swift", "Flask Python", "REST", "MVVM", "Core Data"]}
        >
          <a href="https://apps.apple.com/it/app/iregistro-diario-scuola/id1546399019">
            <div className="group relative inline-flex h-52 w-full items-end justify-center overflow-hidden rounded-2xl bg-gray-100 hover:bg-gray-50 sm:w-52">
              <img
                className="absolute w-32 transition-transform group-hover:scale-110 sm:w-28"
                src="/images/iregistro-phone.png"
              />
            </div>
          </a>
        </PersonalWorkCard>
      </div>
    </div>
  );
};

export default CurriculumPersonalWorkSection;
