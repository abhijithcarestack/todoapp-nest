import { User } from "src/user/entities/user.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Todo {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @ManyToOne((type) => User, (user) => user.todoList)
    user: User
}