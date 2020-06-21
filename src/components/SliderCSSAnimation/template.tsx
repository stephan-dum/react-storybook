import {VNode, FunctionComponent} from "preact";
import {HTMLAttributes} from "react";
import SliderProgress from "~/shared/SliderCore/Progress";
import CSSAnimation from "~/shared/CSSAnimation";
import {ICSSAnimationProps} from "~/shared/CSSAnimation/index_d";
import {ICSSStyle} from "~/globals/types/ICSSStyle";
import {IAnimationSliderProps} from "./index_d";

interface IAnimationSliderTemplateProps {
  className: string;
  progress: Pick<IAnimationSliderProps, "displayTime" | "transitionTime">
  attributes: HTMLAttributes<HTMLElement>;
  animation: ICSSAnimationProps;
  children : VNode[];
}

type IAnimationSliderTemplate = (props: IAnimationSliderTemplateProps) => VNode;

const AnimationTemplate: FunctionComponent<{ style: ICSSStyle }> = ({style, children}) => (
  <div style={style} className="animation-slider-animation">
    {children}
  </div>
);

const Template: IAnimationSliderTemplate = ({
  className,
  children,
  animation,
  attributes,
  progress
}) => (
  <section className={className} {...attributes}>
    <div className="animation-slider-viewport">
      <CSSAnimation {...animation} template={AnimationTemplate}>
        {children}
      </CSSAnimation>
    </div>
    <SliderProgress {...progress}/>
  </section>
);

export default Template;
