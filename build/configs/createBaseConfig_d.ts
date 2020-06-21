import {IMode, ITarget} from "../configFactory_d";
import {Configuration} from "webpack";

type WebpackInternal = "target" | "mode" | "entry";

interface ICreateBaseConfigOptions extends Pick<Configuration, WebpackInternal> {
  cwd: string;
  base: string;
  outputPath: string;
}
type ICreateBaseConfig = (options: ICreateBaseConfigOptions) => Configuration

export default ICreateBaseConfig;
