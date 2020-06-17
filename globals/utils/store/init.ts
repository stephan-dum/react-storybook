import {useMemo, useRef} from "preact/hooks";
import getObservable from "./getObservable";


export interface IInitProto<Return = any, Props = {}, State = {}> {
  watch: string | string[];
  handler(props: Props, newState: State, oldState: State): Return;
}

export const initFactory = <Props = {}, State = {}>(
  computedProto: IInitProto,
  props: Props = {} as Props,
  state: State = {} as State
) => {
  const {
    watch,
    handler
  } = computedProto;

  const context = {state, props};
  const observe = getObservable(context, watch);

  const oldState = useRef({});
  return useMemo(
    () => {
      const newState = handler(props, state, oldState.current);
      oldState.current = {...state};
      return newState;
    },
    observe
  );
};
