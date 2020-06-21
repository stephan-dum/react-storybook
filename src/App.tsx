import { FunctionComponent } from "preact";
import IsolatedComponent from "./views/IsolatedComponent";
import {Request} from "express";

type IAppContext = Pick<Request, "method" | "path" | "cookies"> & { query: string }

export interface IAppProps {
  context: IAppContext
}

const App: FunctionComponent<IAppProps> = ({context}) => (
  <IsolatedComponent context={context}/>
);

export default App;
