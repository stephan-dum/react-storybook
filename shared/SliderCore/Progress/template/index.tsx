import CSSAnimation from "../../../CSSAnimation";
import ISliderProgressTemplate from "./definitions";
import "./style.scss";

const Index: ISliderProgressTemplate = ({ animation }) => (
  <CSSAnimation {...animation}>
    <div className="slider-progress"/>
  </CSSAnimation>
);

export default Index;
