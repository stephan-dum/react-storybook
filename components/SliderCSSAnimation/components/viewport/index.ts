import AnimationSliderViewportTemplate from "./template";
import {computedFactory} from "~/globals/utils/store/computed";
import animationProto from "./computed/animation";
import {IAnimationSliderProps} from "../../index_d";

const AnimationSliderViewport = (props: IAnimationSliderProps) => {
  const animation = computedFactory(animationProto, props);

  return AnimationSliderViewportTemplate({
    animation,
    children: props.children
  });
};

export default AnimationSliderViewport;
