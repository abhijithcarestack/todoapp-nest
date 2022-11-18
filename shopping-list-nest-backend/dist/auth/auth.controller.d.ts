import { AuthService } from './auth.service';
import { loginDto } from './login-dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(loginDto: loginDto): Promise<{
        userId: number;
    }>;
}
