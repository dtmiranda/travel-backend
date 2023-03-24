import { PartialType } from '@nestjs/mapped-types';
import { CreateThumbnailsHotelDto } from './create-thumbnails_hotel.dto';

export class UpdateThumbnailsHotelDto extends PartialType(CreateThumbnailsHotelDto) {}
