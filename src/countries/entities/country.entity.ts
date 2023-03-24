import { Prisma } from "@prisma/client";

export class Country implements Prisma.CountryUncheckedCreateInput{
  id?: string;
  name: string;
  profile?: Prisma.ProfileUncheckedCreateNestedOneWithoutCountryInput;
  create_at?: string | Date;
  update_at?: string | Date;
}
