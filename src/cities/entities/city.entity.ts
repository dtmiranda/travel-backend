import { Prisma } from "@prisma/client";

export class City implements Prisma.CityUncheckedCreateInput{
  id?: string;
  name: string;
  islandId: string;
  trails?: Prisma.TrailUncheckedCreateNestedManyWithoutCityInput;
  events?: Prisma.EventUncheckedCreateNestedManyWithoutCityInput;
  restaurants?: Prisma.RestaurantUncheckedCreateNestedManyWithoutCityInput;
  hotels?: Prisma.HotelUncheckedCreateNestedManyWithoutCityInput;
  create_at?: string | Date;
  update_at?: string | Date;
}
