import {ISliderProps} from "./index_d";
import {ISliderStateComputed} from "./store/computed";
import {ISliderState} from "./store/state";
import {ISliderSiblingDirections} from "./components/LinkSibling/index_d";

import SliderLinkSibling from "./components/LinkSibling";
import SliderLinkList from "./components/LinkList";
import debounce from "lodash/debounce";

import "./style.scss";

export type ISliderComponentContext = (
  {
    children: ISliderProps["children"];
    attributes: Partial<Element & GlobalEventHandlers>
    onScroll: ReturnType<typeof debounce>;
    className: string;
  }
  & ISliderStateComputed
  & ISliderState
);

export default ({
  children,
  previous,
  attributes,
  className,
  onScroll,
  next,
  links,
  index
}: ISliderComponentContext) => (
  <section className="slider-native-scroll">
    <div onScroll={onScroll} className={className} {...attributes}>
      {children}
    </div>
    <SliderLinkSibling to={previous} direction={ISliderSiblingDirections.left}/>
    <SliderLinkSibling to={next} direction={ISliderSiblingDirections.right}/>
    <SliderLinkList links={links} current={index}/>
  </section>
);

