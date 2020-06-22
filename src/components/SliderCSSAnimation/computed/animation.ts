import {round} from "~/globals/utils/round";
import {IKeyFrame} from "~/globals/components/CSSAnimation/utils/createAnimation_d";

import IAnimationSliderViewportComputedAnimation from "./animation_d";

const AnimationSliderViewportComputedAnimation: IAnimationSliderViewportComputedAnimation = {
  watch: ["props.displayTime", "props.transitionTime", "props.keyframes", "props.name"],
  handler: (props) => {
    const {
      displayTime,
      transitionTime,
      keyframes,
      name,
      children,
    } = props;

    const length = children.length;
    const totalDisplayTime = displayTime * length;
    const totalTransitionTime = transitionTime * length;
    const totalTime = totalDisplayTime + totalTransitionTime;
    const displayTimeRatio = totalDisplayTime / totalTime / length;
    const transitionTimeRatio = totalTransitionTime / totalTime / length;
    const totalRatio = displayTimeRatio + transitionTimeRatio;

    const frames: IKeyFrame[] = [];
    for(let i = 0; i < length; i++) {
      const start = totalRatio * i;
      const end = start + displayTimeRatio;

      frames.push(
        [
          keyframes(i),
          round(start * 100),
          round(end * 100)
        ]
      );
    }

    // animate back to start
    frames.push(
      [
        keyframes(0),
        100
      ]
    );

    return {
      name,
      frames,
      duration : totalTime,
    };
  },
};

export default AnimationSliderViewportComputedAnimation;
