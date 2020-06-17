import {FunctionComponent} from 'preact';
import {ICSSStyle} from "../../../globals/types/ICSSStyle";

export type ISliderProgressProps = Partial<{
  displayTime: number;
  transitionTime: number;
  keyframes: [ICSSStyle, ICSSStyle, ICSSStyle],
  name: string
}>

type ISliderProgress = FunctionComponent<ISliderProgressProps>;

export default ISliderProgress;
