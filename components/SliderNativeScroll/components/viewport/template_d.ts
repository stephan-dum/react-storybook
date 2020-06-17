import {VNode} from "preact";

interface ISliderNativeScrollViewportTemplateProps {
  attributes: Partial<Element & GlobalEventHandlers>;
  children: VNode[];
}

type ISliderNativeScrollViewportTemplate = (props: ISliderNativeScrollViewportTemplateProps) => VNode;

export default ISliderNativeScrollViewportTemplate;
