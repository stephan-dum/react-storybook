import {ISliderProps} from "../../index_d";
import {ISliderState, ISliderStateSetters} from "../state/index_d";
import {ISliderStateComputed} from "../computed/index_d";
import scroll from "./scroll";

export interface ISliderStateMutations {
  scroll: (event: React.UIEvent<HTMLElement, UIEvent>) => void;
}

export interface ISliderMutationContext {
  props: ISliderProps;
  state: ISliderState;
  setters: ISliderStateSetters;
  computed: ISliderStateComputed;
}

export const sliderStateMutations = {
  scroll
};
