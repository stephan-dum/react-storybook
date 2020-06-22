import {ICssClassBody} from "../../../utils/cssJsonToString/cssJsonToStringClassBody_d";

export type IKeyFrame = [ICssClassBody, number, number?];

type ICreateAnimation = (name: string, frames: IKeyFrame[]) => string;

export default ICreateAnimation;
