import { Prisma } from "@prisma/client";

export class CreateReviewDto implements Prisma.ReviewCreateInput {
  id?: string;
  comment: string;
  rating: number;
  restaurant?: Prisma.RestaurantCreateNestedManyWithoutReviewInput;
  hotel?: Prisma.HotelCreateNestedManyWithoutReviewInput;
  event?: Prisma.EventCreateNestedManyWithoutReviewInput;
  profile: Prisma.ProfileCreateNestedOneWithoutReviewInput;
  create_at?: string | Date;
  update_at?: string | Date;

}
