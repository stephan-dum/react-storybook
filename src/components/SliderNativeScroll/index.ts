import {FunctionComponent} from 'preact';
import {useCallback} from "preact/hooks";
import {ISliderProps} from "./index_d";
import sliderStoreFactory from "./store";
import defaultProps from "./defaultProps";
import template from "./template";
import {debounce} from "lodash";

const DEBOUNCE_INTERVAL = 10;

export const  SliderNativeScroll: FunctionComponent<ISliderProps> = (props) => {
  const { state, computed, mutations } = sliderStoreFactory(props);

  const onScroll = useCallback(
    debounce(mutations.scroll, DEBOUNCE_INTERVAL),
    []
  );

  const { links, attributes, children } = state;

  return template({
    onScroll,
    attributes,
    children,
    links,
    ...computed
  });
};

SliderNativeScroll.defaultProps = defaultProps;

export default SliderNativeScroll;
