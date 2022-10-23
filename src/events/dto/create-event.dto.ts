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
}
