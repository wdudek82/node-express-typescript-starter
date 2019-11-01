import dotenv from "dotenv";
import path from "path";
import express, { Express, NextFunction, Request, Response } from "express";

const DEBUG = true;

// initialize configuration
dotenv.config({
  path: path.resolve(
    __dirname,
    `../.env.${DEBUG ? "development" : "production"}`,
  ),
});

const port = process.env.SERVER_PORT;

const app: Express = express();

// define a route handler for the default home page
app.get("/", (req: Request, res: Response, next: NextFunction): void => {
  res.send("<h1>Hello, World!!:)</h1>");
});

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`Server started at http://localhost:${port}`);
});
