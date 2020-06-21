import classNames from "classnames";
import ISliderLinkList from "./index_d";
import SliderLink from "../Link";

const sliderLinkList: ISliderLinkList = function(to, index) {
  const className = classNames(
    "slider-link-list__li",
    { 'slider-link-list__li--current' : this.isActive(index) }
  );

  return (
    <li key={index} className={className}>
      <SliderLink to={to}/>
    </li>
  );
};

export default sliderLinkList;
