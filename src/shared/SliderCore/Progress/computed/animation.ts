import {round} from "../../../../globals/utils/round";
import ISliderProgressComputedAnimation from "./animation_d";

const SliderProgressComputedAnimation: ISliderProgressComputedAnimation = {
  watch:["props.displayTime", "props.transitionTime", "props.keyframes", "props.name"],
  handler: (props) => {
    const {
      displayTime,
      transitionTime,
      keyframes,
      name,
    } = props;

    const duration = displayTime + transitionTime;

    return {
      name,
      duration,
      frames : [
        [
          keyframes[0],
          0,
        ],
        [
          keyframes[1],
          round(displayTime / duration * 100),
        ],
        [
          keyframes[2],
          100,
        ],
      ],
    };
  },
};

export default SliderProgressComputedAnimation;
