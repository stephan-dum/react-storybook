import {VNode, FunctionComponent} from "preact";
import ISlide from "~/shared/components/SliderCore/Slide/index_d";
import ITransparentWrapper from "../../types/ITransparentWrapper_d";
// Partial<Element & GlobalEventHandlers>
export interface ISliderProps extends ITransparentWrapper {
  children?: VNode<ISlide>[];
  groupSize?: number;
  disable?: {
    sibling?: boolean;
    infinite?: boolean;
  }
}

type ISlider = FunctionComponent<ISliderProps>;

export default ISlider;
