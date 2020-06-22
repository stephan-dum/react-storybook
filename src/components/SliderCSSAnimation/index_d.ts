import {ISliderProps} from "../SliderNativeScroll/index_d";
import {ICSSStyle} from "~/types/ICSSStyle";

export type IAnimationSliderProps = Partial<
  ISliderProps
  & {
    displayTime: number;
    transitionTime: number;
    keyframes: (index: number) => ICSSStyle;
    name: string;
  }
>;

