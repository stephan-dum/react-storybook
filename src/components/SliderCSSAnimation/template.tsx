import SliderProgress from "~/shared/components/SliderCore/Progress";
import CSSAnimation from "~/globals/components/CSSAnimation";
import IAnimationSliderTemplate from "~/components/SliderCSSAnimation/template_d";
import {IAnimationTemplate} from "~/globals/components/CSSAnimation/index_d";


const AnimationTemplate: IAnimationTemplate = ({style, children}) => (
  <div style={style} className="animation-slider-animation">
    {children}
  </div>
);

const SliderCSSAnimationTemplate: IAnimationSliderTemplate = ({
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

export default SliderCSSAnimationTemplate;
