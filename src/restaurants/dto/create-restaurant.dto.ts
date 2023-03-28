import { Prisma } from "@prisma/client";

export class CreateRestaurantDto implements Prisma.RestaurantCreateInput {
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
  photos?: Prisma.PhotoCreateNestedManyWithoutRestaurantInput;
  city: Prisma.CityCreateNestedOneWithoutRestaurantsInput;
  Review?: Prisma.ReviewCreateNestedManyWithoutRestaurantInput;
  create_at?: string | Date;
  update_at?: string | Date;


}
