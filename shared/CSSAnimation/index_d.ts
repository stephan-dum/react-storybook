import {VNode} from "preact";
import {IKeyFrame} from "./utils/createAnimation_d";
import {ICSSStyle} from "~/globals/types/ICSSStyle";

export interface ICSSAnimationProps {
  name: string,
  frames: IKeyFrame[];
  duration: number;
  children: (props: {style: ICSSStyle}) => VNode;
}

type ICSSAnimation = (props: ICSSAnimationProps) => VNode;

export default ICSSAnimation;
