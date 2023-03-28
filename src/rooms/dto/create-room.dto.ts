import { Prisma } from "@prisma/client";
import { DecimalJsLike } from "@prisma/client/runtime";

export class CreateRoomDto implements Prisma.RoomCreateInput {
  id?: string;
  number: number;
  type: string;
  description: string;
  amenities: string;
  rate: string | number | Prisma.Decimal | DecimalJsLike;
  capacity: number;
  reservations?: Prisma.ReservationCreateNestedManyWithoutRoomInput;
  photos?: Prisma.PhotoCreateNestedManyWithoutRoomInput;
  hotel: Prisma.HotelCreateNestedOneWithoutRoomsInput;
  create_at?: string | Date;
  update_at?: string | Date;

}
