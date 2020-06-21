import {ISliderStateComputedProto} from "./index_d";

const isActive: ISliderStateComputedProto<(index: number) => boolean> = {
  watch : ["state.current"],
  handler : (props, {current}) => (index) => current === index
};

export default isActive;
