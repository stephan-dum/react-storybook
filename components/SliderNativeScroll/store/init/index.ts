import {ISliderStateComputedProto} from "../computed";

const index: ISliderStateComputedProto<number> = {
  watch : ["props.children", "props.groupSize"],
  handler({ children, groupSize }, state) {
    const hash = typeof window !== "undefined" ? document.location.hash.slice(1) : '';

    return Math.max(
      0,
      Math.floor(children.findIndex((child) => child.props.id === hash) / groupSize)
    );
  },
};

export default index;
