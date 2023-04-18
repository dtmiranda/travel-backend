import { Prisma } from "@prisma/client";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateCityDto implements Prisma.CityUncheckedCreateInput {

  id?: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  islandId: string;
  trails?: Prisma.TrailCreateNestedManyWithoutCityInput;
  events?: Prisma.EventCreateNestedManyWithoutCityInput;
  profile?: Prisma.ProfileCreateNestedManyWithoutCityInput;
  restaurants?: Prisma.RestaurantCreateNestedManyWithoutCityInput;
  hotels?: Prisma.HotelCreateNestedManyWithoutCityInput;
  create_at?: string | Date;
  update_at?: string | Date;


}
