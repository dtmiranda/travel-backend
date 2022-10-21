import { Prisma } from '@prisma/client';


export class User implements Prisma.UserUncheckedCreateInput{
    id?: string;
    user_first_name: string;
    user_last_name: string;
    email: string;
}
