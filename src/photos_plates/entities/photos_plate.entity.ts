import { Prisma } from "@prisma/client";

export class PhotosPlate implements Prisma.PhotoPlateUncheckedCreateInput{
  id?: string;
  link: string;
  plateId: string;
  create_at?: string | Date;
  update_at?: string | Date;
  
}
