import {ISliderStateComputedProto} from "../computed";

const links: ISliderStateComputedProto<string[]> = {
  watch : ["props.children", "props.groupSize"],
  handler({ children, groupSize }, state) {
    const length = children.length;
    const links: string[] = [];

    for(let i = 0; i < length; i += groupSize) {
      links.push(children[i].props.id);
    }

    return links;
  },
};

export default links;
