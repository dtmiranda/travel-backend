import { Prisma } from "@prisma/client";

export class CreateHotelDto implements Prisma.HotelCreateInput {
  id?: string;
  name: string;
  city: Prisma.CityCreateNestedOneWithoutHotelsInput;
  address: string;
  state: string;
  phone: string;
  email?: string;
  website?: string;
  rooms?: Prisma.RoomCreateNestedManyWithoutHotelInput;
  photos?: Prisma.PhotoCreateNestedManyWithoutHotelInput;
  Review?: Prisma.ReviewCreateNestedManyWithoutHotelInput;
  create_at?: string | Date;
  update_at?: string | Date;


}
