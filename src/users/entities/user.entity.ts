import { Prisma } from '@prisma/client';


export class User implements Prisma.UserUncheckedCreateInput{
    id?: string;
    first_name: string;
    last_name: string;
    email: string;
    

}
