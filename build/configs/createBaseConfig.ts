import {IMode} from "../configFactory_d";
import ICreateBaseConfig from "./createBaseConfig_d";

import LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
import {ProvidePlugin, HotModuleReplacementPlugin} from 'webpack';
import {CleanWebpackPlugin} from "clean-webpack-plugin";
import DynamicResolverPlugin from "../plugins/DynamicResolverPlugin";
import webpackMerge from "webpack-merge";

const createBaseConfig: ICreateBaseConfig = ({mode, cwd, outputPath, target, entry}) => {
  const plugins = [
    new ProvidePlugin({
      "classNames" : ["classnames"],
    }),
    new LodashModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
  ];

  if(mode === IMode.development) {
    plugins.push(
      new HotModuleReplacementPlugin(),
    );

    webpackMerge({entry}, {entry : 'webpack-hot-middleware/client'});
  }
  return {
    mode,
    entry,
    output: {
      path: outputPath,
      filename: "[name]_[hash].js",
      chunkFilename : "[name]_[contenthash].js",
      publicPath : "/public"
    },
    target,
    resolve: {
      extensions: ['.ts', '.tsx', '.js', 'jsx', 'scss'],
      alias: {
        "~": cwd,
        "classNames" : "classnames"
      },
      plugins : [
        // new DynamicResolverPlugin({
        //   cwd,
        //   needle : "@env",
        //   options : target
        // }),
      ]
    },
    plugins,
  };
};

export default createBaseConfig;
