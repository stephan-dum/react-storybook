import {FunctionComponent, VNode} from "preact";

export enum ISliderSiblingDirections {
  left = "left",
  right = "right",
  unset = "unset"
}

export type ISliderSiblingDirectionsImage = {
  [Key in ISliderSiblingDirections]?: VNode | string;
}

export interface ISliderLinkSiblingProps {
  to: string;
  direction: ISliderSiblingDirections;
}

type ISliderLinkSibling = FunctionComponent<ISliderLinkSiblingProps>;

export default ISliderLinkSibling;
