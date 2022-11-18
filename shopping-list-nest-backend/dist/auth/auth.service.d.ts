import { UserService } from 'src/user/user.service';
import { loginDto } from './login-dto';
export declare class AuthService {
    private userService;
    constructor(userService: UserService);
    validateUser(loginDto: loginDto): Promise<{
        userId: number;
    }>;
}
