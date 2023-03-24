import { Prisma } from "@prisma/client";
import { DecimalJsLike } from "@prisma/client/runtime";

export class CreateEventDto implements Prisma.EventCreateInput{
    id?: string;
    name: string;
    description: string;
    price: string | number | Prisma.Decimal | DecimalJsLike;
    start_date: string | Date;
    end_date: string | Date;
    event_hour: string | Date;
    event_coordenate: string;
    tickets?: Prisma.TicketCreateNestedManyWithoutEventInput;
    city: Prisma.CityCreateNestedOneWithoutEventsInput;
    create_at?: string | Date;
    update_at?: string | Date;
    
}
