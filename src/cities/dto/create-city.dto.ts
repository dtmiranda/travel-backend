import { Prisma } from "@prisma/client";

export class CreateCityDto implements Prisma.CityCreateInput {
  id?: string;
  name: string;
  island: Prisma.IslandCreateNestedOneWithoutCitiesInput;
  trails?: Prisma.TrailCreateNestedManyWithoutCityInput;
  events?: Prisma.EventCreateNestedManyWithoutCityInput;
  profile?: Prisma.ProfileCreateNestedManyWithoutCityInput;
  restaurants?: Prisma.RestaurantCreateNestedManyWithoutCityInput;
  hotels?: Prisma.HotelCreateNestedManyWithoutCityInput;
  create_at?: string | Date;
  update_at?: string | Date;

}
