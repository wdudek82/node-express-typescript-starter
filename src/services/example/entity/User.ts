import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
} from "typeorm";
import { Post } from "./Post";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 100 })
  firstName!: string;

  @Column()
  lastName!: string;

  @Column()
  age!: number;

  @Column("text")
  description!: string;

  @Column("float", { default: 0.0 })
  score!: number;

  @Column({ default: false })
  isStaff!: boolean;

  @Column("timestamp", { nullable: true })
  deletedAt!: string;

  @OneToMany(() => Post, (post) => post.author)
  posts!: Post[];
}
