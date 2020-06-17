import {Configuration} from "webpack";

export enum IAnalyze {
  disabled = "disabled",
  es5 = "es5",
  es6 = "es6",
  server = "server"
}

interface ICreateAnalyzeConfigOptions {
  cwd: string;
  analyze: IAnalyze
}

type ICreateAnalyzeConfig = (options: ICreateAnalyzeConfigOptions) => Configuration;

export default ICreateAnalyzeConfig;
