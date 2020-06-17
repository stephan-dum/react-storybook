import { join, extname, dirname, basename, relative } from "path";
import Resolver from "./DynamicResolverPlugin_d";
import globby from "globby";

const PLUGIN_NAME = "DynamicResolverPlugin";

//convert windows path to unix
const toUnixPath = (path: string): string => path.replace(new RegExp("\\\\", "g"), "/");

interface IPluginOptions {
  cwd: string;
  base?: string;
  needle: string;
  options: string | string[];
}

class DynamicResolverPlugin {
  private readonly cwd: string;
  private readonly base: string;
  private readonly needle: string;
  private readonly options: string[];

  constructor({ cwd, options, base = '', needle }: IPluginOptions) {
    this.cwd = cwd;
    this.base = base;
    this.needle = needle;
    this.options = (
      Array.isArray(options)
        ? options
        : [options]
    );
  }

  public apply(resolver: Resolver) {
    const target = resolver.ensureHook("resolve");

    resolver
      .getHook("resolve")
      .tapAsync(PLUGIN_NAME, (request, resolveContext, callback) => {

        if(request.request.startsWith(this.needle)) {
          const subRequest = request.request.replace(this.needle, "")+`{.*,/index.*}`;

          //TODO: serialize and stop when found anything
          const urls = this.options.map(
            (option) => toUnixPath(join(this.base, option, subRequest))
          );

          Promise.all(
            urls.map((url) => globby(url))
          ).then((urlsExists) => {
            const match = urlsExists.find((matches) => matches.length);

            if(!match) {
              return callback();
            }

            const path = match[0];

            const redirect = {
              ...request,
              request : "~/"+toUnixPath(
                relative(
                  join(this.cwd, this.base),
                  join(
                    dirname(path),
                    basename(path, extname(path))
                  )
                )
              ),
              path : join(this.cwd, path),
            };

            resolver.doResolve(target, redirect, null, resolveContext, callback);
          });
        } else {
          callback();
        }
      })
    ;
  }
}

export default DynamicResolverPlugin;
