
import { Prisma } from '@prisma/client';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { User } from '../entities/user.entity';

export class CreateUserDto implements Prisma.UserCreateInput {
    id?: string;
    username: string;
    email: string;
    password: string;
    profile?: Prisma.ProfileCreateNestedOneWithoutUserInput;
    create_at?: string | Date;
    update_at?: string | Date;


}
