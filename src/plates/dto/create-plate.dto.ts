import { Prisma } from "@prisma/client";
import { DecimalJsLike } from "@prisma/client/runtime";

export class CreatePlateDto implements Prisma.PlateCreateInput{
  id?: string;
  name: string;
  decription: string;
  price: string | number | Prisma.Decimal | DecimalJsLike;
  photos?: Prisma.PhotoCreateNestedManyWithoutPlateInput;
  restaurant: Prisma.RestaurantCreateNestedOneWithoutPlatesInput;
  create_at?: string | Date;
  update_at?: string | Date;
}
