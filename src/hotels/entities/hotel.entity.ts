import { Prisma } from "@prisma/client";

export class Hotel implements Prisma.HotelUncheckedCreateInput {
  id?: string;
  name: string;
  cityId: string;
  address: string;
  state: string;
  phone: string;
  email?: string;
  website?: string;
  rooms?: Prisma.RoomUncheckedCreateNestedManyWithoutHotelInput;
  photos?: Prisma.PhotoUncheckedCreateNestedManyWithoutHotelInput;
  Review?: Prisma.ReviewUncheckedCreateNestedManyWithoutHotelInput;
  create_at?: string | Date;
  update_at?: string | Date;


}
