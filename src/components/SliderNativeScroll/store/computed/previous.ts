import {ISliderStateComputedProto} from "./index_d";

const previous: ISliderStateComputedProto<string> = {
  watch : ["state.current", "state.links", "props.disable"],
  handler(props, state) {
    const { sibling, infinite } = props.disable;
    const { current, links } = state;

    if (sibling || (infinite && current === 0)) {
      return '';
    }

    return links[
      current === 0
        ? Math.max(0, links.length - 1)
        : current - 1
      ];
  },
};

export default previous;
