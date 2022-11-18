import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { relative } from 'path';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>
  ) { }

  create(createUserDto: CreateUserDto) {
    const user = this.userRepo.create(createUserDto);
    return this.userRepo.save(user)
  }

  findAll() {
    return this.userRepo.find({ relations: ['todoList'] });
  }

  findOne(id: number) {
    return this.userRepo.findOne({ where: { id: id }, relations: ['todoList'] });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepo.update(id, updateUserDto);
  }

  remove(id: number) {
    return this.userRepo.delete(id);
  }

  async getUserByEmail(email: string) {
    return this.userRepo.findOne({ where: { email: email } })
  }
}
