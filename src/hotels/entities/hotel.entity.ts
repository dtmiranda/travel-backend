import { Prisma } from "@prisma/client";

export class Hotel implements Prisma.HotelUncheckedCreateInput{
  id?: string;
  name: string;
  coordinate: string;
  thumbnails_hotels?: Prisma.ThumbnailHotelUncheckedCreateNestedManyWithoutHotelInput;
  rooms?: Prisma.RoomUncheckedCreateNestedManyWithoutHotelInput;
  cityId: string;
  create_at?: string | Date;
  update_at?: string | Date;
  
}
