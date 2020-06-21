import {FunctionComponent} from "preact";

export interface ISliderLinkProps {
  to: string;
  className?: string;
}

type ISliderLink = FunctionComponent<ISliderLinkProps>

export default ISliderLink;
