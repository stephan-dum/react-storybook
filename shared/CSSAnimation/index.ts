import CSSAnimationTemplate from "./template";
import ICSSAnimation from "./index_d";
import cssAnimationCreateAnimation from "./utils/createAnimation";

const CSSAnimation: ICSSAnimation = (props) => {
  const {
    name,
    duration,
    frames,
    children,
  } = props;

  const style = {
    "animation-duration" : duration + "s",
    "animation-name" : name,
  };

  const animation = cssAnimationCreateAnimation(
    name,
    frames,
  );

  return CSSAnimationTemplate({
    animation,
    children : children({ style })
  });
};

export default CSSAnimation;
