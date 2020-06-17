import webpack from "webpack";
import express from "express";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";

import configFactory from "./configFactory";
import {IRawEnvironment} from "./configFactory_d";
import path from "path";

interface IParams {
  [index: string]: string | IParams;
}

const getEnvArgsRegExp = /^--?((?:\w+)\.(?:\w+))=(['"]?)(.*?)\2$/;
const getEnvArgs = (rawArgs: string[]): IParams => {
  const params: IParams = {};

  rawArgs.forEach((arg) => {
    const match = getEnvArgsRegExp.exec(arg);

    if(match) {
      const [/*all*/, key, /*quote*/, value] = match;

      const namespace = key.split(".");
      const last = namespace.pop();

      const object = namespace.reduce((current, key) => {
        return current[key] || (current[key] = {});
      }, params)as IParams;

      object[last] = value;
    }
  });

  return params;
};

const onStart = () => console.log('Example app listening on port 3000!');
const cwd = process.cwd();

function normalizeAssets(assets: any) {
  if (typeof assets === "object") {
    return Object.values(assets);
  }

  return Array.isArray(assets) ? assets : [assets];
}

const main = (argv: string[]) => {
  const {env} = getEnvArgs(argv);
  const config = configFactory(env as IRawEnvironment);
  const compiler = webpack(config);
  const app = express();
  // app.use("/public", express.static(path.join(cwd, "./dist/web")));
  app.use(webpackDevMiddleware(compiler, {
    serverSideRender : true,
    publicPath : "/"
  }));

  app.use((request, response) => {
    const { stats } = response.locals.webpackStats;
    const jsonWebpackStats = stats.toJson();
    const { assetsByChunkName } = jsonWebpackStats;

    const assets = normalizeAssets(assetsByChunkName.main)
      .filter((path) => path.endsWith('.js'))
      .map((path) => `<script src="${path}"></script>`)
      .join('\n')
    ;
    console.log("assets", assets, assetsByChunkName);
  });

  // app.use(webpackHotMiddleware(compiler));

  app.listen(3000, onStart);
};

main(process.argv.slice(2));


