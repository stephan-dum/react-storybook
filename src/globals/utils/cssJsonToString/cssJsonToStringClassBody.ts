import IReactStyleClassBodyToString from "./cssJsonToStringClassBodyDefinitions";

const cssJsonToStringClassBody: IReactStyleClassBodyToString = (style) => (
  Object.entries(style).map(
    ([key, value]) => `${key} : ${value};`
  ).join("\n")
);

export default cssJsonToStringClassBody;
