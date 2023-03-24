import { Prisma } from "@prisma/client";
import { DecimalJsLike } from "@prisma/client/runtime";

export class Trail  implements Prisma.TrailUncheckedCreateInput{
  id?: string;
  name: string;
  description: string;
  start_coordinate: string;
  end_coordinate: string;
  price: string | number | Prisma.Decimal | DecimalJsLike;
  duration: string | Date;
  cityId: string;
  create_at?: string | Date;
  update_at?: string | Date;
}
