import { Prisma } from '@prisma/client';


export class User implements Prisma.UserUncheckedCreateInput {
    id?: string;
    email: string;
    password: string;
    profile?: Prisma.ProfileUncheckedCreateNestedOneWithoutUserInput;
    create_at?: string | Date;
    update_at?: string | Date;


}
