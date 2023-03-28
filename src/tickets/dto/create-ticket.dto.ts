import { Prisma } from "@prisma/client";

export class CreateTicketDto implements Prisma.TicketCreateInput {
  id?: string;
  availability: number;
  profile: Prisma.ProfileCreateNestedOneWithoutTicketsInput;
  event: Prisma.EventCreateNestedOneWithoutTicketsInput;
  create_at?: string | Date;
  update_at?: string | Date;

}
