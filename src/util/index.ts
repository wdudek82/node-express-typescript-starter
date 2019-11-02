import { Router } from "express";
import { NextFunction, Request, Response } from "express";

type Wrapper = (router: Router) => void;

export const applyMiddleware = (middleware: Wrapper[], router: Router) => {
  for (const f of middleware) {
    f(router);
  }
};

export type Handler = (
  req: Request,
  res: Response,
  next: NextFunction,
) => Promise<void> | void;

export interface Route {
  path: string;
  method: string;
  handler: Handler | Handler[];
}

export const applyRoutes = (routes: Route[], router: Router) => {
  for (const route of routes) {
    const { method, path, handler } = route;
    (router as any)[method](path, handler);
  }
};
