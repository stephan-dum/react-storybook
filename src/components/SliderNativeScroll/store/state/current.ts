import {IInitProto} from "../../../../globals/utils/store/init";
import {ISliderProps} from "../../index_d";

const current: IInitProto<number, ISliderProps> = {
  watch : ["props.children", "props.groupSize"],
  handler({ children, groupSize }, state) {
    const hash = typeof window !== "undefined" ? document.location.hash.slice(1) : '';

    return Math.max(
      0,
      Math.floor(children.findIndex((child) => child.props.id === hash) / groupSize)
    );
  },
};

export default current;
