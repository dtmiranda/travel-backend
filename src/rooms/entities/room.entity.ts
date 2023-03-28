import { Prisma } from "@prisma/client";
import { DecimalJsLike } from "@prisma/client/runtime";

export class Room implements Prisma.RoomUncheckedCreateInput {
  id?: string;
  number: number;
  type: string;
  description: string;
  amenities: string;
  rate: string | number | Prisma.Decimal | DecimalJsLike;
  capacity: number;
  reservations?: Prisma.ReservationUncheckedCreateNestedManyWithoutRoomInput;
  photos?: Prisma.PhotoUncheckedCreateNestedManyWithoutRoomInput;
  hotelId: string;
  create_at?: string | Date;
  update_at?: string | Date;

}
