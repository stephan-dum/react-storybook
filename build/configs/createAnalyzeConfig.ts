import ICreateAnalyzeConfig, {IAnalyze} from "./createAnalyzeConfig_d";
import {BundleAnalyzerPlugin} from "webpack-bundle-analyzer";
import {IMode, IPresets, ITarget} from "../configFactory_d";
import createServerConfig from "./createServerConfig";
import createBrowserConfig from "./createBrowserConfig";

const createAnalyzeConfig: ICreateAnalyzeConfig = ({
  cwd,
  base,
  analyze
}) => {
  const config = (
    analyze === IAnalyze.server
      ? createServerConfig({
        cwd,
        base,
        mode : IMode.production
      })
      : createBrowserConfig({
        cwd,
        base,
        mode : IMode.production,
        preset : analyze as unknown as IPresets
      })
  );

  config.plugins.push(
    new BundleAnalyzerPlugin()
  );

  return config;
};

export default createAnalyzeConfig;
