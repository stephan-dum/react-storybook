import previous from "./previous";
import next from "./next";
import {ISliderProps} from "../../index_d";
import {ISliderState} from "../state";
import {IComputed} from "~/globals/utils/store/computed";

export type ISliderStateComputedProto<Return> = IComputed<Return, ISliderProps, ISliderState>;

export const sliderStateComputed = {
  previous,
  next,
};

export interface ISliderStateComputed {
  previous: string;
  next: string;
}
