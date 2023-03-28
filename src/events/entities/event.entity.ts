import { Prisma } from "@prisma/client";
import { DecimalJsLike } from "@prisma/client/runtime";

export class Event implements Prisma.EventUncheckedUpdateInput {
    id?: string;
    title: string;
    description: string;
    start_date: string | Date;
    end_date: string | Date;
    coordinate: string;
    organizer: string;
    attendees: number;
    category: string;
    price: string | number | Prisma.Decimal | DecimalJsLike;
    tickets?: Prisma.TicketCreateNestedManyWithoutEventInput;
    city: Prisma.CityCreateNestedOneWithoutEventsInput;
    Review?: Prisma.ReviewCreateNestedManyWithoutEventInput;
    create_at?: string | Date;
    update_at?: string | Date;
}
