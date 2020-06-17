import {VNode, FunctionComponent} from "preact";
import ISlide from "~/shared/SliderCore/Slide/index_d";
import ITransparentWrapper from "~/globals/types/ITransparentWrapper_d";

export interface ISliderProps extends ITransparentWrapper {
  children?: VNode<ISlide>[];
  start?: number;
  groupSize?: number;
  disable?: {
    sibling?: boolean;
    infinite?: boolean;
  }
}

type ISlider = FunctionComponent<ISliderProps>;

export default ISlider;
