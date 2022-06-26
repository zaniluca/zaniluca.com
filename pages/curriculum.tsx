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
import CurriculumLayout from "../layouts/CurriculumLayout";

const CurriculumPage: CustomNextPage = () => {
  return (
    <>
      <CurriculumHeadingSection />
      <Divider />
      <CurriculumPersonalWorkSection />
      <Divider />
      <CurriculumEducationSection />
      <Divider />
      <CurriculumLanguageSkillsSection />
    </>
  );
};

CurriculumPage.title = "Developer Curriculum";
CurriculumPage.PageLayout = CurriculumLayout;

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
