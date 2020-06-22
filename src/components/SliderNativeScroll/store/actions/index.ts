
import loadSlides from "./loadSlides";
import {IActionContext, IActionTree, IParseSliderActionContext} from "~/globals/store/actions";
import {ISliderStore} from "../index_d";

export type ISliderActionContext = IParseSliderActionContext<ISliderStore>;

const sliderStateActions = {
  loadSlides
};

type IActionTreeParse<
  Actions extends IActionTree<IActionContext>
>= {
  [P in keyof Actions]: (payload?: Parameters<(Actions)[P]>[1]) => void;
};

export type ISliderStateActions = IActionTreeParse<typeof sliderStateActions>;

export default sliderStateActions;


