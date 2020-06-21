import {FunctionComponent} from "react";
import {ICssJson} from "../../utils/cssJsonToString/cssJsonToStringClassDeinitions";

export interface IReactStyleProps {
  children: string | ICssJson;
}

type IReactStyle = FunctionComponent<IReactStyleProps>;

export default IReactStyle;
