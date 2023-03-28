import { Prisma } from "@prisma/client";

export class Ticket implements Prisma.TicketUncheckedCreateInput {
  id?: string;
  availability: number;
  profileId: string;
  eventId: string;
  create_at?: string | Date;
  update_at?: string | Date;

}
