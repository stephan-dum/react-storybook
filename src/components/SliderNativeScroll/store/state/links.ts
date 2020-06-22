import {IInitProto} from "~/globals/store/init";
import {ISliderProps} from "../../index_d";

const links: IInitProto<string[], ISliderProps> = {
  watch : ["props.children", "props.groupSize"],
  handler({ children, groupSize }) {
    const length = children.length;
    const links: string[] = [];

    for(let i = 0; i < length; i += groupSize) {
      links.push(children[i].props.id);
    }

    return links;
  },
};

export default links;
