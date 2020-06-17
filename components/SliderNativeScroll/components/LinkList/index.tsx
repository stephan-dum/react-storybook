import ISliderLinkList, {IGetLink} from "~/components/SliderNativeScroll/components/LinkList/index_d";
import SliderLink from "../Link";
import getClassName from "./helpers/getClassName";

const getLink: IGetLink = function(to, index) {
  return (
    <li key={index} className={getClassName(index, this)}>
      <SliderLink to={to}/>
    </li>
  )
};

const SliderLinkList: ISliderLinkList = ({ links, current}) => (
  <ul className="slider-link-list">
    {links.map(getLink, current)}
  </ul>
);

export default SliderLinkList;
