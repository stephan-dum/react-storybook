import {FunctionComponent} from "react";
import {IAnimationSliderProps} from "./index_d";

import Template from "./template";
import defaultProps from "./defaultProps";
import "./style.scss";

const AnimationSlider: FunctionComponent<IAnimationSliderProps> = ({
  children,
  displayTime,
  transitionTime,
  keyframes,
  name,
  start,
  disable,
  ...attributes
}) => {
  attributes.className = 'animation-slider ' + (attributes.className || "");

  return Template({
    attributes : attributes,
    progress : {
      displayTime,
      transitionTime,
    },
    viewport : {
      children,
      displayTime,
      transitionTime,
      keyframes,
      name,
      start,
      disable
    }
  });
};

AnimationSlider.defaultProps = defaultProps;

export default AnimationSlider;
