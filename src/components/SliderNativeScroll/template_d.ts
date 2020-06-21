import {VNode} from "preact";
import {HTMLAttributes} from "react";

export interface ISliderTemplateProps {
  onScroll: (event: React.UIEvent<HTMLElement, UIEvent>) => void;
  links: string[];
  isActive: (index: number) => boolean;
  next: string;
  previous: string;
  children: VNode[];
  attributes: HTMLAttributes<HTMLElement>;
}

type ISliderTemplate = (props: ISliderTemplateProps) => VNode;

export default ISliderTemplate;
