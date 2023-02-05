import classNames from "classnames";
import type { WithClassname } from "../../lib/types";

const CurriculumDisclaimer: React.FC<WithClassname> = ({ className }) => {
  return (
    <p
      className={classNames(
        className,
        "max-w-screen-sm text-center text-xs font-normal text-gray-400"
      )}
    >
      I authorize the processing of my personal data in the CV pursuant to art.
      13 d. lgs. June 30, 2003 n. 196 - "Code regarding the protection of
      personal data" and art. 13 GDPR 679/16 - "European regulation on the
      protection of personal data"
    </p>
  );
};

export default CurriculumDisclaimer;
