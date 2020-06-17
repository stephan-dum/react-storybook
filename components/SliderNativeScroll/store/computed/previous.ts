import {ISliderStateComputedProto} from "./index";

const previous: ISliderStateComputedProto<string> = {
  watch : ["state.index", "state.links", "props.disable"],
  handler(props, state) {
    const { sibling, infinite } = props.disable;
    const { index, links } = state;

    if (sibling || (infinite && index === 0)) {
      return '';
    }

    return links[
      index === 0
        ? Math.max(0, links.length - 1)
        : index - 1
      ];
  },
};

export default previous;
