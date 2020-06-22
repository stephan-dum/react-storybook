import {initFactory} from "~/globals/store/init";
import links from "./links";
import current from "./current";
import ISliderInitState from "./index_d";


export const init: ISliderInitState = (props) => {
  const {
      children,
      groupSize,
      ...attributes
  } = props;

  return {
    current : initFactory(current, props),
    links : initFactory(links, props),
    children,
    attributes,
  }
};

