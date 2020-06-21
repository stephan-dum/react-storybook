import {hydrate} from "preact";
import App from "./App";

const root = document.getElementById('root');
const context = {
  method: "GET",
  path: document.location.pathname,
  query : document.location.search,
  cookies : document.cookie,
};

const boot = () => hydrate(<App context={context}/>, root);

if (module.hot) {
  module.hot.accept(boot);
}

boot();
