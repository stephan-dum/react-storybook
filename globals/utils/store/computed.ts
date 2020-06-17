import {useMemo, useRef} from "preact/hooks";
import getObservable from "~/globals/utils/store/getObservable";

export interface IComputed<Return = any, Props = {}, State = {}> {
  watch: string | string[];
  handler(props: Props, newState: State, oldState: State): Return;
}

export interface IComputedTree<Props = {}, State = {}, Computed = {}> {
  [index: string]: IComputed<any, Props, State>;
}

export const computedFactory = <Props = {}, State = {}>(
  computedProto: IComputed,
  props: Props = {} as Props,
  state: State = {} as State
) => {
  const {
    watch,
    handler
  } = computedProto;

  const context = { state, props };
  const observe = getObservable(context, watch);
  const oldState = useRef({});

  return useMemo(
    () => {
      // TODO: try using a Proxy to get all props used and finally making watch option unnessasary
      const newState = handler(props, state, oldState.current);
      oldState.current = {...state};
      return newState;
    },
    observe
  );
};


const computedTreeFactory = <Props, State, Computed>(
  {
    props,
    state,
  }: {
    props: Props,
    state: State,
  },
  computedTree: IComputedTree<Props, State, Computed>
): Computed => {
  const computed: Record<string, any> = {};

  const effects = Object.entries(computedTree);

  for(const [key, computedProto] of effects) {
    computed[key] = computedFactory<Props, State>(computedProto, props, state);
  }

  return computed as Computed;
};

export default computedTreeFactory;
