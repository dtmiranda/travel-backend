import { Prisma } from "@prisma/client";

export class CreatePhotosPlateDto implements Prisma.PhotoPlateCreateInput{
  id?: string;
  plate: Prisma.PlateCreateNestedOneWithoutPhotos_platesInput;
  photo: Prisma.PhotoCreateNestedOneWithoutPhotos_platesInput;
  create_at?: string | Date;
  update_at?: string | Date;
    
}
