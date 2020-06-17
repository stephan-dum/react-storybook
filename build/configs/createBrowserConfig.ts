import ICreateBrowserConfig from "./createBrowserConfig_d";
import {ITarget} from "../configFactory_d";
import createBaseConfig from "./createBaseConfig";
import {join} from "path";
import webpackMerge from "webpack-merge";
import HtmlWebpackPlugin = require('html-webpack-plugin');
import ExtractCssChunks from "extract-css-chunks-webpack-plugin";
import {ProvidePlugin} from "webpack";

const createBrowserConfig: ICreateBrowserConfig = ({
  cwd,
  mode,
  preset
}) => {
  const target = ITarget.web;
  const outputPath = join(cwd, "dist", target);

  const baseConfig = createBaseConfig({
    cwd,
    mode,
    outputPath,
    target,
    entry : join(cwd, "./client.tsx"),
  });

  const browserConfig = {
    resolve : {
      alias : {
        "react" : "preact/compat",
        "react-dom/test-utils" : "preact/test-utils",
        "react-dom" : "preact/compat",
      }
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            ExtractCssChunks.loader,
            'css-loader',
            'sass-loader'
          ],
        },
        {
          test: /\.[tj]sx?$/,
          loader: "babel-loader",
          query : {
            presets : [
              [
                "@babel/preset-env",
                {
                  "useBuiltIns": "entry",
                  "corejs" : 3
                }
              ]
            ]
          }
        }
      ]
    },
    plugins : [
      new ExtractCssChunks({
        filename: '[name]_[contenthash].css',
        chunkFilename: '[id]_[contenthash].css',
      }),
      new ProvidePlugin({
        "h" : ["preact", "h"],
        "Fragment" : ["preact", "Fragment"],
        "classNames" : ["classnames"]
      }),
      new HtmlWebpackPlugin({
        template: join(__dirname, '../webpack.index.html')
      }),
    ],
  };

  return webpackMerge(baseConfig, browserConfig)
};

export default createBrowserConfig;
