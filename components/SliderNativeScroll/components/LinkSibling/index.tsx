import ISliderLinkSibling, {ISliderSiblingDirectionsImage} from "./index_d";
import SliderLink from "../Link";

const sliderSiblingDirectionsTemplate: ISliderSiblingDirectionsImage = {
  left: "<",
  right: ">",
};

const SliderLinkSibling: ISliderLinkSibling  = ({ to, direction }) => {
  return to && (
    <SliderLink className={`slider-link-sibling slider-link-sibling-`+direction} to={to}>
      {sliderSiblingDirectionsTemplate[direction]}
    </SliderLink>
  );
};

export default SliderLinkSibling;
