import LinkButton from "../../LinkButton";
import Signature from "../../Signature";

const CurriculumHeadingSection = () => {
  return (
    <div>
      <div>
        <span className="relative inline-block">
          <Signature className="w-40 text-neutral-500" />
        </span>
      </div>

      <div className="mt-8">
        <h1 className="text-3xl font-medium leading-7 text-gray-900">
          Hello! I'm Luca
        </h1>
        <p className="mt-4 max-w-screen-lg leading-relaxed text-gray-500">
          an Italian Frontend Developer specialized in React, Typescript, Swift,
          and Python. I enjoy writing clean and maintainable code and staying up
          to date with the latest technology standards and best practices. I'm
          very passionate about programming, web graphics, and Cloud Computing
        </p>
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

export default CurriculumHeadingSection;
