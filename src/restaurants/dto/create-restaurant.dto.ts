import { Prisma } from "@prisma/client";

export class CreateRestaurantDto implements Prisma.RestaurantCreateInput{
  id?: string;
  name: string;
  coordinate: string;
  thumbnails_restaurant?: Prisma.ThumbnailRestaurantCreateNestedManyWithoutRestaurantInput;
  plates?: Prisma.PlateCreateNestedManyWithoutRestaurantInput;
  city: Prisma.CityCreateNestedOneWithoutRestaurantsInput;
  create_at?: string | Date;
  update_at?: string | Date;
  
}
