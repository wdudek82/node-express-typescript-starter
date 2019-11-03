import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 100 })
  title!: string;

  @Column("text")
  body!: string;

  @Column("timestamp")
  publishedAt!: string;

  @ManyToOne(() => User, (user) => user.id)
  author!: User;
}
