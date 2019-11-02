import express, { Express } from "express";
import * as http from "http";
import { applyMiddleware, applyRoutes } from "./util";
import middleware from "./middleware";
import routes from "./services";
import dotenv from "dotenv";
import "reflect-metadata";

dotenv.config();

const { SERVER_PORT = 8000 } = process.env;

const router: Express = express();

applyMiddleware(middleware, router);
applyRoutes(routes, router);

const server = http.createServer(router);

server.listen(SERVER_PORT, () => {
  // tslint:disable-next-line:no-console
  console.log(`Server started at http://localhost:${SERVER_PORT}`);
});
