import { Prisma } from "@prisma/client";
import { IsArray, IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateRestaurantDto implements Prisma.RestaurantUncheckedCreateInput {

  id?: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsString()
  whatsapp: string;

  @IsEmail()
  email?: string;
  @IsString()
  website?: string;
  rating: number;


  latitude: string;
  longitude: string;

  amenities?: Prisma.AmenitiesUncheckedCreateNestedManyWithoutRestaurantInput;

  @IsNotEmpty()
  @IsString()
  coordinate: string;

  @IsNotEmpty()
  @IsString()
  cuisine: string;
  menu: string;
  photos?: Prisma.PhotoCreateNestedManyWithoutRestaurantInput;

  @IsNotEmpty()
  @IsString()
  cityId: string;

  @IsNotEmpty()
  @IsString()
  userId: string;

  Review?: Prisma.ReviewCreateNestedManyWithoutRestaurantInput;
  create_at?: string | Date;
  update_at?: string | Date;


}
