import {FunctionComponent} from "preact";
import AnimationSlider from "../index";
import dummySlides from "~/shared/components/SliderCore/DummySlides";
import "./style.scss";

const SliderCSSAnimationIndexStory: FunctionComponent = () => {
  return (
    <AnimationSlider>
      {dummySlides()}
    </AnimationSlider>
  )
};

export default SliderCSSAnimationIndexStory;
