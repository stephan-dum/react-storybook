import {StateUpdater, useState} from "preact/hooks";
import PickWritable from "~/globals/types/IPickWriteable";

export type IDispatcher<Type> = StateUpdater<Type>;

export interface ISetterTree {
  [index: string]: (payload: any) => any;
}

export type ISettersFromStore<State> = {
  [Key in keyof PickWritable<State>]: IDispatcher<State[Key]>;
};

export enum IStoreStateModes {
  mutable = "mutable",
  immutable = "immutable"
}

interface IPrototypeDescriptor {
  get: () => any;
  set?: (value: any) => void;
  enumerable: boolean;
}

const stateFactory = <
  State,
  Setters extends keyof State,
  >(initState: State, mutations: Setters[], mode: IStoreStateModes) => {

  const setState: {
    [P in Setters]?: any;
  } = {};

  mutations.forEach((key) => {
    const [value, setValue] = useState(initState[key]);
    initState[key] = value;
    setState[key] = setValue;
  });


  return {
    state : initState as State,
    setters : setState as { [P in Setters]: IDispatcher<State[P]>; }
  };
};

export default stateFactory;
