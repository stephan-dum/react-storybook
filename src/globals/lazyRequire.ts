import {FunctionComponent} from "react";

interface IChildComponents {
  [index: string]: FunctionComponent;
}

type IURLTransform = (url: string) => string;

type ILazyRequire = (
  context: ReturnType<typeof require.context>,
  transform: IURLTransform,
) => IChildComponents;

type ILazyModulePromise = Promise<{ default: FunctionComponent } | FunctionComponent>;

const lazyRequire: ILazyRequire = (
  context,
  transform,
) => {
  const children: IChildComponents = {};
  context.keys().forEach((url) => {
    const name = transform(url);
    const module = context(url);
    children[name] = "default" in module ? module.default : module;

    // TODO: for this to work we need suspense
    // children[name] = (resolve, reject) => {
    //   context<ILazyModulePromise>(url).then((module) => {
    //     resolve("default" in module ? module.default : module);
    //   }, reject)
    // };
  });

  return children;
};

export default lazyRequire;
