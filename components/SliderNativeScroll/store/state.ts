import {ReactElement} from "react";
import {ISliderProps} from "../index_d";
import {VNode} from "preact";
import ISliderCoreSlide from "~/shared/SliderCore/Slide/index_d";

const getLinks = (children: VNode<ISliderCoreSlide>[], groupSize = 1) => {
  const length = children.length;
  const links: string[] = [];

  for(let i = 0; i < length; i += groupSize) {
      links.push(children[i].props.id);
  }

  return links;
};

export interface ISliderState {
  readonly links: string[];
  index: number;
}

export enum ISliderStateMutable {
  index = "index",
}

export type ISliderStateSetters = {
  [P in ISliderStateMutable]: (payload: ISliderState[P]) => void;
}

export const init = ({ children, groupSize, start }: ISliderProps) => ({
  // TODO: start is not a prop it should be calculated based on the current scroll position
  // TODO: add ssr frist
  index : start,
  links : getLinks(children, groupSize),
});

