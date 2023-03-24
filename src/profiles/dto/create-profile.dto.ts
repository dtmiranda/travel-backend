import { Prisma } from "@prisma/client";

export class CreateProfileDto implements Prisma.ProfileCreateInput{
  id?: string;
  bio?: string;
  name: string;
  surname: string;
  tickets?: Prisma.TicketCreateNestedManyWithoutProfileInput;
  reservations?: Prisma.ReservationCreateNestedManyWithoutProfileInput;
  country: Prisma.CountryCreateNestedOneWithoutProfileInput;
  user: Prisma.UserCreateNestedOneWithoutProfileInput;
  create_at?: string | Date;
  update_at?: string | Date;
}
