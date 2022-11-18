import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { TodoModule } from './todo/todo.module';
import { Todo } from './todo/entities/todo.entity';
import { AuthModule } from './auth/auth.module';
// import databaseConfig from './configuration/database_config.js'
@Module({
  imports: [UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'todo',
      entities: [User, Todo],
      synchronize: true,
    }),
    TodoModule,
    AuthModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
