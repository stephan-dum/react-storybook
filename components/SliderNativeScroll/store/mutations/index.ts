import {ISliderProps} from "../../index_d";
import {ISliderState, ISliderStateSetters} from "../state";
import {ISliderStateComputed} from "../computed";
import setIndex from "./setIndex";

export interface ISliderStateMutations {
  setIndex: (index: number) => void;
}

export interface ISliderMutationContext {
  props: ISliderProps;
  state: ISliderState;
  setters: ISliderStateSetters;
  computed: ISliderStateComputed;
}

export const sliderStateMutations = {
  setIndex
};
