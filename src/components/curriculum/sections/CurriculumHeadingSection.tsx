import LinkButton from "../../LinkButton";

const CurriculumHeadingSection = () => {
  return (
    <div>
      <div>
        <span className="relative inline-block">
          <div className="relative h-44 w-44 rounded-full ring-2 ring-gray-300">
            <img
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
          Hi, I’m Luca, an Italian Frontend Developer specialized in React,
          Typescript, Swift, and Python. I enjoy writing clean and maintainable
          code and staying up to date with the latest technology standards and
          best practices. I'm very passionate about programming, web graphics,
          and Cloud Computing
        </p>
        <div className="grid grid-cols-1 gap-4 py-8 sm:grid-cols-3">
          <InfoCell name="Birthday" value="31 January 2002" />
          <InfoCell name="Gender" value="Male" />
          <InfoCell name="Nationality" value="Italian" />
          <div>
            <p className="text-base font-medium uppercase text-gray-500 sm:text-sm">
              Phone
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
              Email
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
              text="Download Curriculum as PDF"
              href="https://s3.eu-west-2.amazonaws.com/zaniluca.com-curriculums-prod-s3/en_zani_luca.pdf"
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
