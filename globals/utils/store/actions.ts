import {IDispatcher} from "./state";
import {IStoreEncapsulations} from "./index";

export type IParseSliderActionContext<Store extends IActionContext> = Pick<Store, keyof IActionContext>;

export interface IActionContext<Props = {}, State = {}, Computed = {}, Setters extends keyof State = never, Mutations = {}> {
  props: Props;
  state: State;
  computed: Computed;
  setters: {
    [P in Setters]: IDispatcher<State[P]>;
  };
  mutations: Mutations;
}

export type IAction<
  ActionContext extends IActionContext,
  Payload = any,
  Return = any,
  Mode extends IStoreEncapsulations = IStoreEncapsulations.strict
> = (
  context?: ActionContext,
  payload?: any
) => Promise<
  Mode extends IStoreEncapsulations.open
    ? Return
    : void
>;

export interface IActionTree<
  ActionContext extends IActionContext = IActionContext
> {
  [index: string]: IAction<ActionContext>;
}

const actionFactory = <
  Props,
  State,
  Computed,
  Setters extends keyof State,
  Mutations,
  Actions,
  ActionContext extends IActionContext = IActionContext<Props, State, Computed, Setters>,
  ActionTree extends IActionTree = IActionTree<ActionContext>
>(
  actionContext: ActionContext,
  actionTree: ActionTree,
  encapsulationMode: IStoreEncapsulations
) => {
  const actions: Record<string, any> = {};
  const actionEntries = Object.entries(actionTree);

  for(const [key, handler] of actionEntries) {
    actions[key] = (payload: any) => Promise.resolve(
      handler(actionContext, payload)
    ).then((payload) => (
      encapsulationMode === IStoreEncapsulations.open
        ? payload
        : null
    ));
  }

  return actions as Actions;
};

export default actionFactory;
