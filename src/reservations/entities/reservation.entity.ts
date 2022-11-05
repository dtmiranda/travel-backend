import { Prisma } from "@prisma/client";

export class Reservation  implements Prisma.ReservationUncheckedCreateInput{
  id?: string;
  profileId: string;
  roomId: string;
  create_at?: string | Date;
  update_at?: string | Date;
}
