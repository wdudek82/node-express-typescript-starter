import { getRepository } from "typeorm";
import { User, Post } from "./entity";

export function getUsers() {
  const userRepository = getRepository(User);
  return userRepository.find();
}

export function getPosts() {
  const userRepository = getRepository(Post);
  return userRepository.find();
}
