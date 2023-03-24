import { Prisma } from "@prisma/client";

export class PhotosPlate implements Prisma.PhotoPlateUncheckedCreateInput{
  id?: string;
  plateId: string;
  photoId: string;
  create_at?: string | Date;
  update_at?: string | Date;
 
}
