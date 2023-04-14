import { Prisma } from "@prisma/client";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateIslandDto implements Prisma.IslandCreateInput {
  id?: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  cities?: Prisma.CityCreateNestedManyWithoutIslandInput;
  create_at?: string | Date;
  update_at?: string | Date;
}
