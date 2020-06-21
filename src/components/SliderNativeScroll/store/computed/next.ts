import {ISliderStateComputedProto} from "./index_d";

const next: ISliderStateComputedProto<string> = {
  watch : ["state.current", "state.links", "props.disable"],
  handler(props, state) {
    const {sibling, infinite} = props.disable;
    const { current, links } = state;

    if (sibling || (infinite && current + 1 >= links.length)) {
      return '';
    }

    return links[(current + 1) % Math.max(1, links.length)];
  },
};

export default next;
