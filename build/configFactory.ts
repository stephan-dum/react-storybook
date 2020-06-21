import IConfigFactory, {IEnvironment, IMode, IPresets} from "./configFactory_d";
import {IAnalyze} from "./configs/createAnalyzeConfig_d";
import createAnalyzeConfig from "./configs/createAnalyzeConfig";
import createServerConfig from "./configs/createServerConfig";
import createBrowserConfig from "./configs/createBrowserConfig";
import {join} from "path";
const base = "./src";

const configFactory: IConfigFactory = (env = {}) => {
  const {
    mode = IMode.development,
    cwd = process.cwd(),
    analyze = IAnalyze.disabled,
  }: IEnvironment = env;

  if(analyze !== IAnalyze.disabled) {
    return [
      createAnalyzeConfig({cwd, base, analyze})
    ];
  }

  const configs = [
    createBrowserConfig({ cwd, base, mode, preset : IPresets.es6}),
    createServerConfig({ cwd, base, mode })
  ];

  if(mode === IMode.production) {
    configs.push(
      createBrowserConfig({ cwd, base, mode, preset : IPresets.es5})
    );
  }

  return configs;
};

export default configFactory;
