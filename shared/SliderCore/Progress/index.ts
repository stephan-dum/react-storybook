import ISliderProgress from "./definitions";
import {computedFactory} from "~/globals/utils/store/computed";
import defaultProps from "./defaultProps";
import SliderProgressComputedAnimation from "./computed/animation";
import Index from "./template";

const SliderProgress: ISliderProgress = (props) =>  Index({
  animation : computedFactory(
    SliderProgressComputedAnimation,
    props
  ),
});

SliderProgress.defaultProps = defaultProps;

export default SliderProgress;
