import CSSAnimation from "~/globals/components/CSSAnimation";
import {IAnimationTemplate} from "~/globals/components/CSSAnimation/index_d";
import ISliderProgressTemplate from "./index_d";
import "./style.scss";

const ProgressAnimationTemplate: IAnimationTemplate = ({ style }) => (
  <div className="slider-progress" style={style}/>
);

const ProgressTemplate: ISliderProgressTemplate = ({ animation }) => (
  <CSSAnimation {...animation} template={ProgressAnimationTemplate}/>
);

export default ProgressTemplate;
