import { Prisma } from "@prisma/client";

export class ThumbnailsHotel implements Prisma.ThumbnailHotelUncheckedCreateInput{
  id?: string;
  hotelId: string;
  thumbnailId: string;
  create_at?: string | Date;
  update_at?: string | Date;
}
