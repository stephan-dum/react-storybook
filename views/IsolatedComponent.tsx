import {FunctionComponent, VNode} from "preact";
import {useState} from "preact/hooks"
import Logger from "~/globals/utils/logger";
import lazyRequire from "~/globals/lazyRequire";
import Loader from "../globals/components/loader";
import {IAppProps} from "~/App";
import Message from "~/globals/components/Message";

const replacer = (url: string) => {
  const name = url
    .replace(/^[.][/\\]/, "")
    .replace(/[/](components|index|themes|stories)|[/\\]|\.stories/g, "")
    .replace(/[.]tsx?$/, "")
    .toLowerCase()
  ;

  Logger.log("registered", name);

  return name;
};

const components = lazyRequire(
  require.context("../components", true, /([/]stories[/]([^/]+[/])?index|[.]stories)[.]tsx?$/),
  replacer
);


// TODO: parts should get abstracted into <Promise>
const IsolatedComponent: FunctionComponent<IAppProps> = ({ context }) => {
  console.log("context", context);
  // TODO: check if we can useRef
  // const [dom, setDom] = useState(<Loader/>);
  const urlParams = new URLSearchParams(context.query);

  const params: {
    [index: string]: any;
  } = {};

  urlParams.forEach((value, key) => {
    params[key] = value;
  });
  console.log("context", context, params);
  const { componentType = '', ...restParams } = params;
  const type = componentType.toLowerCase();

  if(!type) {
    return Message({ children : "Error now component type!" });
  }

  if(!(type in components)) {
    return Message({ children : "Error component type not in components!"});
  }

  // TODO: use suspense
  // console.log("rendering isolated", dom.type);
  // if(typeof dom.type !== "string" && dom.type.name === "Loader") {
  //   new Promise(components[type]).then(
  //     (component: FunctionComponent<any>) => {
  //       setDom(component(restParams));
  //     }
  //   );
  // }
  //
  // return dom;
  console.log("dom elem", components[type]);

  return components[type](restParams);
};

export default IsolatedComponent;
