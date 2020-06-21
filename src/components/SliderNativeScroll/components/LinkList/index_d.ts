import {VNode} from "preact";

interface ILinksListContext {
  isActive: (index: number) => boolean;
}
export type ISliderLinkList = (
  this: ILinksListContext,
  to: string,
  index: number
) => VNode;

export default ISliderLinkList;
