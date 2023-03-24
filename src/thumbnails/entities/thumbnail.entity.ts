import { Prisma } from "@prisma/client";

export class Thumbnail implements Prisma.ThumbnailUncheckedCreateInput{
  id?: string;
  name: string;
  thumbnails_hotels?: Prisma.ThumbnailHotelUncheckedCreateNestedManyWithoutThumbnailInput;
  thumbnails_restaurant?: Prisma.ThumbnailRestaurantUncheckedCreateNestedManyWithoutThumbnailInput;
  create_at?: string | Date;
  update_at?: string | Date;
}
