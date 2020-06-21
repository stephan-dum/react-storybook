import IReactStyleClassToString from "./cssJsonToStringClassDeinitions";
import cssJsonToStringClassBody from "./cssJsonToStringClassBody";

const cssJsonToStringClass: IReactStyleClassToString = (classList) => (
  (
    Array.isArray(classList)
      ? classList
      : [classList]
  )
  .map(
    ({selector, body}) => [
      (Array.isArray(selector)?selector.join(""):selector) + " {",
      "  " + cssJsonToStringClassBody(body),
      "}"
    ].join("\n")
  )
  .join("\n")
);

export default cssJsonToStringClass;
