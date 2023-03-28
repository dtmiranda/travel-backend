import { Prisma } from "@prisma/client";

export class Profile implements Prisma.ProfileUncheckedCreateInput {
  id?: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string | Date;
  phoneNumber: string;
  address: string;
  bio?: string;
  profilePic?: string;
  tickets?: Prisma.TicketUncheckedCreateNestedManyWithoutProfileInput;
  reservations?: Prisma.ReservationUncheckedCreateNestedManyWithoutProfileInput;
  countryId: string;
  cityId: string;
  userId: string;
  Review?: Prisma.ReviewUncheckedCreateNestedManyWithoutProfileInput;
  create_at?: string | Date;
  update_at?: string | Date;

}
