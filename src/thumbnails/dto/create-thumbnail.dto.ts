import { Prisma } from "@prisma/client";

export class CreateThumbnailDto implements Prisma.ThumbnailCreateInput{
  id?: string;
  name: string;
  thumbnails_hotels?: Prisma.ThumbnailHotelCreateNestedManyWithoutThumbnailInput;
  thumbnails_restaurant?: Prisma.ThumbnailRestaurantCreateNestedManyWithoutThumbnailInput;
  create_at?: string | Date;
  update_at?: string | Date;
}
