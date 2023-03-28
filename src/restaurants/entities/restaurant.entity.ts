import { Prisma } from "@prisma/client";

export class Restaurant implements Prisma.RestaurantUncheckedCreateInput {
  id?: string;
  name: string;
  description: string;
  address: string;
  whatsapp: string;
  email?: string;
  website?: string;
  rating: number;
  amenities: string;
  coordinate: string;
  cuisine: string;
  menu: string;
  photos?: Prisma.PhotoUncheckedCreateNestedManyWithoutRestaurantInput;
  cityId: string;
  Review?: Prisma.ReviewUncheckedCreateNestedManyWithoutRestaurantInput;
  create_at?: string | Date;
  update_at?: string | Date;


}
