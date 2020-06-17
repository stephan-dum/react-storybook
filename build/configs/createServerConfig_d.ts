import {Configuration} from "webpack";
import {IMode} from "../configFactory_d";

interface ICreateServerConfigOptions {
  cwd: string;
  mode: IMode
}

type ICreateServerConfig = (options: ICreateServerConfigOptions) => Configuration;

export default ICreateServerConfig;
