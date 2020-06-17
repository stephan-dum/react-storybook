import template from "./template";
import "../../style.scss";
import ISliderNativeScrollViewport from "~/components/SliderNativeScroll/components/viewport/index_d";

const SliderNativeScrollViewport: ISliderNativeScrollViewport = (props) => {
  const {
    children,
  } = props;

  return template({
    attributes : {
      onscroll,
    },
    children
  })
};

export default SliderNativeScrollViewport;
