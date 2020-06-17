import {ISliderLinkProps} from "~/components/SliderNativeScroll/components/Link/index_d";
import {FunctionComponent, VNode} from "preact";

export interface ISliderLinkListProps {
  links: ISliderLinkProps['to'][];
  current: number;
}

export type IGetLink = (this: number, to: string, index: number) => VNode;

type ISliderLinkList = FunctionComponent<ISliderLinkListProps>;

export default ISliderLinkList;
