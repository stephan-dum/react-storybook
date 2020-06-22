import {FunctionComponent} from "preact";
import NativeScrollSlider from "../../index";
import dummySlides from "~/shared/components/SliderCore/DummySlides";
import "./style.scss";
const slides = dummySlides();
const SliderNativeScrollIndexStory: FunctionComponent = () => {
  return (
    <NativeScrollSlider>
      {slides}
    </NativeScrollSlider>
  )
};

export default SliderNativeScrollIndexStory;
