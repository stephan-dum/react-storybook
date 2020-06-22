import {createElement, FunctionComponent} from 'preact';
import ISliderCoreSlide from "../../Slide/index_d";

interface ISliderSlotDefaultProps extends ISliderCoreSlide {
  className: string;
  is?: string;
}

const DEFAULT_IS = "article";
const DEFAULT_CLASSNAME = "slider__slide";

const Slide: FunctionComponent<ISliderSlotDefaultProps> = ({
  id,
  is = DEFAULT_IS,
  className = DEFAULT_CLASSNAME,
  children,
}) => createElement(
  is,
  {
    id,
    className,
  },
  children
);

export default Slide;
