import { Prisma } from "@prisma/client";
import { DecimalJsLike } from "@prisma/client/runtime";

export class CreateTrailDto implements Prisma.TrailCreateInput {
  id?: string;
  name: string;
  description: string;
  length: string | number | Prisma.Decimal | DecimalJsLike;
  difficulty: string;
  duration: string | number | Prisma.Decimal | DecimalJsLike;
  elevation_gain: string | number | Prisma.Decimal | DecimalJsLike;
  start_coordinate: string;
  end_coordinate: string;
  terrain: string;
  views: string;
  price: string | number | Prisma.Decimal | DecimalJsLike;
  city: Prisma.CityCreateNestedOneWithoutTrailsInput;
  create_at?: string | Date;
  update_at?: string | Date;

}
