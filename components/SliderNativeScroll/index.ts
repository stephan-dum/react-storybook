import {FunctionComponent} from 'preact';
import {useCallback, useEffect} from "preact/hooks";
import {ISliderProps} from "./index_d";
import sliderStoreFactory from "./store";
import defaultProps from "./defaultProps";
import template from "./template";
import debounce from "lodash/debounce";
import transformScrollToIndex from "~/components/SliderNativeScroll/events/scroll";

const DEBOUNCE_INTERVAL = 10;
const DEFAULT_CLASSNAME = 'slider-native-viewport';

export const  SliderNativeScroll: FunctionComponent<ISliderProps> = (props) => {
  const {
    children,
    disable,
    groupSize,
    onScroll : parentOnScroll,
    className : parentClassName,
    ...attributes
  } = props;
  const { state, computed, mutations } = sliderStoreFactory(props);

  const onScroll = useCallback(
    debounce(
      (event: React.UIEvent<HTMLElement, UIEvent>) => {
        // TODO: use a mutation instead
        transformScrollToIndex(mutations, event);

        if(parentOnScroll) {
          parentOnScroll(event);
        }
      },
      DEBOUNCE_INTERVAL
    ),
    []
  );
  console.log("state", state);
  const className = classNames(DEFAULT_CLASSNAME, parentClassName);

  return template({
    children,
    attributes,
    className,
    onScroll,
    ...computed,
    ...state,
  });
};

SliderNativeScroll.defaultProps = defaultProps;

export default SliderNativeScroll;
