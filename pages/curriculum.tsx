import type { NextPage } from "next";
import Disclaimer from "../components/Disclaimer";
import Divider from "../components/Divider";
import EducationCard from "../components/EducationCard";
import HeadingSection from "../components/HeadingSection";
import LanguageSkillsSection from "../components/LanguageSkillsSection";
import PersonalWorkCard from "../components/PersonalWorkCard";
import SectionHeading from "../components/SectionHeading";
import { useTranslation } from "react-i18next";
import Head from "next/head";

const CurriculumPage: NextPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>Luca Zani ― Developer Curriculum</title>
      </Head>
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-8 print:bg-white lg:py-12">
        <div className="absolute inset-0 bg-[url(/images/grid.svg)] bg-top [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] print:hidden"></div>
        <div className="relative w-full bg-white px-6 py-12 shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5 print:shadow-none print:ring-0 md:mx-auto md:max-w-4xl lg:max-w-5xl lg:pt-16 lg:pb-28">
          <div className="mx-auto mt-8 md:max-w-3xl lg:max-w-4xl">
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
                    <div className="group relative inline-flex h-52 w-full items-center justify-end overflow-hidden rounded-2xl bg-gray-100 hover:bg-gray-50 sm:w-52">
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
                />
                <EducationCard
                  datespan={t("education.cisco.datespan")}
                  name={t("education.cisco.name")}
                  description={t("education.cisco.description")}
                  certificationHref="/certificates/CCNA1.pdf"
                />
              </div>
            </div>
            <Divider />
            <div className="mt-8">
              <SectionHeading name={t("language.headline")} />
              <LanguageSkillsSection />
            </div>
          </div>
        </div>
        <Disclaimer className="mx-auto mt-24 mb-12 px-4" />
      </div>
    </>
  );
};

export default CurriculumPage;
