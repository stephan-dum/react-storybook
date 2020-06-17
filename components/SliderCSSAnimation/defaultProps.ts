import {IAnimationSliderProps} from "./index_d";

let nameCounter = 0;

const DefaultProps: IAnimationSliderProps = {
  get name() { return 'animationSlider-' + (nameCounter++); },
  displayTime : 2,
  transitionTime : 0.5,
  keyframes : (index: number) => ({ "left" : `${index * - 100}%`})
};

export default DefaultProps;
