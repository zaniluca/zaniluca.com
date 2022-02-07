import type { NextPage } from "next";
import Disclaimer from "../components/Disclaimer";
import Divider from "../components/Divider";
import EducationCard from "../components/EducationCard";
import HeadingSection from "../components/HeadingSection";
import LanguageSkillsSection from "../components/LanguageSkillsSection";
import PersonalWorkCard from "../components/PersonalWorkCard";
import SectionHeading from "../components/SectionHeading";

const CurriculumPage: NextPage = () => {
  return (
    <div className="min-h-screen px-5">
      <div className="mx-auto mt-12 w-full max-w-screen-lg">
        <HeadingSection />
        <Divider />
        <div className="mt-8">
          <SectionHeading name="Personal Work" />
          <div className="mt-4 grid gap-8">
            <PersonalWorkCard
              datespan="Dec 2021 - Currently working on"
              name="Cloud migrations Web App"
              description="Fast and Easy to Use cloud migration service with NodeJS apollo-express backend and stripe payment services"
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
              datespan="Mar 2021 - Apr 2021"
              name="React App Showcase Website"
              description="React Website to showcase my app made in React with the NextJs Framework and Tailwind CSS"
              href="https://iregistro.it"
              tags={["React", "NextJs", "Github", "Figma"]}
            >
              <a href="https://iregistro.it">
                <div className="group relative inline-flex h-52 w-full items-end justify-center overflow-hidden rounded-2xl bg-neutral-100 hover:bg-neutral-50 sm:w-52">
                  <img
                    className="absolute w-32 transition-transform group-hover:scale-110 sm:w-28"
                    src="/images/iregistro-phone.png"
                  />
                </div>
              </a>
            </PersonalWorkCard>
            <PersonalWorkCard
              datespan="June 2020 - Feb 2021"
              name="Fullstack iOS App"
              description="Swift native iOS app with custom Python Flask API that scrapes data from schools websites and helps students staying up to date"
              href="https://apps.apple.com/it/app/iregistro-diario-scuola/id1546399019"
              tags={["Swift", "Flask Python", "REST", "MVVM", "Core Data"]}
            >
              <a href="https://apps.apple.com/it/app/iregistro-diario-scuola/id1546399019">
                <div className="group relative inline-flex h-52 w-full items-center justify-end overflow-hidden rounded-2xl bg-neutral-100 hover:bg-neutral-50 sm:w-52">
                  <img
                    className="absolute w-56 transition-transform group-hover:scale-110 sm:w-48"
                    src="/images/iregistro-macbook.png"
                  />
                </div>
              </a>
            </PersonalWorkCard>
          </div>
        </div>
        <Divider />
        <div className="mt-8">
          <SectionHeading name="Education" />
          <div className="mt-8 grid gap-8 sm:mt-4">
            <EducationCard
              datespan="2021 - Present"
              name="Computer Engineering"
              description="Currently studying “Computer Engineering” at Politecnico di Milano"
            />
            <EducationCard
              datespan="2016 - 2019"
              name="Perito Informatico"
              description="Ottenuto con valutazione 100 e lode la qualifica di “Perito Informatico”
        presso l’IIS Janello Torriani di Cremona"
              certificationHref="#"
            />
            <EducationCard
              datespan="2019 - 2020"
              name="CCNA Routing and Switching"
              description="Ottenuto con valutazione 100 e lode la qualifica di “Perito Informatico”
        presso l’IIS Janello Torriani di Cremona"
              certificationHref="#"
            />
          </div>
        </div>
        <Divider />
        <div className="mt-8">
          <SectionHeading name="Language skills" />
          <LanguageSkillsSection />
        </div>
      </div>
      <Disclaimer className="mx-auto mt-24 mb-12" />
    </div>
  );
};

export default CurriculumPage;
