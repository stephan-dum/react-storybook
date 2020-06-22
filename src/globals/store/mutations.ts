import {IStoreEncapsulations} from "./index";
import {IDispatcher} from "./state";

export interface IMutationContext<Props = {}, State = {}, Computed = {}, Setters extends keyof State = never> {
  state: State;
  props: Props;
  computed: Computed;
  setters: {
    [P in Setters]: IDispatcher<State[P]>;
  };
}

export type IMutation<
  MutationContext extends IMutationContext,
  Payload = any,
  Return = any,
  Mode extends IStoreEncapsulations = IStoreEncapsulations.strict
> = (
  context: MutationContext,
  payload: Payload
) => (
  Mode extends IStoreEncapsulations.open
    ? Return
    : void
);

export type IMutationTree<
  MutationContext extends IMutationContext = IMutationContext,
> = {
  [index: string]: IMutation<MutationContext>;
}

const mutationFactory = <
  Props,
  State,
  Computed,
  Setters extends keyof State,
  Mutations,
  MutationContext extends IMutationContext = IMutationContext<Props, State, Computed, Setters>,
  MutationTree extends IMutationTree = IMutationTree<MutationContext>
>(
  mutationContext: MutationContext,
  mutationTree: MutationTree,
  encapsulationMode: IStoreEncapsulations
) => {
  const mutations: Record<string, any> = {};
  const actionEntries = Object.entries(mutationTree);

  for(const [key, handler] of actionEntries) {

    mutations[key] = (payload: any) => {
      const result = handler(mutationContext, payload);
      return (
        encapsulationMode === IStoreEncapsulations.open
          ? result
          : null
      )
    };
  }

  return mutations as Mutations;
};

export default mutationFactory;
