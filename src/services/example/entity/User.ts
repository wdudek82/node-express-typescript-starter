import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class User extends BaseEntity {
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
}
