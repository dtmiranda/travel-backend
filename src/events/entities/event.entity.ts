import { Prisma } from "@prisma/client";

export class Event implements Prisma.EventUncheckedCreateInput{
    id?: string;
    name: string;
    description: string;
    price: number;
    start_date: string;
    end_date: string;
    event_hour: string;
    event_coodenate: string;
}
