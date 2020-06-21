import {ISliderActionContext} from "./index";


const loadSlides = ({ state }: ISliderActionContext, type: string): Promise<void> => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 100);
});

export default loadSlides;
