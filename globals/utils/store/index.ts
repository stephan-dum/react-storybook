import actionFactory, {IActionContext, IActionTree} from "./actions";
import computedFactory, {IComputed, IComputedTree} from "./computed";
import mutationFactory, {IMutationContext, IMutationTree} from "./mutations";

import stateFactory from "./state";
import {IStoreStateModes} from "./state";
import {useMemo} from "~/node_modules/preact/hooks";


export enum IStoreEncapsulations {
  strict = "strict",
  open = "open"
}

interface IStore<
  Props,
  State,
  Computed,
  Setters extends keyof State,
  Mutations,
  Actions
> {
  init: (props: Props) => State;
  mutable?:string[];
  mutations?: IMutationTree<
    IMutationContext<
      Props,
      State,
      Computed,
      Setters
    >
  >;
  actions?: IActionTree<
    IActionContext<
      Props,
      State,
      Computed,
      Setters,
      Mutations
    >
  >;
  computed?: {
    [P in keyof Computed]: IComputed<Computed[P], Props, State>
  };
  modes?: Partial<{
    state: IStoreStateModes,
    encapsulation: IStoreEncapsulations
  }>;
}


export default <
  Props,
  State,
  Computed,
  Setters extends keyof State,
  Mutations = never,
  Actions = never
>(
  props: Props,
  store: IStore<Props, State, Computed, Setters, Mutations, Actions>
) => {
  const {
    init,
    modes = {},
    mutable = [],
    computed : rawComputed = {},
    actions : rawActions = {},
    mutations : rawMutations = {}
  } = store;

  const {
    state : stateMode = IStoreStateModes.immutable,
    encapsulation : encapsulationMode = IStoreEncapsulations.strict,
  } = modes;

  const initState = useMemo(() => init && init(props) || {} as State, [init, props]);
  const {state, setters} = stateFactory<State, Setters>(initState, mutable, stateMode);
  const computed = computedFactory<Props, State, Computed>({ props, state }, rawComputed);
  const mutations = mutationFactory<Props, State, Computed, Setters, Mutations>({ props, state, setters, computed }, rawMutations, encapsulationMode);
  const actions = actionFactory<Props, State, Computed, Setters, Mutations, Actions>({ props, state, setters, computed, mutations }, rawActions, encapsulationMode);

  return {
    props,
    state,
    setters,
    computed,
    mutations,
    actions,
  };
}
