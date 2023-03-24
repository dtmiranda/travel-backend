import { Prisma } from "@prisma/client";

export class CreatePhotoDto implements Prisma.PhotoCreateInput {
  id?: string;
  link: string;
  create_at?: string | Date;
  update_at?: string | Date;
    
}
