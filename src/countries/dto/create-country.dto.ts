import { Prisma } from "@prisma/client";

export class CreateCountryDto implements Prisma.CountryCreateInput{
  id?: string;
  name: string;
  profile?: Prisma.ProfileCreateNestedOneWithoutCountryInput;
  create_at?: string | Date;
  update_at?: string | Date;
}
