import {IComputed} from "../../../globals/utils/store/computed";
import {ICSSAnimationProps} from "../../../shared/CSSAnimation/index_d";
import {IAnimationSliderProps} from "../index_d";

type IAnimationSliderViewportComputedAnimation = IComputed<Omit<ICSSAnimationProps, "children" | "template">, IAnimationSliderProps>;

export default IAnimationSliderViewportComputedAnimation;
