import dotenv from "dotenv";
import path from "path";
import express, { Express } from "express";
import * as http from "http";
import { applyMiddleware, applyRoutes } from "./util";
import middleware from "./middleware";
import routes from "./routes/index";

const DEBUG = true;

const ENV_FILE_PATH = `../.env.${DEBUG ? "development" : "production"}`;

// initialize configuration
dotenv.config({
  path: path.resolve(__dirname, ENV_FILE_PATH),
});

const { SERVER_PORT = 8000 } = process.env;

const router: Express = express();
applyMiddleware(middleware, router);
applyRoutes(routes, router);

const server = http.createServer(router);

server.listen(SERVER_PORT, () => {
  // tslint:disable-next-line:no-console
  console.log(`Server started at http://localhost:${SERVER_PORT}`);
});
