import classNameHelper from "classnames";

declare global {
  function classNames(...args: Parameters<typeof classNameHelper>): string;
}

