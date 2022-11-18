import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todoRepo: Repository<Todo>
  ) { }

  async create(createTodoDto: CreateTodoDto, user: User) {
    return this.todoRepo.save({ description: createTodoDto.description, user: user })
  }

  findAll() {
    return this.todoRepo.find()
  }

  findOne(id: number) {
    return this.todoRepo.findOne({ where: { id: id } })
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    return this.todoRepo.update(id, updateTodoDto);
  }

  remove(id: number) {
    return this.todoRepo.delete(id);
  }
}
