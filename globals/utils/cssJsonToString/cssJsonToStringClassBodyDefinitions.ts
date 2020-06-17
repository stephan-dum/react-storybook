export interface ICssClassBody {
  [index: string]: string | number;
}

type IReactStyleClassBodyToString = (style: ICssClassBody) => string;

export  default IReactStyleClassBodyToString;
