
# Example

## template

### Slider/template_d.ts
````typescript
import {VNode} from "preact";
import {HTMLAttributes} from "react";

export interface ISliderTemplateProps {
  onScroll: (event: React.UIEvent<HTMLElement, UIEvent>) => void;
  links: string[];
  isActive: (index: number) => boolean;
  next: string;
  previous: string;
  children: VNode[];
  attributes: HTMLAttributes<HTMLElement>;
}

type ISliderTemplate = (props: ISliderTemplateProps) => VNode;

export default ISliderTemplate;
````
### Slider/template.tsx
````JSX
import {ISliderSiblingDirections} from "./components/LinkSibling/index_d";
import ISliderTemplate from "./template_d";

import classNames from "classnames";

import sliderLinkList from "./components/LinkList";
import SliderLinkSibling from "./components/LinkSibling";

import "./style.scss";

const SliderTemplate: ISliderTemplate = ({
  children,
  previous,
  attributes,
  onScroll,
  next,
  links,
  isActive
}) => (
  <section
    {...attributes}
    className={classNames("slider-native-scroll", attributes.className)}
  >
    <div onScroll={onScroll} className='slider-native-viewport'>
      {children}
    </div>
    <SliderLinkSibling to={previous} direction={ISliderSiblingDirections.left}/>
    <SliderLinkSibling to={next} direction={ISliderSiblingDirections.right}/>
    <ul>
      {links.map(sliderLinkList, { isActive })}
    </ul>
  </section>
);

export default SliderTemplate;

````


## controller

### Slider/index_d.ts
````typescript
import { FunctionComponent, VNode } from "preact";
import debounce from "lodash/debounce";

export interface ISlideSlide {
      key: string | number;
      id: string;
}

export interface ISliderProps {
    children?: VNode<ISlideSlide>[];
}

export type ISlider = FunctionComponent<ISliderProps>;

export default ISlider;
````

### Slider/index.ts
```typescript
import ISlider from "./index_d";

import { useCallback } from "preact/hooks";
import debounce from "lodash/debounce";

// see the next capter for implementation
import sliderStoreFactory from "./store";
import template from "./template";

const DEBOUNCE_INTERVAL = 10;

const Slider: ISlider = (props) => {
  const {
    onScroll : parentOnScroll,
    ...restProps
  } = props;

  const { state, computed, mutations } = sliderStoreFactory(restProps);

  const { scroll } = mutations;

  const onScroll = useCallback(
    debounce(
      (event: React.UIEvent<HTMLElement, UIEvent>) => {
        scroll(event.target);

        if(parentOnScroll) {
          parentOnScroll(event);
        }
      },
      DEBOUNCE_INTERVAL
    ),
    []
  );

  return template({
    onScroll,
    ...computed,
    ...state,
  });
};

Slider.defaultProps = {
    start : 0,
    groupSize : 1,
    disable : {
        sibling: false,
        infinite: false,
    }
};

export default Slider;

```

## store

