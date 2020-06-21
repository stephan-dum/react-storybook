import ISliderLink from "./index_d";
import classNames from "classnames";

const SliderLink: ISliderLink = ({ to, className, children }) =>  (
  <a className={classNames('slider-link', className)} href={`#${to}`}>
    {children}
  </a>
);

export default SliderLink;
