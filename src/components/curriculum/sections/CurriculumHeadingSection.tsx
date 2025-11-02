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
          Italian software engineer passionate about crafting fast, maintainable
          apps using React, TypeScript, Swift, and Go. I focus on clean code,
          intuitive UX, and modern cloud-powered solutions.
        </p>
        <div className="mt-5 gap-6 flex items-center justify-start">
          <LinkButton
            className="text-base"
            text="LinkedIn"
            href="https://linkedin.com/in/zaniluca"
          />
          <LinkButton
            className="text-base"
            text="GitHub"
            href="https://github.com/zaniluca"
          />
          <LinkButton
            className="text-base hidden print:inline-flex"
            text="luca@zaniluca.com"
            href="mailto:luca@zaniluca.com"
          />
        </div>
      </div>
    </div>
  );
};

export default CurriculumHeadingSection;
