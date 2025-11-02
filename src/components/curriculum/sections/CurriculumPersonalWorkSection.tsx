import PersonalWorkCard from "../PersonalWorkCard";
import CurriculumSectionHeading from "../CurriculumSectionHeading";

const CurriculumPersonalWorkSection = () => {
  return (
    <div className="my-8 print:my-0">
      <CurriculumSectionHeading name="personal work" />
      <div className="mt-4 grid gap-8">
        <PersonalWorkCard
          datespan="Mar 2022 ― Jan 2024"
          name="Gitlab Mobile App for Notifications"
          description="Multiplatform app (~250 MAUs) that transforms GitLab email alerts into real-time push notifications, keeping teams instantly updated on project activity."
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
                alt="ping4gitlab iphone screenshot 1"
              />
              <img
                className="absolute z-10 ml-16 w-32 transition-transform group-hover:scale-105 group-hover:opacity-60 sm:w-28"
                src="/images/ping4gitlab-2.png"
                alt="ping4gitlab iphone screenshot 2"
              />
            </div>
          </a>
        </PersonalWorkCard>
        <PersonalWorkCard
          datespan="June 2020 ― Feb 2021"
          name="Fullstack iOS App"
          description="Native SwiftUI app (~450 MAUs) integrating a custom Flask API to scrape and aggregate school data, helping students stay organized and informed. Reached the top 20 education apps in Italy's App Store."
          links={[
            {
              text: "Check it out",
              href: "https://iregistro.it",
            },
            {
              text: "App Store",
              href: "https://apps.apple.com/it/app/iregistro-diario-scuola/id1546399019",
            },
          ]}
          tags={["SwiftUI", "Flask Python", "REST", "MVVM", "Core Data"]}
        >
          <a href="https://iregistro.it">
            <div className="group relative inline-flex h-52 w-full items-center justify-end overflow-hidden rounded-2xl bg-gray-100 hover:bg-gray-50 sm:w-52">
              <img
                className="absolute w-56 transition-transform group-hover:scale-110 sm:w-48"
                src="/images/iregistro-macbook.png"
                alt="iregistro.it macbook screenshot"
              />
            </div>
          </a>
        </PersonalWorkCard>
      </div>
    </div>
  );
};

export default CurriculumPersonalWorkSection;
