import {ISliderMutationContext} from "./index";

const setIndex = ({state, setters}: ISliderMutationContext, event: React.UIEvent<HTMLElement, UIEvent>) => {
  const target = event.target as HTMLElement;
  const left = target.scrollLeft;
  const { width } = target.getBoundingClientRect();
  const tolerance = width / 2;
  const remaining = Math.floor(left) % Math.floor(width);

  if(
    remaining >= 0 && remaining <= tolerance
    || remaining >= tolerance
  ) {
    setters.current(
      // TODO: use a modulo llike Math.abs(newIndex % state.links.length - 1);
      // restrict from 0 to state.links.length - 1
      Math.max(
        0,
        Math.min(
          state.links.length - 1,
          Math.round(left / width)
        )
      )
    );
  }
};

export default setIndex;
