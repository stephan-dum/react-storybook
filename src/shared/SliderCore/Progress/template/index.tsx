import CSSAnimation from "../../../CSSAnimation";
import ISliderProgressTemplate from "./definitions";
import "./style.scss";
import {FunctionComponent} from "preact";
import {ICSSStyle} from "~/globals/types/ICSSStyle";

const AnimationTemplate: FunctionComponent<{ style: ICSSStyle }> = ({ style }) => (
  <div className="slider-progress" style={style}/>
);
const Index: ISliderProgressTemplate = ({ animation }) => (
  <CSSAnimation {...animation} template={AnimationTemplate}/>
);

export default Index;
