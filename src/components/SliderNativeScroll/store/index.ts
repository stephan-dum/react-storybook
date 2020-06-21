import storeFactory from "../../../globals/utils/store";
import { init } from "./state";
import { sliderStateComputed } from "./computed";
import { sliderStateMutations } from "./mutations";
import sliderStateActions from "./actions";
import ISliderStateFactory from "./index_d";
import {ISliderStateMutable} from "./state/index_d";

const sliderStoreProto = {
  init,
  mutable : Object.keys(ISliderStateMutable) as ISliderStateMutable[],
  computed : sliderStateComputed,
  mutations : sliderStateMutations,
  actions: sliderStateActions,
};

const sliderStateFactory: ISliderStateFactory = (props) => storeFactory(
  props,
  sliderStoreProto,
);


export default sliderStateFactory;
