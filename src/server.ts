import dotenv from "dotenv";
import path from "path";
import express, { Express, NextFunction, Request, Response } from "express";
import * as http from "http";
import { applyMiddleware } from "./util";
import middleware from "./middleware";

const DEBUG = true;

const ENV_FILE_PATH = `../.env.${DEBUG ? "development" : "production"}`;

// initialize configuration
dotenv.config({
  path: path.resolve(__dirname, ENV_FILE_PATH),
});

const { SERVER_PORT = 8000 } = process.env;

const router: Express = express();
applyMiddleware(middleware, router);

const server = http.createServer(router);

// define a route handler for the default home page
router.get("/", (req: Request, res: Response, next: NextFunction): void => {
  res.send("<h1>Hello, World!:)</h1>");
});

server.listen(SERVER_PORT, () => {
  // tslint:disable-next-line:no-console
  console.log(`Server started at http://localhost:${SERVER_PORT}`);
});
