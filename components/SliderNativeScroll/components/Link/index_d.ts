import {FunctionComponent} from "preact";

export interface ISliderLinkProps {
  to: string;
  className?: string;
}

export type IGetClassName = (className: string) => string;

type ISliderLink = FunctionComponent<ISliderLinkProps>

export default ISliderLink;
