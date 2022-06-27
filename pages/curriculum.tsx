import path from "path";
import type { GetServerSideProps } from "next";
import { loadTranslations } from "ni18n";
import { ni18nConfig } from "../ni18n.config";
import Divider from "../components/Divider";
import CurriculumHeadingSection from "../components/curriculum/sections/CurriculumHeadingSection";
import CurriculumLanguageSkillsSection from "../components/curriculum/sections/CurriculumLanguageSkillsSection";
import CurriculumEducationSection from "../components/curriculum/sections/CurriculumEducationSection";
import CurriculumPersonalWorkSection from "../components/curriculum/sections/CurriculumPersonalWorkSection";
import type { CustomNextPage } from "../lib/types";
import CurriculumLayout from "../layouts/curriculum";
import CurriculumDisclaimer from "components/curriculum/CurriculumDisclaimer";

const CurriculumPage: CustomNextPage = () => {
  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-8 print:bg-white lg:py-12">
      <div className="absolute inset-0 bg-[url(/images/grid.svg)] bg-top [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] print:hidden"></div>
      <div className="relative w-full bg-white px-6 py-12 shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5 print:shadow-none print:ring-0 md:mx-auto md:max-w-4xl lg:max-w-5xl lg:pt-16 lg:pb-28">
        <div className="mx-auto mt-8 md:max-w-3xl lg:max-w-4xl">
          <CurriculumHeadingSection />
          <Divider />
          <CurriculumPersonalWorkSection />
          <Divider />
          <CurriculumEducationSection />
          <Divider />
          <CurriculumLanguageSkillsSection />
        </div>
      </div>
      <CurriculumDisclaimer className="mx-auto mt-24 mb-12 px-4" />
    </div>
  );
};

CurriculumPage.title = "Developer Curriculum";

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  // Fix for vercel not loading locales:
  // https://github.com/JCQuintas/ni18n/issues/49#issuecomment-1011137220
  path.resolve("./", "./public/locales");
  const translations = await loadTranslations(ni18nConfig, locale, [
    "curriculum",
  ]);

  return {
    props: {
      ...translations,
    },
  };
};

export default CurriculumPage;
