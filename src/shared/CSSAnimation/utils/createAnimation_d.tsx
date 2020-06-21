import {ICssClassBody} from "../../../globals/utils/cssJsonToString/cssJsonToStringClassBodyDefinitions";

export type IKeyFrame = [ICssClassBody, number, number?];

type ICreateAnimation = (name: string, frames: IKeyFrame[]) => string;

export default ICreateAnimation;
