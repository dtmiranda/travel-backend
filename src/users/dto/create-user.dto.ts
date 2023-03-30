
import { Prisma } from '@prisma/client';
import { IsEmail, IsNotEmpty, IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto implements Prisma.UserCreateInput {
    id?: string;

    @IsNotEmpty()
    @IsString()
    username: string;

    @IsEmail()
    @IsString()
    email: string;

    @IsString()
    @MinLength(4)
    @MaxLength(12)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'password too weak',
    })
    password: string;
    profile?: Prisma.ProfileCreateNestedOneWithoutUserInput;
    create_at?: string | Date;
    update_at?: string | Date;

}
