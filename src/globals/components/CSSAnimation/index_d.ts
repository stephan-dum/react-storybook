import {VNode} from "preact";
import {IKeyFrame} from "./utils/createAnimation_d";
import {ICSSStyle} from "~/types/ICSSStyle";

export type IAnimationTemplate = (props: {style: ICSSStyle, children: VNode | VNode[]}) => VNode;

export interface ICSSAnimationProps {
  name: string,
  frames: IKeyFrame[];
  duration: number;
  children?: VNode | VNode[];
  template: IAnimationTemplate;
}

type ICSSAnimation = (props: ICSSAnimationProps) => VNode;

export default ICSSAnimation;
