import { Prisma } from "@prisma/client";

export class CreateProfileDto implements Prisma.ProfileCreateInput {
  id?: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string | Date;
  phoneNumber: string;
  address: string;
  bio?: string;
  profilePic?: string;
  tickets?: Prisma.TicketCreateNestedManyWithoutProfileInput;
  reservations?: Prisma.ReservationCreateNestedManyWithoutProfileInput;
  country: Prisma.CountryCreateNestedOneWithoutProfileInput;
  city: Prisma.CityCreateNestedOneWithoutProfileInput;
  user: Prisma.UserCreateNestedOneWithoutProfileInput;
  Review?: Prisma.ReviewCreateNestedManyWithoutProfileInput;
  create_at?: string | Date;
  update_at?: string | Date;

}
