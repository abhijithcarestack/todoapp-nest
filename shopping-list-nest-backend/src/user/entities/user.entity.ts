import { Todo } from "src/todo/entities/todo.entity";
import { BeforeInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from 'bcrypt'
import { Logger } from '@nestjs/common';
import { Exclude } from "class-transformer";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    email: string

    @Column()
    password: string

    @OneToMany((type) => Todo, (todo) => todo.user)
    todoList: Todo[]

    @BeforeInsert()
    async setPassword(password: string) {
        const salt = await bcrypt.genSalt()
        this.password = await bcrypt.hash(password || this.password, salt);
    }
}

