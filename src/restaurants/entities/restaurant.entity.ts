import { Prisma } from "@prisma/client";

export class Restaurant implements Prisma.RestaurantUncheckedCreateInput{
  id?: string;
  name: string;
  coordinate: string;
  thumbnails_restaurant?: Prisma.ThumbnailRestaurantUncheckedCreateNestedManyWithoutRestaurantInput;
  plates?: Prisma.PlateUncheckedCreateNestedManyWithoutRestaurantInput;
  cityId: string;
  create_at?: string | Date;
  update_at?: string | Date;
  
}
