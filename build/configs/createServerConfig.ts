import {join} from "path";
import {ITarget} from "../configFactory_d";
import createBaseConfig from "./createBaseConfig";
import ICreateServerConfig from "./createServerConfig_d";
import nodeExternals = require("webpack-node-externals");
import webpackMerge from "webpack-merge";
import {ProvidePlugin, NormalModuleReplacementPlugin} from "webpack";

const createServerConfig: ICreateServerConfig = ({
  cwd,
  base,
  mode
}) => {
  const target = ITarget.node;
  const outputPath = join(cwd, "dist", target);

  const baseConfig = createBaseConfig({
    cwd,
    base,
    mode,
    outputPath,
    target,
    entry: join(cwd, base, "./server/index.tsx")
  });

  const serverConfig = {
    plugins : [
      new NormalModuleReplacementPlugin(
        /preact(\/hooks)?/,
        "react"
      ),
      new ProvidePlugin({
        "h" : ["react", "createElement"],
        "Fragment" : ["react", "Fragment"],
      }),
    ],
    output: {
      path: outputPath,
      filename: "[name].js",
      chunkFilename : "[name].js"
    },
    // externals : [nodeExternals({
    //   whitelist : ["react-dom", "react", "preact", "preact\/hooks", "preact\/compat"]
    // })],
    node: {
      __dirname: true,
    },
    module : {
      rules : [
        {
          test: /\.scss$/,
          use: [
            'null-loader'
          ],
        },
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        }
      ]
    }
  };

  return webpackMerge(baseConfig, serverConfig);
};

export default createServerConfig;


