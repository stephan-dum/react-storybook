import {ITarget} from "../configFactory_d";
import {join} from "path";
import ICreateWebWorkerConfig from "./createWebWorkerConfig_d";

const createWebWorkerConfig: ICreateWebWorkerConfig = ({
  cwd,
  mode
}) => {
  const target = ITarget.webworker;
  const outputPath = join(cwd, "dist", target);

  return {
    mode,
    entry : "./service-worker.ts",
    target,
    output: {
      path: outputPath
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', 'jsx'],
      "~": cwd,
    },
    module : {
      rules : [
        {
          test: /\.[tj]sx?$/,
          loader: "babel-loader",
        }
      ]
    }
  };
};

export default createWebWorkerConfig;
