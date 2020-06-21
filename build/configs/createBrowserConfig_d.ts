import {Configuration} from "webpack";
import {IMode, IPresets} from "../configFactory_d";

interface ICreateBrowserConfigOptions {
  cwd: string;
  base: string;
  mode: IMode;
  preset: IPresets
}

type ICreateBrowserConfig = (options: ICreateBrowserConfigOptions) => Configuration;

export default ICreateBrowserConfig;
