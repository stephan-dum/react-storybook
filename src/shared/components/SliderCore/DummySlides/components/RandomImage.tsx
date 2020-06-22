import {FunctionComponent} from "preact";

type IObjectFit = "cover" | "contain";
type IObjectPositionY = "top" | "center" | "bottom";
type IObjectPositionX = "let" | "center" | "right";

interface ICreateImageOptions {
  fit?: IObjectFit;
  positionY?: IObjectPositionY;
  positionX?: IObjectPositionX;
  version?: string | number;
  width?: number;
  height?: number;
  className?: string;
}

type IRandomImage = FunctionComponent<ICreateImageOptions>;

const RandomImage: IRandomImage = ({
  fit,
  version,
  positionX,
  positionY,
  width,
  height,
  className
}) => (
  <img
    src={`https://picsum.photos/${width}/${height}?v=${version}`}
    width={width}
    height={height}
    className={className}
    alt={"version" + version}
    style={{
      "objectFit" : fit,
      "objectPosition": `${positionY} ${positionX}`,
      "width" : "100%"
    }}
  />
);

let counter = 0;
RandomImage.defaultProps = {
  fit : "cover",
  width : 1600,
  height : 400,
  positionX : "center",
  positionY : "center",
  get version() { return ++counter},
  className: "layer-image"
};

export default RandomImage;
