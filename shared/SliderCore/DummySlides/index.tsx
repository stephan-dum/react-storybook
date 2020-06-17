import DummyDataRandomImage from "./components/RandomImage";
import Slide from "./components/Slide";
import "./style.scss";

const dummySlides = () => [
  <Slide key="1" className="dummy-slide" id="slide_1">
      <DummyDataRandomImage/>
      <h2 className="headline-primary">Hello World</h2>
      <p className="headline-secondary">my sub title comes here</p>
      <a className="button slider-link">action</a>
  </Slide>,
  <Slide key="2" className="dummy-slide" id="slide_2">
    <DummyDataRandomImage/>
    <h2 className="headline-primary">Other header</h2>
    <p className="headline-secondary">super fancy super header here</p>
  </Slide>,
  <Slide is="picture" key="3" className="dummy-slide" id="slide_3">
    <DummyDataRandomImage/>
  </Slide>,
];

export default dummySlides;
