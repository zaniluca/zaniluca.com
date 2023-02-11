import PersonalWorkCard from "../PersonalWorkCard";
import CurriculumSectionHeading from "../CurriculumSectionHeading";

const CurriculumPersonalWorkSection = () => {
  return (
    <div className="my-8">
      <CurriculumSectionHeading name="personal work" />
      <div className="mt-4 grid gap-8">
        <PersonalWorkCard
          datespan="Mar 2022 ― Present"
          name="Gitlab Mobile App for Notifications"
          description="Multiplatform app that leverages giltab mail notifications to send users instant push notifications about their and their team activities on gitlab"
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
          datespan="Mar 2021 ― Apr 2021"
          name="React App Showcase Website"
          description="React Website to showcase my app made in React with the NextJs Framework and Tailwind CSS"
          links={[
            {
              text: "Check it out",
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
          datespan="June 2020 ― Feb 2021"
          name="Fullstack iOS App"
          description="Swift native iOS app with custom Python Flask API that scrapes data from schools websites and helps students staying up to date"
          links={[
            {
              text: "Check it out",
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
