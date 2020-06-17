import {ISliderStateComputedProto} from "./index";

const next: ISliderStateComputedProto<string> = {
  watch : ["state.index", "state.links", "props.disable"],
  handler(props, state) {
    const {sibling, infinite} = props.disable;
    const { index, links } = state;

    if (sibling || (infinite && index + 1 >= links.length)) {
      return '';
    }

    return links[(index + 1) % Math.max(1, links.length)];
  },
};

export default next;
