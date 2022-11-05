import { Prisma } from "@prisma/client";

export class CreatePhotosPlateDto implements Prisma.PhotoPlateCreateInput{
  id?: string;
  link: string;
  plate: Prisma.PlateCreateNestedOneWithoutPhotos_platesInput;
  create_at?: string | Date;
  update_at?: string | Date;
  
}
