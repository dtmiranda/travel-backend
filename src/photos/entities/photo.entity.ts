import { Prisma } from "@prisma/client";

export class Photo implements Prisma.PhotoUncheckedCreateInput{
  id?: string;
  link: string;
  create_at?: string | Date;
  update_at?: string | Date;
  
}
