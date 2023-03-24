import { Prisma } from "@prisma/client";
import { DecimalJsLike } from "@prisma/client/runtime";

export class Event implements Prisma.EventUncheckedCreateInput{
    id?: string;
    name: string;
    description: string;
    price: string | number | Prisma.Decimal | DecimalJsLike;
    start_date: string | Date;
    end_date: string | Date;
    event_hour: string | Date;
    event_coordenate: string;
    tickets?: Prisma.TicketUncheckedCreateNestedManyWithoutEventInput;
    cityId: string;
    create_at?: string | Date;
        
}
