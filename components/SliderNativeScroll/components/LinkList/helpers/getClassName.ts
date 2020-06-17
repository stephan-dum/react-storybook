import IGetClassName from "./getClassName_d";

const getClassName: IGetClassName = (index, current) => [
  "slider-link-list__li",
  index === current
    ? 'slider-link-list__li--current'
    : ''
].join(' ');

export default getClassName;
