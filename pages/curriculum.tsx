import type { NextPage } from "next";
import Disclaimer from "../components/Disclaimer";
import Divider from "../components/Divider";
import EducationCard from "../components/EducationCard";
import HeadingSection from "../components/HeadingSection";
import LanguageSkillsSection from "../components/LanguageSkillsSection";
import PersonalWorkCard from "../components/PersonalWorkCard";
import SectionHeading from "../components/SectionHeading";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const CurriculumPage: NextPage = () => {
  const { t, i18n } = useTranslation();
  const router = useRouter();

  useEffect(() => {
    i18n.changeLanguage(router.locale);
  }, [router.locale]);

  return (
    <div className="min-h-screen px-5">
      <button
        onClick={() =>
          router.push("/curriculum", "/curriculum", { locale: "en" })
        }
      >
        Change language
      </button>
      <div className="mx-auto mt-12 w-full max-w-screen-lg">
        <HeadingSection />
        <Divider />
        <div className="mt-8">
          <SectionHeading name={t("personal_work.headline")} />
          <div className="mt-4 grid gap-8">
            <PersonalWorkCard
              datespan={t("personal_work.cloudmover.datespan")}
              name={t("personal_work.cloudmover.name")}
              description={t("personal_work.cloudmover.description")}
              tags={[
                "React",
                "GraphQL",
                "NodeJS",
                "Typescript",
                "Stripe",
                "Jest",
              ]}
            />
            <PersonalWorkCard
              datespan={t("personal_work.iregistro_website.datespan")}
              name={t("personal_work.iregistro_website.name")}
              description={t("personal_work.iregistro_website.description")}
              href="https://iregistro.it"
              tags={["React", "NextJs", "Github", "Figma"]}
            >
              <a href="https://iregistro.it">
                <div className="group relative inline-flex h-52 w-full items-center justify-end overflow-hidden rounded-2xl bg-neutral-100 hover:bg-neutral-50 sm:w-52">
                  <img
                    className="absolute w-56 transition-transform group-hover:scale-110 sm:w-48"
                    src="/images/iregistro-macbook.png"
                  />
                </div>
              </a>
            </PersonalWorkCard>
            <PersonalWorkCard
              datespan={t("personal_work.iregistro.datespan")}
              name={t("personal_work.iregistro.name")}
              description={t("personal_work.iregistro.description")}
              href="https://apps.apple.com/it/app/iregistro-diario-scuola/id1546399019"
              tags={["Swift", "Flask Python", "REST", "MVVM", "Core Data"]}
            >
              <a href="https://apps.apple.com/it/app/iregistro-diario-scuola/id1546399019">
                <div className="group relative inline-flex h-52 w-full items-end justify-center overflow-hidden rounded-2xl bg-neutral-100 hover:bg-neutral-50 sm:w-52">
                  <img
                    className="absolute w-32 transition-transform group-hover:scale-110 sm:w-28"
                    src="/images/iregistro-phone.png"
                  />
                </div>
              </a>
            </PersonalWorkCard>
          </div>
        </div>
        <Divider />
        <div className="mt-8">
          <SectionHeading name={t("education.headline")} />
          <div className="mt-8 grid gap-8 sm:mt-4">
            <EducationCard
              datespan={t("education.polimi.datespan")}
              name={t("education.polimi.name")}
              description={t("education.polimi.description")}
            />
            <EducationCard
              datespan={t("education.itis.datespan")}
              name={t("education.itis.name")}
              description={t("education.itis.description")}
              certificationHref="#"
            />
            <EducationCard
              datespan={t("education.cisco.datespan")}
              name={t("education.cisco.name")}
              description={t("education.cisco.description")}
              certificationHref="#"
            />
          </div>
        </div>
        <Divider />
        <div className="mt-8">
          <SectionHeading name={t("language.headline")} />
          <LanguageSkillsSection />
        </div>
      </div>
      <Disclaimer className="mx-auto mt-24 mb-12" />
    </div>
  );
};

export default CurriculumPage;
