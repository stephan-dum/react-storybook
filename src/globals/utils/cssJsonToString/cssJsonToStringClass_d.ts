import {ICssClassBody} from "./cssJsonToStringClassBody_d";

export interface ICssClass {
  selector: string | string[];
  body: ICssClassBody
}

export type ICssJson = ICssClass | ICssClass[];

type IReactStyleClassToString = (cssJson: ICssJson) => string;

export default IReactStyleClassToString;
