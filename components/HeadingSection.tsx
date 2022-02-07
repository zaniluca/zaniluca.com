import LinkButton from "./LinkButton";

type HeadingSectionProps = {};

const HeadingSection: React.FC<HeadingSectionProps> = () => {
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
          Hi I’m Luca, an Italian Fullstack Developer specialized in React,
          Typescript, Swift and Python. I enjoy writing clean and maintainable
          code and staying up to date with the latest technology standards and
          best practices.
        </p>
        <div className="grid grid-cols-1 gap-4 py-8 sm:grid-cols-3">
          <InfoCell name="Gender" value="Male" />
          <InfoCell name="Birthday" value="31 January 2002" />
          <InfoCell name="Nationality" value="Italian" />
          <InfoCell name="Phone" value="+39 3383106419" />
          <InfoCell name="Email" value="contact@zaniluca.it" />
        </div>
        <LinkButton
          className="mt-5 text-base"
          text="Download Curriculum as PDF"
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
