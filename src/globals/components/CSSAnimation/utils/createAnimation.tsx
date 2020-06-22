import cssJsonToStringClassBody from "../../../utils/cssJsonToString/cssJsonToStringClassBody";
import ICreateAnimation, {IKeyFrame} from "./createAnimation_d";

const createKeyframe = ([style, start, end]: IKeyFrame) => (
  start + '%'
  + (end ? ", " + end + '%' : '')
  + ' {' + cssJsonToStringClassBody(style) + "}"
);

// TODO: add prefixes!?
const cssAnimationCreateAnimation: ICreateAnimation = (name, frames = []) => [
  `@keyframes ${name} {`,
  "  " + frames.map(createKeyframe).join("\t\n"),
  '}'
].join("\n");

export default cssAnimationCreateAnimation;
