import cssJsonToStringClass from "~/globals/utils/cssJsonToString/cssJsonToStringClass";
import IReactStyle from "./index_d";
import Template from "./template";
import {ICssJson} from "../../utils/cssJsonToString/cssJsonToStringClassDeinitions";

const toString = Object.prototype.toString;

const Index: IReactStyle = ({
  children = ""
}) => Template({
  html : (
    toString.call(children) === "[object String]"
      ? children as string
      : cssJsonToStringClass(children as ICssJson)
  )
});

export default Index;
