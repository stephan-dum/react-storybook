import {ISliderProgressProps} from "./SliderProgressDefinitions";

const keyframes: ISliderProgressProps["keyframes"] = [
  {
    width: '0%',
  }, {
    opacity: 1,
    width:'100%',
  },
  {
    opacity: 0,
    width: '100%',
  }
];

let nameCounter = 0;

export default {
  get name() { return 'progress-' + (nameCounter++); } ,
  displayTime : 2,
  transitionTime : 0.5,
  keyframes,
};
