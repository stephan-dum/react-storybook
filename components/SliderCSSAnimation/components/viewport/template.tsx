import {FunctionComponent} from "preact";
import {IAnimationSliderViewportTemplateProps} from "./index_d";
import CSSAnimation from "~/shared/CSSAnimation";
import "./style.scss";

const AnimationSliderViewportTemplate: FunctionComponent<IAnimationSliderViewportTemplateProps> = ({ animation, children }) => (
  <div className="animation-slider-viewport">
    <CSSAnimation {...animation}>
      <div className="animation-slider-animation">
        {children}
      </div>
    </CSSAnimation>
  </div>
);

export default AnimationSliderViewportTemplate;
