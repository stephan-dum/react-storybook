import {VNode} from "preact";
import {IKeyFrame} from "./utils/createAnimation_d";
import {ICSSStyle} from "../../globals/types/ICSSStyle";

export interface ICSSAnimationProps {
  name: string,
  frames: IKeyFrame[];
  duration: number;
  children?: VNode | VNode[];
  template: (props: {style: ICSSStyle, children: VNode | VNode[]}) => VNode;
}

type ICSSAnimation = (props: ICSSAnimationProps) => VNode;

export default ICSSAnimation;
