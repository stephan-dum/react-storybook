import {ISliderProps} from "../index_d";
import {ISliderState, ISliderStateSetters} from "./state/index_d";
import {ISliderStateComputed} from "./computed/index_d";
import {ISliderStateMutations} from "./mutations";
import {ISliderStateActions} from "./actions";

export interface ISliderStore {
  props: ISliderProps;
  state: ISliderState;
  computed: ISliderStateComputed;
  setters: ISliderStateSetters;
  mutations: ISliderStateMutations;
  actions: ISliderStateActions;
}

type ISliderStateFactory = (props: ISliderProps) => ISliderStore

export default ISliderStateFactory;
