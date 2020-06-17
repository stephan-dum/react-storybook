import {ISliderProps} from "~/components/SliderNativeScroll/index_d";
import {ICSSStyle} from "~/globals/types/ICSSStyle";

export type IAnimationSliderProps = Partial<
  ISliderProps
  & {
    displayTime: number;
    transitionTime: number;
    keyframes: (index: number) => ICSSStyle;
    name: string;
  }
>;

