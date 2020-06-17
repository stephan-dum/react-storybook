import AnimationSliderViewport from "./components/viewport";

import SliderProgress from "~/shared/SliderCore/Progress";
import {IAnimationSliderProps} from "./index_d";
import {VNode} from "preact";

interface IAnimationSliderTemplateProps {
  viewport: IAnimationSliderProps;
  progress: Pick<IAnimationSliderProps, "displayTime" | "transitionTime">
  attributes: {
    [index: string]: any
  };
}

type IAnimationSliderTemplate = (props: IAnimationSliderTemplateProps) => VNode;

const Template: IAnimationSliderTemplate = ({
  viewport,
  attributes,
  progress
}) => (
  <section {...attributes}>
    <AnimationSliderViewport {...viewport} />
    <SliderProgress {...progress}/>
  </section>
);

export default Template;
