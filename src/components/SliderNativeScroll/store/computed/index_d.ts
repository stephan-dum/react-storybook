import {IComputed} from "../../../../globals/utils/store/computed";
import {ISliderProps} from "../../index_d";
import {ISliderState} from "../state/index_d";

export type ISliderStateComputedProto<Return> = IComputed<Return, ISliderProps, ISliderState>;

export interface ISliderStateComputed {
  isActive: (index: number) => boolean;
  previous: string;
  next: string;
}
