import classNames from "classnames";
import type { SVGProps } from "react";
import type { WithClassname } from "../lib/types";

type LinkButtonProps = WithClassname & {
  text: string;
  href: string;
};

const LinkButton: React.FC<LinkButtonProps> = ({ className, text, href }) => {
  return (
    <a
      href={href}
      className={classNames(
        className,
        "group inline-flex items-center text-base font-medium leading-6 text-gray-900 hover:text-gray-700 sm:text-sm sm:leading-5"
      )}
    >
      {text}
      <ArrowIcon className="ml-1 h-4 w-4 transform text-gray-900 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-gray-700" />
    </a>
  );
};

const ArrowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
    <g clipPath="url(#a)">
      <path
        d="M4.23 4.23v1.33h5.26L3.76 11.3l.94.94 5.74-5.73v5.26h1.33V4.23H4.23Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="currentColor" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default LinkButton;
