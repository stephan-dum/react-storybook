import {EffectCallback, Inputs, useEffect, useRef} from "preact/hooks";

const useEffectSkipInitial = (effect: EffectCallback, inputs: Inputs) => {
  const didMountRef = useRef(false);

  useEffect(() => {
    if (didMountRef.current)
      effect();
    else
      didMountRef.current = true;
  }, inputs);
};

export default useEffectSkipInitial;
