import {ISliderMutationContext} from "./index";

const setIndex = ({state, setters}: ISliderMutationContext, newIndex: number) => {
  setters.index(
    Math.max(
      0,
      Math.min(
        state.links.length - 1,
        newIndex
      )
    )
  );
  // return {
  //   ...state,
  //   index: Math.max(
  //     0,
  //     Math.min(
  //       state.links.length - 1,
  //       newIndex
  //     )
  //   ),
  // }
};

export default setIndex;
