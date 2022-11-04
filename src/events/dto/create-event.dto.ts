import { Prisma } from "@prisma/client";
import { Timestamp } from "rxjs";

export class CreateEventDto {
    id: string;
    name: string;
    description: string;
    price: number;
    start_date: string;
    end_date: string;
    event_hour: string;
    event_coodenate: string;
    cityId: Prisma.TicketUncheckedCreateNestedManyWithoutEventInput;
    create_at: Date
}
