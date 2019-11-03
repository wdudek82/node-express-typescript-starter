import { Route } from "../../util";
import { Request, Response } from "express";
import { getPosts, getUsers } from "./controllers";

export const exampleRoutes: Route[] = [
  {
    path: "/example/users",
    method: "get",
    handler: async (req: Request, res: Response) => {
      const users = await getUsers();
      if (!users) {
        res.status(400).json({ message: "No users found." });
      }
      res.status(200).json(users);
    },
  },
  {
    path: "/example/posts",
    method: "get",
    handler: async (req: Request, res: Response) => {
      const posts = await getPosts();
      if (posts.length === 0) {
        res.status(400).json({ message: "No posts found." });
      }
      res.status(200).json(posts);
    },
  },
];
