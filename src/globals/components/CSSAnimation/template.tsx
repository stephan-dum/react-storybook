import {FunctionComponent, VNode} from "preact";
import ReactStyle from "../ReactStyle";

type ICSSAnimationTemplate = FunctionComponent<{
  children: VNode | VNode[];
  animation: string;
}>;

const CSSAnimationTemplate: ICSSAnimationTemplate = ({ animation, children }) => {

  return (
    <>
      <ReactStyle>{animation}</ReactStyle>
      {children}
    </>
  );
};

export default CSSAnimationTemplate;
