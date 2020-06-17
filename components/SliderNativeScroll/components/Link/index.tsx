import ISliderLink, {IGetClassName} from "./index_d";

const getClassName: IGetClassName = (className) => [
  'slider-link',
  className
].join(' ');

const SliderLink: ISliderLink = ({ to, className, children }) =>  (
  <a className={getClassName(className)} href={`#${to}`}>
    {children}
  </a>
);

export default SliderLink;
