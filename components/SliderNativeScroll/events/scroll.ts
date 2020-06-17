import {ISliderStateMutations} from "../store/mutations";

export default ({ setIndex }: ISliderStateMutations, event: React.UIEvent<HTMLElement, UIEvent>) => {
  const target = event.target as HTMLElement;
  const left = target.scrollLeft;
  const { width } = target.getBoundingClientRect();
  const tolerance = width / 2;
  const remaining = Math.floor(left) % Math.floor(width);

  if(
    remaining >= 0 && remaining <= tolerance
    || remaining >= tolerance
  ) {
    setIndex(Math.round(left / width));
  }
};
