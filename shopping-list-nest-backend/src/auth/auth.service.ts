import { Injectable, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt'
import { loginDto } from './login-dto';
@Injectable()
export class AuthService {
    constructor(private userService: UserService) { }

    async validateUser(loginDto: loginDto) {
        const user = await this.userService.getUserByEmail(loginDto.email)
        Logger.log(user)
        if (!user) throw new HttpException('User does not exist', HttpStatus.NOT_FOUND)
        else if (!(await bcrypt.compare(loginDto.password, user.password))) throw new HttpException('Password does not match', HttpStatus.UNAUTHORIZED)
        else return { userId: user.id }
    }
}
