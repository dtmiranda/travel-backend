import { Prisma } from "@prisma/client";

export class CreateHotelDto implements Prisma.HotelCreateInput{
  id?: string;
  name: string;
  coordinate: string;
  thumbnails_hotels?: Prisma.ThumbnailHotelCreateNestedManyWithoutHotelInput;
  rooms?: Prisma.RoomCreateNestedManyWithoutHotelInput;
  city: Prisma.CityCreateNestedOneWithoutHotelsInput;
  create_at?: string | Date;
  update_at?: string | Date;
  
}
