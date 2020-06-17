import {Configuration} from "webpack";
import {IMode} from "../configFactory_d";

interface ICreateWebWorkerConfigOptions {
  cwd: string;
  mode: IMode
}

type ICreateWebWorkerConfig = (options: ICreateWebWorkerConfigOptions) => Configuration;

export default ICreateWebWorkerConfig;
