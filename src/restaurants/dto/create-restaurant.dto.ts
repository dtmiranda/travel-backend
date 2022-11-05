import { Prisma } from "@prisma/client";

export class CreateRestaurantDto implements Prisma.RestaurantCreateInput{
  id?: string;
  name: string;
  coordinate: string;
  thumbnails?: Prisma.ThumbnailCreateNestedManyWithoutRestaurantInput;
  plates?: Prisma.PlateCreateNestedManyWithoutRestaurantInput;
  city: Prisma.CityCreateNestedOneWithoutRestaurantsInput;
  create_at?: string | Date;
  update_at?: string | Date;
}
