import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { UserService } from 'src/user/user.service';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService,
    private readonly userService: UserService) { }

  @Post()
  async create(@Body() createTodoDto: CreateTodoDto) {
    const user = await this.userService.findOne(createTodoDto.userId)
    return this.todoService.create(createTodoDto, user);
  }

  @Get()
  findAll() {
    return this.todoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todoService.update(+id, updateTodoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todoService.remove(+id);
  }
}
