import {IComputed} from "~/globals/store/computed";
import {ICSSAnimationProps} from "~/globals/components/CSSAnimation/index_d";
import {IAnimationSliderProps} from "../index_d";

type IAnimationSliderViewportComputedAnimation = IComputed<Omit<ICSSAnimationProps, "children" | "template">, IAnimationSliderProps>;

export default IAnimationSliderViewportComputedAnimation;
