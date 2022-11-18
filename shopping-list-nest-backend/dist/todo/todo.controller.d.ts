import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { UserService } from 'src/user/user.service';
export declare class TodoController {
    private readonly todoService;
    private readonly userService;
    constructor(todoService: TodoService, userService: UserService);
    create(createTodoDto: CreateTodoDto): Promise<{
        description: string;
        user: import("../user/entities/user.entity").User;
    } & import("./entities/todo.entity").Todo>;
    findAll(): Promise<import("./entities/todo.entity").Todo[]>;
    findOne(id: string): Promise<import("./entities/todo.entity").Todo>;
    update(id: string, updateTodoDto: UpdateTodoDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
