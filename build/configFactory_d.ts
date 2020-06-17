import {IAnalyze} from "./configs/createAnalyzeConfig_d";
import {Configuration} from "webpack";

export enum IMode {
  development = "development",
  production = "production"
}
export enum ITarget {
  web = "web",
  node = "node",
  webworker = "webworker"
}
export enum IPresets {
  es5 = "es2015",
  es6 = "es2016"
}

export type IEnvironment = Partial<{
  mode: IMode;
  cwd: string;
  analyze: IAnalyze;
  target: ITarget;
}>;
export interface IRawEnvironment {
  [index: string]: string
}


type IConfigFactory = (environment: IRawEnvironment) => Configuration[];

export default IConfigFactory;
