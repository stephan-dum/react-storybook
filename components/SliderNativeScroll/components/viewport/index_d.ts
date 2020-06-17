import {FunctionComponent, VNode} from "preact";
import {ISliderStateMutations} from "~/components/SliderNativeScroll/store/mutations";

interface ISliderNativeScrollViewportProps {
  children: VNode[];
  mutations: ISliderStateMutations;
}

type ISliderNativeScrollViewport = FunctionComponent<ISliderNativeScrollViewportProps>;

export default ISliderNativeScrollViewport;
