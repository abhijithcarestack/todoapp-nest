import { IsEmail, IsNotEmpty, Length } from "class-validator";
import { errorMessages } from "src/Utils/error_messages";

export class CreateUserDto {
    @IsNotEmpty({ message: errorMessages.mandatoryEmpty })
    firstName: string;

    lastName: string;

    @IsNotEmpty({ message: errorMessages.mandatoryEmpty })
    @IsEmail({ message: errorMessages.notEmail })
    email: string;

    @IsNotEmpty({ message: errorMessages.mandatoryEmpty })
    @Length(5, 24, { message: errorMessages.passWordLength })
    password: string
}
