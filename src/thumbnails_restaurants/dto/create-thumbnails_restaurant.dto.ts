import { Prisma } from "@prisma/client";

export class CreateThumbnailsRestaurantDto  implements Prisma.ThumbnailRestaurantCreateInput{
  id?: string;
  restaurant: Prisma.RestaurantCreateNestedOneWithoutThumbnails_restaurantInput;
  thumbnail: Prisma.ThumbnailCreateNestedOneWithoutThumbnails_restaurantInput;
  create_at?: string | Date;
  update_at?: string | Date;
}
