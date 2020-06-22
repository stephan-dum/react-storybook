import {FunctionComponent} from "react";
import {IAnimationSliderProps} from "./index_d";
import classNames from "classnames";
import Template from "./template";
import defaultProps from "./defaultProps";
import "./style.scss";
import {computedFactory} from "~/globals/store/computed";
import animationProto from "./computed/animation";

const AnimationSlider: FunctionComponent<IAnimationSliderProps> = (props) => {
  const {
    children,
    displayTime,
    transitionTime,
    keyframes,
    name,
    disable,
    ...attributes
  } = props;

  const animation = computedFactory(animationProto, props);

  return Template({
    attributes : attributes,
    className : classNames('animation-slider', attributes.className),
    progress : {
      displayTime,
      transitionTime,
    },
    animation,
    children
  });
};

AnimationSlider.defaultProps = defaultProps;

export default AnimationSlider;
