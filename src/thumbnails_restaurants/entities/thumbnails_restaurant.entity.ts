import { Prisma } from "@prisma/client";

export class ThumbnailsRestaurant implements Prisma.ThumbnailRestaurantUncheckedCreateInput{
  id?: string;
  restaurantId: string;
  thumbnailId: string;
  create_at?: string | Date;
  update_at?: string | Date;
}
