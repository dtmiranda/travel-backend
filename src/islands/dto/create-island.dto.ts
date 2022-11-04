import { Prisma } from "@prisma/client";

export class CreateIslandDto implements Prisma.IslandCreateInput{
  id?: string;
  name: string;
  cities?: Prisma.CityCreateNestedManyWithoutIslandInput;
  create_at?: string | Date;
  update_at?: string | Date;
}
