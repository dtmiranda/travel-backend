import { Prisma } from "@prisma/client";

export class CreateReservationDto implements Prisma.ReservationCreateInput{
  id?: string;
  profile: Prisma.ProfileCreateNestedOneWithoutReservationsInput;
  room: Prisma.RoomCreateNestedOneWithoutReservationsInput;
  create_at?: string | Date;
  update_at?: string | Date;
}
