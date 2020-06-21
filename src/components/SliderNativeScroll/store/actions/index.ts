// TODO: there shuold be a type helper to get this from main type ie ISliderStore same for mutation context and computed conted
import {ISliderMutationContext, ISliderStateMutations} from "../mutations";
import loadSlides from "./loadSlides";
import {IAction, IActionContext, IActionTree, IParseSliderActionContext} from "../../../../globals/utils/store/actions";
import {ISliderStore} from "../index_d";

// export interface ISliderActionContext extends ISliderMutationContext {
//   mutations: ISliderStateMutations
// }

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


