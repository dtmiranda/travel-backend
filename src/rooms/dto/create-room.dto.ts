import { Prisma } from "@prisma/client";
import { DecimalJsLike } from "@prisma/client/runtime";

export class CreateRoomDto implements Prisma.RoomCreateInput{
  id?: string;
  daily: string | number | Prisma.Decimal | DecimalJsLike;
  occupied: boolean;
  description: string;
  reservations?: Prisma.ReservationCreateNestedManyWithoutRoomInput;
  photos_rooms?: Prisma.PhotoRoomCreateNestedManyWithoutRoomInput;
  hotel: Prisma.HotelCreateNestedOneWithoutRoomsInput;
  create_at?: string | Date;
  update_at?: string | Date;
}
