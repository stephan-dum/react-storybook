import express from "express";
import path from "path";
import {renderToNodeStream} from 'react-dom/server';
import { startTemplate, endTemplate } from './template';
import App from '../App';
const PORT = 3000;
const app = express();

app.use("/public", express.static(path.join(process.cwd(), "./dist/web")));

app.get("/", (request, response) => {
  const {
    method,
    path,
    url,
    cookies,
  } = request;

  response.write(startTemplate);

  const context = {
    method, path, query : url.split("?")[1] || '', cookies
  };
  const stream = renderToNodeStream(<App context={context}/>);

  stream.pipe(response, { end: false });

  stream.on("end", () => {
    response.end(endTemplate);
  });
});

app.listen(PORT);
console.log(`Server running on ${PORT}!`);
