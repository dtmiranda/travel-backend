import { Prisma } from "@prisma/client";
import { DecimalJsLike } from "@prisma/client/runtime";

export class Reservation implements Prisma.ReservationUncheckedCreateInput {
  id?: string;
  start_date: string | Date;
  end_Date: string | Date;
  guest_count: number;
  total_price: string | number | Prisma.Decimal | DecimalJsLike;
  profileId: string;
  roomId: string;
  create_at?: string | Date;
  update_at?: string | Date;

}
