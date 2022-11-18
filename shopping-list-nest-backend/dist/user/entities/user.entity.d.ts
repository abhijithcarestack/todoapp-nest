import { Todo } from "src/todo/entities/todo.entity";
export declare class User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    todoList: Todo[];
    setPassword(password: string): Promise<void>;
}
