import {readFileSync} from "fs";
import {join} from "path";

const templatePath = join(process.cwd(), './dist/web/index.html');

const templateRaw = readFileSync(templatePath, "utf-8");
const template = templateRaw.split("{{body}}");

export const startTemplate = template[0];
export const endTemplate = template[1];
