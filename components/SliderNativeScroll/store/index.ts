import { ISliderProps } from "../index_d";

import storeFactory from "../../../globals/utils/store";
import { init, ISliderStateSetters, ISliderState, ISliderStateMutable } from "./state";
import { sliderStateComputed, ISliderStateComputed } from "./computed";
import { ISliderStateMutations, sliderStateMutations } from "./mutations";
import sliderStateActions, { ISliderStateActions } from "./actions";

export interface ISliderStore {
  props: ISliderProps;
  state: ISliderState;
  computed: ISliderStateComputed;
  setters: ISliderStateSetters;
  mutations: ISliderStateMutations;
  actions: ISliderStateActions;
}

const sliderStoreProto = {
  init,
  mutable : Object.keys(ISliderStateMutable),
  computed : sliderStateComputed,
  mutations : sliderStateMutations,
  actions: sliderStateActions,
};

const sliderStateFactory = (
  props: ISliderProps
): ISliderStore => storeFactory<
  ISliderProps,
  ISliderState,
  ISliderStateComputed,
  ISliderStateMutable,
  ISliderStateMutations,
  ISliderStateActions
  >(
  props,
  sliderStoreProto,
);


export default sliderStateFactory;
