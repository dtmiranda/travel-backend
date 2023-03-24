import { Prisma } from "@prisma/client";

export class CreateThumbnailsHotelDto implements Prisma.ThumbnailHotelCreateInput{
  id?: string;
  hotel: Prisma.HotelCreateNestedOneWithoutThumbnails_hotelsInput;
  thumbnail: Prisma.ThumbnailCreateNestedOneWithoutThumbnails_hotelsInput;
  create_at?: string | Date;
  update_at?: string | Date;
}
