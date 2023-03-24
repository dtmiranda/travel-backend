import { Prisma } from "@prisma/client";
import { DecimalJsLike } from "@prisma/client/runtime";

export class Room implements Prisma.RoomUncheckedCreateInput{
  id?: string;
  daily: string | number | Prisma.Decimal | DecimalJsLike;
  occupied: boolean;
  description: string;
  reservations?: Prisma.ReservationUncheckedCreateNestedManyWithoutRoomInput;
  photos_rooms?: Prisma.PhotoRoomUncheckedCreateNestedManyWithoutRoomInput;
  hotelId: string;
  create_at?: string | Date;
  update_at?: string | Date;
}
