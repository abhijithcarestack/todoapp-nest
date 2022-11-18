import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';
export declare class TodoService {
    private todoRepo;
    constructor(todoRepo: Repository<Todo>);
    create(createTodoDto: CreateTodoDto, user: User): Promise<{
        description: string;
        user: User;
    } & Todo>;
    findAll(): Promise<Todo[]>;
    findOne(id: number): Promise<Todo>;
    update(id: number, updateTodoDto: UpdateTodoDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
