import {HTMLAttributes} from "react";
import {VNode} from "preact";
import {ICSSAnimationProps} from "~/globals/components/CSSAnimation/index_d";
import {IAnimationSliderProps} from "./index_d";

export interface IAnimationSliderTemplateProps {
  className: string;
  progress: Pick<IAnimationSliderProps, "displayTime" | "transitionTime">
  attributes: HTMLAttributes<HTMLElement>;
  animation: ICSSAnimationProps;
  children : VNode[];
}

type IAnimationSliderTemplate = (props: IAnimationSliderTemplateProps) => VNode;

export default IAnimationSliderTemplate;
