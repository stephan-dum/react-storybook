import {FunctionComponent, VNode} from "preact";
import ReactStyle from "../../globals/components/ReactStyle";
import {ICSSStyle} from "../../globals/types/ICSSStyle";

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
