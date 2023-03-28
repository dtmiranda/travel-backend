import { Prisma } from "@prisma/client";

export class Review implements Prisma.ReviewUncheckedCreateInput {
  id?: string;
  comment: string;
  rating: number;
  restaurant?: Prisma.RestaurantUncheckedCreateNestedManyWithoutReviewInput;
  hotel?: Prisma.HotelUncheckedCreateNestedManyWithoutReviewInput;
  event?: Prisma.EventUncheckedCreateNestedManyWithoutReviewInput;
  profileId: string;
  create_at?: string | Date;
  update_at?: string | Date;

}
