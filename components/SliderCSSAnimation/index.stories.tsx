import {FunctionComponent} from "preact";
import AnimationSlider from "./index";
import dummySlides from "~/shared/SliderCore/DummySlides";
import "./themes.ghost.scss";

const SliderCSSAnimationIndexStory: FunctionComponent = () => {
  return (
    <AnimationSlider>
      {dummySlides()}
    </AnimationSlider>
  )
};

export default SliderCSSAnimationIndexStory;
