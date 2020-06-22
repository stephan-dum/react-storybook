import CSSAnimationTemplate from "./template";
import ICSSAnimation from "./index_d";
import cssAnimationCreateAnimation from "./utils/createAnimation";

const CSSAnimation: ICSSAnimation = (props) => {
  const {
    name,
    duration,
    frames,
    template,
    children
  } = props;

  const style = {
    "animationDuration" : duration + "s",
    "animationName" : name,
  };

  const animation = cssAnimationCreateAnimation(
    name,
    frames,
  );

  return CSSAnimationTemplate({
    animation,
    children : template({ style, children })
  });
};

export default CSSAnimation;
