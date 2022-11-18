import { Controller, Post, Body } from '@nestjs/common'
import { AuthService } from './auth.service';
import { loginDto } from './login-dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }
    @Post()
    login(@Body() loginDto: loginDto) {
        return this.authService.validateUser(loginDto)

    }

}