import {ISliderSiblingDirections} from "./components/LinkSibling/index_d";
import ISliderTemplate from "./template_d";

import classNames from "classnames";

import sliderLinkList from "./components/LinkList";
import SliderLinkSibling from "./components/LinkSibling";

import "./style.scss";

const SliderTemplate: ISliderTemplate = ({
  children,
  previous,
  attributes,
  onScroll,
  next,
  links,
  isActive
}) => (
  <section
    {...attributes}
    className={classNames("slider-native-scroll", attributes.className)}
  >
    <div onScroll={onScroll} className='slider-native-viewport'>
      {children}
    </div>
    <SliderLinkSibling to={previous} direction={ISliderSiblingDirections.left}/>
    <SliderLinkSibling to={next} direction={ISliderSiblingDirections.right}/>
    <ul className="slider-link-list">
      {links.map(sliderLinkList, { isActive })}
    </ul>
  </section>
);

export default SliderTemplate;
