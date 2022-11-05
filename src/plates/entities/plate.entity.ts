import { Prisma } from "@prisma/client";
import { DecimalJsLike } from "@prisma/client/runtime";

export class Plate implements Prisma.PlateUncheckedCreateInput{
  id?: string;
  name: string;
  decription: string;
  price: string | number | Prisma.Decimal | DecimalJsLike;
  photos_plates?: Prisma.PhotoPlateUncheckedCreateNestedManyWithoutPlateInput;
  restaurantId: string;
  create_at?: string | Date;
  update_at?: string | Date;
  
}
