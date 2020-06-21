import {useMemo, useRef} from "preact/hooks";
import getObservable from "./getObservable";


export interface IInitProto<Return = any, Props = {}> {
  watch: string | string[];
  handler(props: Props, oldValue: Return): Return;
}

export const initFactory = <Props = {}>(
  computedProto: IInitProto,
  props: Props = {} as Props
) => {
  const {
    watch,
    handler
  } = computedProto;

  const context = {props};
  const observe = getObservable(context, watch);

  const oldValue = useRef({});
  return useMemo(
    () => {
      const newState = handler(props, oldValue.current);
      oldValue.current = {...newState};
      return newState;
    },
    observe
  );
};
