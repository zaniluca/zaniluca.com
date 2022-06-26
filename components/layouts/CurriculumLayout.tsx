import CurriculumDisclaimer from "../curriculum/CurriculumDisclaimer";

const CurriculumLayout: React.FC = ({ children }) => {
  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-8 print:bg-white lg:py-12">
      <div className="absolute inset-0 bg-[url(/images/grid.svg)] bg-top [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] print:hidden"></div>
      <div className="relative w-full bg-white px-6 py-12 shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5 print:shadow-none print:ring-0 md:mx-auto md:max-w-4xl lg:max-w-5xl lg:pt-16 lg:pb-28">
        <div className="mx-auto mt-8 md:max-w-3xl lg:max-w-4xl">{children}</div>
      </div>
      <CurriculumDisclaimer className="mx-auto mt-24 mb-12 px-4" />
    </div>
  );
};

export default CurriculumLayout;
