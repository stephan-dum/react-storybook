import ISliderLinkSibling, {ISliderSiblingDirectionsImage} from "./index_d";
import SliderLink from "../Link";

const sliderSiblingDirectionsTemplate: ISliderSiblingDirectionsImage = {
  left: "<",
  right: ">",
};

const SliderLinkSibling: ISliderLinkSibling  = ({ to, direction }) => {
  return to && (
    <SliderLink to={to} className={`slider-link-sibling slider-link-sibling-`+direction}>
      {sliderSiblingDirectionsTemplate[direction]}
    </SliderLink>
  );
};

export default SliderLinkSibling;
