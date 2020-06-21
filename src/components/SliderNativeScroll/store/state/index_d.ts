import {HTMLAttributes} from "~/node_modules/@types/react";
import {ISliderProps} from "../../index_d";

export interface ISliderState {
  readonly links: string[];
  readonly attributes: HTMLAttributes<Element>;
  readonly children: ISliderProps["children"];
  current: number;
}

export enum ISliderStateMutable {
  current = "current",
}

export type ISliderStateSetters = {
  [P in ISliderStateMutable]: (payload: ISliderState[P]) => void;
}

type ISliderInitState = (props: ISliderProps) => ISliderState;

export default ISliderInitState;
