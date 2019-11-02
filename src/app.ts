import express, { Express } from "express";
import * as http from "http";
import { applyMiddleware, applyRoutes } from "./util";
import middleware from "./middleware";
import routes from "./services";
import dotenv from "dotenv";
import "reflect-metadata";
import { Server } from "http";

dotenv.config();

const { SERVER_PORT = 8000 } = process.env;

const router: Express = express();

applyMiddleware(middleware, router);
applyRoutes(routes, router);

const app: Server = http.createServer(router);

app.listen(SERVER_PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server started at http://localhost:${SERVER_PORT}`);
});
