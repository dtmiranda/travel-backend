import { Prisma } from "@prisma/client";

export class Island implements Prisma.IslandUncheckedCreateInput {
  id?: string;
  name: string;
  cities?: Prisma.CityUncheckedCreateNestedManyWithoutIslandInput;
  create_at?: string | Date;
  update_at?: string | Date;
}
