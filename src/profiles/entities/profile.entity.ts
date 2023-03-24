import { Prisma } from "@prisma/client";

export class Profile implements Prisma.ProfileUncheckedCreateInput{
  id?: string;
  bio?: string;
  name: string;
  surname: string;
  tickets?: Prisma.TicketUncheckedCreateNestedManyWithoutProfileInput;
  reservations?: Prisma.ReservationUncheckedCreateNestedManyWithoutProfileInput;
  countryId: string;
  userId: string;
  create_at?: string | Date;
  update_at?: string | Date;
}
