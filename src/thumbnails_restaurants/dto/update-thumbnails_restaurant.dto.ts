import { PartialType } from '@nestjs/mapped-types';
import { CreateThumbnailsRestaurantDto } from './create-thumbnails_restaurant.dto';

export class UpdateThumbnailsRestaurantDto extends PartialType(CreateThumbnailsRestaurantDto) {}
